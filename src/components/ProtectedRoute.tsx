import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

export const ProtectedRoute = ({ children, requireAdmin = false }: ProtectedRouteProps) => {
  const { user, loading, isAdmin, adminLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate('/auth');
        return;
      }
      
      if (requireAdmin && !adminLoading && !isAdmin) {
        navigate('/');
        return;
      }
    }
  }, [user, loading, isAdmin, adminLoading, requireAdmin, navigate]);

  if (loading || (requireAdmin && adminLoading)) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center">
        <div className="text-lg">Laden...</div>
      </div>
    );
  }

  if (!user) return null;
  if (requireAdmin && !isAdmin) return null;

  return <>{children}</>;
};