
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/useAuth';
import { Header } from '@/components/Header';

const authSchema = z.object({
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  password: z.string().min(6, 'Passwort muss mindestens 6 Zeichen haben'),
});

type AuthFormData = z.infer<typeof authSchema>;

export default function Auth() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('signin');
  const { signIn, signUp, user, isAdmin, adminLoading } = useAuth();
  const navigate = useNavigate();

  const form = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // Redirect logic for already logged in users
  useEffect(() => {
    if (user && !adminLoading) {
      if (isAdmin) {
        console.log('Redirecting admin user to /admin');
        navigate('/admin');
      } else {
        console.log('Redirecting regular user to /');
        navigate('/');
      }
    }
  }, [user, isAdmin, adminLoading, navigate]);

  // Don't render the form if user is already logged in
  if (user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center">
        <div className="text-lg">Weiterleitung...</div>
      </div>
    );
  }

  const onSignIn = async (data: AuthFormData) => {
    setIsLoading(true);
    try {
      const { error } = await signIn(data.email, data.password);
      
      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          toast.error('Ungültige Anmeldedaten. Bitte überprüfen Sie E-Mail und Passwort.');
        } else if (error.message.includes('Email not confirmed')) {
          toast.error('Bitte bestätigen Sie Ihre E-Mail-Adresse über den Link, den wir Ihnen gesendet haben.');
        } else {
          toast.error('Anmeldung fehlgeschlagen: ' + error.message);
        }
      } else {
        toast.success('Erfolgreich angemeldet!');
        // Navigation will be handled by useEffect above
      }
    } catch (err) {
      toast.error('Ein unerwarteter Fehler ist aufgetreten.');
    } finally {
      setIsLoading(false);
    }
  };

  const onSignUp = async (data: AuthFormData) => {
    setIsLoading(true);
    try {
      const { error } = await signUp(data.email, data.password);
      
      if (error) {
        if (error.message.includes('User already registered')) {
          toast.error('Ein Benutzer mit dieser E-Mail-Adresse existiert bereits.');
        } else if (error.message.includes('Password should be')) {
          toast.error('Passwort entspricht nicht den Anforderungen. Mindestens 6 Zeichen erforderlich.');
        } else {
          toast.error('Registrierung fehlgeschlagen: ' + error.message);
        }
      } else {
        toast.success('Registrierung erfolgreich! Bitte überprüfen Sie Ihr E-Mail-Postfach für den Bestätigungslink.');
        form.reset();
      }
    } catch (err) {
      toast.error('Ein unerwarteter Fehler ist aufgetreten.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (data: AuthFormData) => {
    if (activeTab === 'signin') {
      onSignIn(data);
    } else {
      onSignUp(data);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <Header />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-md mx-auto">
          <Card className="glass-card border-0 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-foreground">
                Willkommen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="signin">Anmelden</TabsTrigger>
                  <TabsTrigger value="signup">Registrieren</TabsTrigger>
                </TabsList>
                
                <TabsContent value="signin" className="mt-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-Mail-Adresse</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input 
                                  placeholder="ihre.email@beispiel.de" 
                                  type="email"
                                  className="pl-10"
                                  {...field} 
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Passwort</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input 
                                  placeholder="Ihr Passwort"
                                  type={showPassword ? 'text' : 'password'}
                                  className="pl-10 pr-10"
                                  {...field} 
                                />
                                <button
                                  type="button"
                                  onClick={() => setShowPassword(!showPassword)}
                                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                                >
                                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? 'Anmelden...' : 'Anmelden'}
                      </Button>
                    </form>
                  </Form>
                </TabsContent>

                <TabsContent value="signup" className="mt-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-Mail-Adresse</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input 
                                  placeholder="ihre.email@beispiel.de" 
                                  type="email"
                                  className="pl-10"
                                  {...field} 
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Passwort</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input 
                                  placeholder="Mindestens 6 Zeichen"
                                  type={showPassword ? 'text' : 'password'}
                                  className="pl-10 pr-10"
                                  {...field} 
                                />
                                <button
                                  type="button"
                                  onClick={() => setShowPassword(!showPassword)}
                                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                                >
                                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? 'Registrieren...' : 'Registrieren'}
                      </Button>
                      
                      <p className="text-sm text-muted-foreground text-center mt-4">
                        Nach der Registrierung erhalten Sie eine E-Mail zur Bestätigung Ihrer Adresse.
                      </p>
                    </form>
                  </Form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
