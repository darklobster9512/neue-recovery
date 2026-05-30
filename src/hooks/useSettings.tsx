import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface SettingsContextType {
  phone: string;
  phoneEnabled: boolean;
  isLoading: boolean;
  updatePhone: (newPhone: string) => Promise<void>;
  updatePhoneEnabled: (enabled: boolean) => Promise<void>;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
  const [phone, setPhone] = useState<string>('000000000');
  const [phoneEnabled, setPhoneEnabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('settings')
        .select('key, value')
        .in('key', ['phone', 'phone_enabled']);

      if (error) {
        console.error('Error fetching settings:', error);
        setPhone('000000000');
        setPhoneEnabled(true);
      } else {
        const phoneRow = data?.find(row => row.key === 'phone');
        const phoneEnabledRow = data?.find(row => row.key === 'phone_enabled');
        
        setPhone(phoneRow?.value || '000000000');
        setPhoneEnabled(phoneEnabledRow?.value === 'true');
      }
    } catch (error) {
      console.error('Error fetching settings:', error);
      setPhone('000000000');
      setPhoneEnabled(true);
    } finally {
      setIsLoading(false);
    }
  };

  const updatePhone = async (newPhone: string) => {
    const { error } = await supabase
      .from('settings')
      .upsert({ key: 'phone', value: newPhone })
      .eq('key', 'phone');

    if (error) {
      throw error;
    }

    setPhone(newPhone);
  };

  const updatePhoneEnabled = async (enabled: boolean) => {
    const { error } = await supabase
      .from('settings')
      .upsert({ key: 'phone_enabled', value: enabled.toString() })
      .eq('key', 'phone_enabled');

    if (error) {
      throw error;
    }

    setPhoneEnabled(enabled);
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const value = {
    phone,
    phoneEnabled,
    isLoading,
    updatePhone,
    updatePhoneEnabled,
  };

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
};