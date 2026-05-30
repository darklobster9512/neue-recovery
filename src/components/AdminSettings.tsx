import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { useSettings } from '@/hooks/useSettings';
import { supabase } from '@/integrations/supabase/client';
import { Phone, Save } from 'lucide-react';

export const AdminSettings = () => {
  const { toast } = useToast();
  const { phone, phoneEnabled, updatePhone, updatePhoneEnabled } = useSettings();
  const [phoneInput, setPhoneInput] = useState(phone);
  const [phoneEnabledInput, setPhoneEnabledInput] = useState(phoneEnabled);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPhoneInput(phone);
    setPhoneEnabledInput(phoneEnabled);
  }, [phone, phoneEnabled]);

  const handleSavePhone = async () => {
    if (!phoneInput.trim()) {
      toast({
        title: "Fehler",
        description: "Telefonnummer darf nicht leer sein.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      await updatePhone(phoneInput.trim());
      toast({
        title: "Erfolgreich gespeichert",
        description: "Die Telefonnummer wurde erfolgreich aktualisiert.",
      });
    } catch (error) {
      console.error('Error updating phone:', error);
      toast({
        title: "Fehler",
        description: "Fehler beim Speichern der Telefonnummer.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleTogglePhoneEnabled = async (enabled: boolean) => {
    setIsLoading(true);
    try {
      await updatePhoneEnabled(enabled);
      setPhoneEnabledInput(enabled);
      toast({
        title: "Erfolgreich gespeichert",
        description: `Telefonnummer wurde ${enabled ? 'aktiviert' : 'deaktiviert'}.`,
      });
    } catch (error) {
      console.error('Error updating phone enabled:', error);
      toast({
        title: "Fehler",
        description: "Fehler beim Speichern der Einstellung.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Einstellungen</h2>
        <p className="text-muted-foreground">
          Verwalten Sie die allgemeinen Einstellungen der Website.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Kontaktinformationen
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="phone-enabled">Telefonnummer anzeigen</Label>
                <p className="text-xs text-muted-foreground">
                  Telefonnummer auf der Website und in E-Mails anzeigen
                </p>
              </div>
              <Switch
                id="phone-enabled"
                checked={phoneEnabledInput}
                onCheckedChange={handleTogglePhoneEnabled}
                disabled={isLoading}
              />
            </div>
            
            {phoneEnabledInput && (
              <div className="grid gap-2">
                <Label htmlFor="phone">Telefonnummer</Label>
                <div className="flex gap-2">
                  <Input
                    id="phone"
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    placeholder="Telefonnummer eingeben"
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleSavePhone} 
                    disabled={isLoading || phoneInput === phone}
                    size="sm"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {isLoading ? 'Speichern...' : 'Speichern'}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Diese Telefonnummer wird auf der gesamten Website angezeigt.
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};