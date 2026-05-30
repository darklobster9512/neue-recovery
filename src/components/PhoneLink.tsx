import { useSettings } from '@/hooks/useSettings';

interface PhoneLinkProps {
  className?: string;
  children?: React.ReactNode;
}

export const PhoneLink = ({ className = "text-primary hover:underline font-medium", children }: PhoneLinkProps) => {
  const { phone, phoneEnabled } = useSettings();
  
  if (!phoneEnabled) {
    return null;
  }
  
  return (
    <a href={`tel:${phone}`} className={className}>
      {children || phone}
    </a>
  );
};