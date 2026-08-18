import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Send, Save, Bell } from 'lucide-react';

export const TelegramSettings = () => {
  const { toast } = useToast();
  const [chatId, setChatId] = useState('');
  const [savedChatId, setSavedChatId] = useState('');
  const [enabled, setEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTesting, setIsTesting] = useState(false);

  const loadSettings = async () => {
    const { data, error } = await supabase
      .from('settings')
      .select('key, value')
      .in('key', ['telegram_chat_id', 'telegram_enabled']);

    if (error) {
      console.error('Error loading telegram settings:', error);
      return;
    }

    const id = data?.find((row) => row.key === 'telegram_chat_id')?.value ?? '';
    setChatId(id);
    setSavedChatId(id);
    setEnabled(data?.find((row) => row.key === 'telegram_enabled')?.value === 'true');
  };

  useEffect(() => {
    loadSettings();
  }, []);

  const saveSetting = async (key: string, value: string) => {
    const { error } = await supabase
      .from('settings')
      .upsert({ key, value }, { onConflict: 'key' });
    if (error) throw error;
  };

  const handleSaveChatId = async () => {
    setIsLoading(true);
    try {
      await saveSetting('telegram_chat_id', chatId.trim());
      setSavedChatId(chatId.trim());
      toast({
        title: 'Gespeichert',
        description: 'Die Telegram Chat-ID wurde aktualisiert.',
      });
    } catch (error) {
      console.error('Error saving chat id:', error);
      toast({
        title: 'Fehler',
        description: 'Die Chat-ID konnte nicht gespeichert werden.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggle = async (value: boolean) => {
    setIsLoading(true);
    try {
      await saveSetting('telegram_enabled', value.toString());
      setEnabled(value);
      toast({
        title: 'Gespeichert',
        description: `Telegram-Benachrichtigungen ${value ? 'aktiviert' : 'deaktiviert'}.`,
      });
    } catch (error) {
      console.error('Error saving telegram enabled:', error);
      toast({
        title: 'Fehler',
        description: 'Die Einstellung konnte nicht gespeichert werden.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleTest = async () => {
    setIsTesting(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-telegram-notification', {
        body: {
          test: true,
          chat_id_override: chatId.trim(),
          name: 'Max Mustermann',
          email: 'max.mustermann@example.com',
          phone: '040 1234567',
          topic: 'Krypto-Recovery',
          damage_amount: '50.000 - 100.000 EUR',
          message: 'Dies ist eine Testnachricht aus dem Admin-Panel von Korte & Partner.',
        },
      });

      if (error || (data as any)?.error) {
        console.error('Telegram test failed:', error, data);
        toast({
          title: 'Test fehlgeschlagen',
          description: 'Bitte Chat-ID und Bot-Token prüfen.',
          variant: 'destructive',
        });
        return;
      }

      toast({
        title: 'Testnachricht gesendet',
        description: 'Prüfen Sie Ihren Telegram-Chat.',
      });
    } catch (error) {
      console.error('Telegram test error:', error);
      toast({
        title: 'Test fehlgeschlagen',
        description: 'Unerwarteter Fehler beim Senden.',
        variant: 'destructive',
      });
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Telegram</h2>
        <p className="text-muted-foreground">
          Benachrichtigungen über neue Kontaktanfragen direkt in Telegram erhalten.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Benachrichtigungen
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="telegram-enabled">Benachrichtigungen aktiv</Label>
              <p className="text-xs text-muted-foreground">
                Bei jeder neuen Kontaktanfrage wird eine Telegram-Nachricht gesendet.
              </p>
            </div>
            <Switch
              id="telegram-enabled"
              checked={enabled}
              onCheckedChange={handleToggle}
              disabled={isLoading}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="telegram-chat-id">Chat-ID</Label>
            <div className="flex gap-2">
              <Input
                id="telegram-chat-id"
                value={chatId}
                onChange={(e) => setChatId(e.target.value)}
                placeholder="z. B. 123456789"
                className="flex-1"
              />
              <Button
                onClick={handleSaveChatId}
                disabled={isLoading || chatId.trim() === savedChatId}
                size="sm"
              >
                <Save className="h-4 w-4 mr-2" />
                Speichern
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Chat-ID herausfinden: In Telegram <span className="font-medium">@userinfobot</span>{' '}
              starten – dieser zeigt Ihre ID an. Anschließend einmal einen Chat mit Ihrem eigenen
              Bot starten (<span className="font-medium">/start</span>), damit er Ihnen schreiben darf.
            </p>
          </div>

          <div>
            <Button
              variant="outline"
              onClick={handleTest}
              disabled={isTesting || !chatId.trim()}
            >
              <Send className="h-4 w-4 mr-2" />
              {isTesting ? 'Senden...' : 'Testnachricht senden'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
