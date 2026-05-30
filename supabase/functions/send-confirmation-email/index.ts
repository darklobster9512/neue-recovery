import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Initialize Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_ANON_KEY') ?? '',
);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  topic: string;
  damage_amount?: string;
  message: string;
}

const createEmailTemplate = (data: ContactEmailRequest, firmPhone: string, phoneEnabled: boolean = true): string => {
  return `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bestätigung Ihrer Anfrage - Bovensiepen & Partner</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; line-height: 1.6; color: #333;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, hsl(214 100% 14%) 0%, hsl(214 85% 20%) 100%); padding: 40px 30px; text-align: center;">
      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
        Bovensiepen & Partner
      </h1>
      <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px;">
        Rechtsanwälte für Krypto-Recovery
      </p>
    </div>

    <!-- Main Content -->
    <div style="padding: 40px 30px;">
      
      <!-- Greeting -->
      <h2 style="color: hsl(214 100% 14%); font-size: 24px; font-weight: 600; margin: 0 0 20px 0;">
        Sehr geehrte/r ${data.name},
      </h2>
      
      <!-- Confirmation Message -->
      <p style="font-size: 16px; margin: 0 0 25px 0; color: #444;">
        vielen Dank für Ihre Anfrage! Wir haben Ihre Nachricht erfolgreich erhalten und werden uns <strong>innerhalb der nächsten 60 Minuten</strong> bei Ihnen melden.
      </p>

      <!-- Data Overview -->
      <div style="background-color: #f8fafc; border-left: 4px solid hsl(214 100% 14%); padding: 20px; margin: 25px 0; border-radius: 4px;">
        <h3 style="color: hsl(214 100% 14%); font-size: 18px; font-weight: 600; margin: 0 0 15px 0;">
          Ihre Angaben im Überblick:
        </h3>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #555; width: 140px; vertical-align: top;">Name:</td>
            <td style="padding: 8px 0; color: #333;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #555; vertical-align: top;">E-Mail:</td>
            <td style="padding: 8px 0; color: #333;">${data.email}</td>
          </tr>
          ${data.phone ? `
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #555; vertical-align: top;">Telefon:</td>
            <td style="padding: 8px 0; color: #333;">${data.phone}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #555; vertical-align: top;">Thema:</td>
            <td style="padding: 8px 0; color: #333;">${data.topic}</td>
          </tr>
          ${data.damage_amount ? `
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #555; vertical-align: top;">Schadenssumme:</td>
            <td style="padding: 8px 0; color: #333;">${data.damage_amount}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #555; vertical-align: top;">Nachricht:</td>
            <td style="padding: 8px 0; color: #333; white-space: pre-wrap;">${data.message}</td>
          </tr>
        </table>
      </div>

      <!-- Next Steps -->
      <div style="background-color: #e1f5fe; padding: 20px; border-radius: 8px; margin: 25px 0; border: 1px solid #b3e5fc;">
        <h3 style="color: hsl(214 100% 14%); font-size: 18px; font-weight: 600; margin: 0 0 15px 0;">
          So geht es weiter:
        </h3>
        <ul style="margin: 0; padding-left: 20px; color: #444;">
          <li style="margin-bottom: 8px;">Ein spezialisierter Anwalt unserer Kanzlei wird Ihren Fall prüfen</li>
          <li style="margin-bottom: 8px;">Sie erhalten innerhalb von 60 Minuten eine Rückmeldung zu Ihren Erfolgsaussichten</li>
          <li style="margin-bottom: 8px;">Die Erstberatung ist für Sie völlig kostenlos und unverbindlich</li>
        </ul>
      </div>

      <!-- Emergency Contact -->
      ${phoneEnabled ? `
      <div style="background-color: #fff3e0; padding: 20px; border-radius: 8px; margin: 25px 0; border: 1px solid #ffcc02;">
        <h3 style="color: #e65100; font-size: 18px; font-weight: 600; margin: 0 0 15px 0;">
          Dringender Fall?
        </h3>
        <p style="margin: 0; color: #444;">
          Bei besonders eiligen Fällen können Sie uns auch direkt telefonisch erreichen:<br>
          <strong style="color: hsl(214 100% 14%); font-size: 18px;">${firmPhone}</strong>
        </p>
      </div>
      ` : ''}

      <!-- Closing -->
      <p style="font-size: 16px; margin: 30px 0 0 0; color: #444;">
        Mit freundlichen Grüßen<br>
        <strong style="color: hsl(214 100% 14%);">Ihr Team von Bovensiepen & Partner</strong>
      </p>
    </div>

    <!-- Footer -->
    <div style="background-color: #f8fafc; padding: 30px; border-top: 1px solid #e2e8f0; text-align: center;">
      
      <!-- Contact Info -->
      <div style="margin-bottom: 20px;">
        <h4 style="color: hsl(214 100% 14%); font-size: 16px; font-weight: 600; margin: 0 0 10px 0;">
          Bovensiepen & Partner
        </h4>
        <p style="margin: 5px 0; color: #666; font-size: 14px;">
          Nymphenburger Str. 20, 80335 München
        </p>
        <p style="margin: 5px 0; color: #666; font-size: 14px;">
          E-Mail: info@bovensiepenpartner.de
        </p>
        <p style="margin: 5px 0; color: #666; font-size: 14px;">
          Öffnungszeiten: Mo-Fr 8:00-18:00 | Sa 9:00-14:00
        </p>
      </div>

      <!-- Disclaimer -->
      <div style="border-top: 1px solid #e2e8f0; padding-top: 20px;">
        <p style="margin: 0; color: #888; font-size: 12px; line-height: 1.4;">
          Diese E-Mail wurde automatisch generiert. Bitte antworten Sie nicht direkt auf diese E-Mail. 
          Bei Rückfragen wenden Sie sich bitte an info@bovensiepenpartner.de oder rufen Sie uns an.
        </p>
      </div>
    </div>

  </div>
</body>
</html>
  `;
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Received confirmation email request");
    
    const requestData: ContactEmailRequest = await req.json();
    console.log("Request data:", { ...requestData, message: requestData.message.substring(0, 100) + "..." });

    // Validate required fields
    if (!requestData.name || !requestData.email || !requestData.topic || !requestData.message) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Fetch phone number and phone enabled setting from settings
    const { data: settingsData, error: settingsError } = await supabase
      .from('settings')
      .select('key, value')
      .in('key', ['phone', 'phone_enabled']);

    if (settingsError) {
      console.error('Error fetching settings:', settingsError);
    }

    const phoneRow = settingsData?.find(row => row.key === 'phone');
    const phoneEnabledRow = settingsData?.find(row => row.key === 'phone_enabled');
    
    const firmPhone = phoneRow?.value || '000000000';
    const phoneEnabled = phoneEnabledRow?.value === 'true';
    
    console.log("Loaded settings from database:", { firmPhone, phoneEnabled });

    // Generate email content
    const emailHtml = createEmailTemplate(requestData, firmPhone, phoneEnabled);

    // Send email via Resend
    console.log("Sending email to:", requestData.email);
    
    const emailResponse = await resend.emails.send({
      from: "Bovensiepen & Partner <info@bovensiepenpartner.de>",
      to: [requestData.email],
      subject: "Bestätigung Ihrer Anfrage - Bovensiepen & Partner",
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error("Error in send-confirmation-email function:", error);
    
    return new Response(
      JSON.stringify({ error: error.message || "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);