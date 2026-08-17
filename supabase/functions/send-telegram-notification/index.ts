import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
);

interface NotificationRequest {
  name: string;
  email: string;
  phone?: string | null;
  topic: string;
  damage_amount?: string | null;
  message: string;
  test?: boolean;
  chat_id_override?: string;
}

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const buildMessage = (data: NotificationRequest): string => {
  const lines: string[] = [];
  lines.push(`🔔 <b>${data.test ? 'Testnachricht' : 'Neue Kontaktanfrage'}</b>`);
  lines.push('');
  lines.push(`<b>Name:</b> ${escapeHtml(data.name)}`);
  lines.push(`<b>E-Mail:</b> ${escapeHtml(data.email)}`);
  if (data.phone) lines.push(`<b>Telefon:</b> ${escapeHtml(data.phone)}`);
  lines.push(`<b>Thema:</b> ${escapeHtml(data.topic)}`);
  if (data.damage_amount) {
    lines.push(`<b>Schadenshöhe:</b> ${escapeHtml(data.damage_amount)}`);
  }
  lines.push('');
  lines.push('<b>Nachricht:</b>');
  lines.push(escapeHtml(data.message));
  return lines.join('\n');
};

Deno.serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const botToken = Deno.env.get('TELEGRAM_BOT_TOKEN');
    if (!botToken) {
      console.error('TELEGRAM_BOT_TOKEN is not configured');
      return new Response(
        JSON.stringify({ error: 'TELEGRAM_BOT_TOKEN is not configured' }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    const body: NotificationRequest = await req.json();

    if (!body.name || !body.email || !body.topic || !body.message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    const { data: settingsData, error: settingsError } = await supabase
      .from('settings')
      .select('key, value')
      .in('key', ['telegram_chat_id', 'telegram_enabled']);

    if (settingsError) {
      console.error('Error fetching settings:', settingsError);
    }

    const chatId = body.chat_id_override?.trim() ||
      settingsData?.find((row) => row.key === 'telegram_chat_id')?.value?.trim();
    const enabled =
      settingsData?.find((row) => row.key === 'telegram_enabled')?.value === 'true';

    if (!body.test && !enabled) {
      console.log('Telegram notifications disabled — skipping');
      return new Response(JSON.stringify({ skipped: 'disabled' }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    if (!chatId) {
      return new Response(
        JSON.stringify({ error: 'Keine Chat-ID hinterlegt' }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: buildMessage(body),
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    });

    const result = await response.json();

    if (!response.ok || result?.ok === false) {
      console.error(`Telegram API error [${response.status}]:`, JSON.stringify(result));
      return new Response(
        JSON.stringify({ error: 'Telegram request failed', details: result }),
        { status: 502, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    console.log('Telegram notification sent to chat', chatId);

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error('Error in send-telegram-notification:', error);
    return new Response(
      JSON.stringify({ error: error?.message || 'Internal server error' }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } },
    );
  }
});
