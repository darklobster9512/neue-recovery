import React, { createContext, useContext, ReactNode } from 'react';

// Statische Einstellungen (keine Datenbank-Verbindung mehr).
const PHONE = '030 692097830';
const PHONE_ENABLED = true;

interface SettingsContextType {
  phone: string;
  phoneEnabled: boolean;
  isLoading: boolean;
}

const SettingsContext = createContext<SettingsContextType>({
  phone: PHONE,
  phoneEnabled: PHONE_ENABLED,
  isLoading: false,
});

export const useSettings = () => useContext(SettingsContext);

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
  const value: SettingsContextType = {
    phone: PHONE,
    phoneEnabled: PHONE_ENABLED,
    isLoading: false,
  };

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
};
