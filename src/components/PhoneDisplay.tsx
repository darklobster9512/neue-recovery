import { useSettings } from '@/hooks/useSettings';

export const PhoneDisplay = () => {
  const { phone, phoneEnabled } = useSettings();
  
  if (!phoneEnabled) {
    return null;
  }
  
  return (
    <a href={`tel:${phone}`} className="text-gray-300 hover:text-white transition-colors">
      {phone}
    </a>
  );
};