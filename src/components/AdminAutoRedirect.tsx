
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export const AdminAutoRedirect = () => {
  const { user, isAdmin, adminLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Only redirect if user is logged in, admin check is complete, user is admin, and not already on admin page
    if (user && !adminLoading && isAdmin && location.pathname !== '/admin') {
      console.log('Auto-redirecting admin user to /admin');
      navigate('/admin');
    }
  }, [user, isAdmin, adminLoading, navigate, location.pathname]);

  return null; // This component doesn't render anything
};
