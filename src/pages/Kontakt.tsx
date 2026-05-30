import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Section } from "@/components/ui/section";
import { Phone, Mail, MapPin, Clock, Shield, CheckCircle, Star, ArrowRight, AlertTriangle, Users, Award } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useSettings } from "@/hooks/useSettings";
import heroImage from "@/assets/contact-hero-bg.jpg";

const contactSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen haben'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  phone: z.string().min(1, 'Telefonnummer ist erforderlich'),
  topic: z.string().min(1, 'Bitte wählen Sie ein Thema aus'),
  damage_amount: z.string().optional(),
  message: z.string().min(1, 'Bitte geben Sie eine Nachricht ein'),
  consent: z.boolean().refine((val) => val === true, 'Sie müssen der Datenschutzerklärung zustimmen'),
  honeypot: z.string().max(0, 'Bot detected'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Kontakt() {
  const { toast } = useToast();
  const { phone, phoneEnabled } = useSettings();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStartTime, setSubmitStartTime] = useState<number>(0);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      topic: '',
      damage_amount: '',
      message: '',
      consent: false,
      honeypot: '',
    },
  });

  // Set page title and handle job parameter
  useEffect(() => {
    document.title = 'Kontakt | Recovery Kanzlei';
    
    // Check for job query parameter and prefill message
    const searchParams = new URLSearchParams(location.search);
    const jobParam = searchParams.get('job');
    
    if (jobParam && !form.getValues('message')) {
      let messageText = '';
      
      switch (jobParam) {
        case 'initiativbewerbung':
        case 'initiativbewerbung':
          messageText = `Initiativbewerbung

Sehr geehrte Damen und Herren,

hiermit möchte ich mich initiativ bei Ihrer Kanzlei bewerben.

Kurz zu mir:
- 
- 
- 

Ich freue mich auf ein persönliches Gespräch.

Mit freundlichen Grüßen`;
          break;
        case 'ra-gesellschaftsrecht':
          messageText = `Bewerbung: Rechtsanwalt (m/w/d) Gesellschafts- und Unternehmensrecht

Sehr geehrte Damen und Herren,

hiermit bewerbe ich mich um die ausgeschriebene Position als Rechtsanwalt (m/w/d) für Gesellschafts- und Unternehmensrecht.

Kurz zu mir:
- 
- 
- 

Gerne stelle ich mich Ihnen in einem persönlichen Gespräch vor.

Mit freundlichen Grüßen`;
          break;
        case 'ra-prozessfuehrung':
          messageText = `Bewerbung: Rechtsanwalt (m/w/d) Prozessführung/Litigation

Sehr geehrte Damen und Herren,

hiermit bewerbe ich mich um die ausgeschriebene Position als Rechtsanwalt (m/w/d) für Prozessführung/Litigation.

Kurz zu mir:
- 
- 
- 

Ich freue mich auf ein persönliches Gespräch.

Mit freundlichen Grüßen`;
          break;
        case 'ra-datenschutz':
          messageText = `Bewerbung: Rechtsanwalt (m/w/d) Datenschutz & Compliance

Sehr geehrte Damen und Herren,

hiermit bewerbe ich mich um die ausgeschriebene Position als Rechtsanwalt (m/w/d) für Datenschutz & Compliance.

Kurz zu mir:
- 
- 
- 

Gerne stelle ich mich Ihnen in einem persönlichen Gespräch vor.

Mit freundlichen Grüßen`;
          break;
        case 'referendar':
          messageText = `Bewerbung: Referendar / Wissenschaftlicher Mitarbeiter (m/w/d)

Sehr geehrte Damen und Herren,

hiermit bewerbe ich mich um die ausgeschriebene Position als Referendar / Wissenschaftlicher Mitarbeiter (m/w/d).

Kurz zu mir:
- 
- 
- 

Ich freue mich auf ein persönliches Gespräch.

Mit freundlichen Grüßen`;
          break;
        case 'paralegal':
          messageText = `Bewerbung: Rechtsanwaltsfachangestellte / Paralegal (m/w/d)

Sehr geehrte Damen und Herren,

hiermit bewerbe ich mich um die ausgeschriebene Position als Rechtsanwaltsfachangestellte / Paralegal (m/w/d).

Kurz zu mir:
- 
- 
- 

Gerne stelle ich mich Ihnen in einem persönlichen Gespräch vor.

Mit freundlichen Grüßen`;
          break;
        case 'legal-tech-werkstudent':
          messageText = `Bewerbung: Werkstudent:in Legal Tech / IT (m/w/d)

Sehr geehrte Damen und Herren,

hiermit bewerbe ich mich um die ausgeschriebene Position als Werkstudent:in Legal Tech / IT (m/w/d).

Kurz zu mir:
- 
- 
- 

Ich freue mich auf ein persönliches Gespräch.

Mit freundlichen Grüßen`;
          break;
        default:
          // For any other job parameter
          messageText = `Bewerbung: ${jobParam}

Sehr geehrte Damen und Herren,

hiermit bewerbe ich mich um die ausgeschriebene Position.

Kurz zu mir:
- 
- 
- 

Ich freue mich auf ein persönliches Gespräch.

Mit freundlichen Grüßen`;
          break;
      }
      
      if (messageText) {
        form.setValue('message', messageText);
        form.setValue('topic', 'Bewerbung/Karriere');
      }
    }
  }, [location.search, form]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    const submitDuration = Date.now() - submitStartTime;
    const spamScore = submitDuration < 2000 ? 10 : 0; // Flag if submitted too quickly
    
    try {
      // First, save to Supabase
      const { error } = await supabase
        .from('contact_messages')
        .insert({
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          topic: data.topic,
          damage_amount: data.damage_amount || null,
          message: data.message,
          consent: data.consent,
          source: 'kontakt_form',
          status: 'new',
          spam_score: spamScore,
          submit_duration: submitDuration,
        });

      if (error) {
        console.error('Error submitting form:', error);
        toast({
          title: "Fehler",
          description: "Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.",
          variant: "destructive",
        });
        return;
      }

      // If Supabase insert successful, send confirmation email
      try {
        console.log('Sending confirmation email...');
        
        const emailResponse = await supabase.functions.invoke('send-confirmation-email', {
          body: {
            name: data.name,
            email: data.email,
            phone: data.phone,
            topic: data.topic,
            damage_amount: data.damage_amount,
            message: data.message,
          }
        });

        if (emailResponse.error) {
          console.error('Error sending confirmation email:', emailResponse.error);
          // Don't fail the entire submission if email fails
          toast({
            title: "Nachricht gesendet",
            description: "Ihre Nachricht wurde erfolgreich übermittelt. Wir melden uns innerhalb von 60 Minuten bei Ihnen.",
          });
        } else {
          console.log('Confirmation email sent successfully');
          toast({
            title: "Nachricht gesendet",
            description: "Vielen Dank für Ihre Nachricht! Eine Bestätigung wurde an Ihre E-Mail-Adresse gesendet. Wir melden uns innerhalb von 60 Minuten bei Ihnen.",
          });
        }
      } catch (emailError) {
        console.error('Error sending confirmation email:', emailError);
        // Don't fail the entire submission if email fails
        toast({
          title: "Nachricht gesendet",
          description: "Ihre Nachricht wurde erfolgreich übermittelt. Wir melden uns innerhalb von 60 Minuten bei Ihnen.",
        });
      }

      form.reset();
      
    } catch (err) {
      console.error('Submission error:', err);
      toast({
        title: "Fehler",
        description: "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormStart = () => {
    if (submitStartTime === 0) {
      setSubmitStartTime(Date.now());
    }
  };

  const scrollToForm = () => {
    document.getElementById('kontakt-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const partnerLogos = [
    {
      name: "Cybercrime Komplettschutz",
      logo: "/lovable-uploads/da91dba8-4542-49e2-a65f-f3c47c7a5afd.png"
    },
    {
      name: "Polizei Nordrhein-Westfalen",
      logo: "/lovable-uploads/1834d8de-5216-4084-be7f-b4973552d4e2.png"
    },
    {
      name: "Bundeskriminalamt", 
      logo: "/lovable-uploads/b2f48b3f-04a9-45fa-93e8-b4a2979906d0.png"
    },
    {
      name: "Coinbase",
      logo: "/lovable-uploads/40855976-8084-4aa6-8ab3-40a1b0d75ab6.png"
    },
    {
      name: "Binance",
      logo: "/lovable-uploads/a353d06a-d600-40b4-8ac2-e8fae21230d5.png"
    },
    {
      name: "IOSCO",
      logo: "/lovable-uploads/7cf1155a-1e93-404a-bb7f-b70fbba16ab9.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <Section className="py-16 lg:py-20 relative overflow-hidden h-[40vh] flex items-center bg-gray-800">
        <div className="absolute inset-0 w-full h-full">
          <video
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
            aria-label="Professional Law Office Background Video"
          />
        </div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-primary/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ textShadow: 'var(--text-glow-strong)' }}>
              Schnelle Hilfe bei<br />
              <span className="bg-gradient-primary bg-clip-text text-transparent drop-shadow-lg">Krypto-Betrug</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed" style={{ textShadow: 'var(--text-glow)' }}>
              Kostenlose Erstberatung – Rückmeldung in der Regel innerhalb von 60 Minuten
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              {phoneEnabled && (
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 h-auto bg-white text-primary hover:bg-white/90"
                  asChild
                >
                  <a href={`tel:${phone}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Soforthilfe: Jetzt anrufen
                  </a>
                </Button>
              )}
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto bg-gradient-glass backdrop-blur-md border-white/30 text-white hover:bg-white/20"
                onClick={scrollToForm}
              >
                Kostenlose Erstberatung anfragen
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                100% kostenlose Erstberatung
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Kein Erfolg = keine Kosten
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                24/7 Notfall-Hotline
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Social Proof Section */}
      <Section className="py-12 bg-gradient-glass backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-muted-foreground text-sm uppercase tracking-wider font-medium">
              Vertrauen von führenden Institutionen
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-70 hover:opacity-100 transition-opacity">
            {partnerLogos.map((partner, index) => (
              <div key={index} className="flex items-center justify-center h-12">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 lg:h-10 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-7xl mx-auto">
            
            {/* Left Column - Info & Trust */}
            <div className="h-full flex flex-col space-y-8">
              {/* Contact Information */}
              <Card className="border-0 shadow-card bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <Phone className="h-6 w-6 text-primary" />
                    Kontaktinformationen
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {phoneEnabled && (
                    <Button 
                      variant="outline" 
                      className="w-full justify-start h-auto p-4 hover:bg-primary/5"
                      asChild
                    >
                      <a href={`tel:${phone}`} className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-primary/10">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold">Telefon</p>
                          <p className="text-sm text-muted-foreground">{phone}</p>
                        </div>
                      </a>
                    </Button>
                  )}
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start h-auto p-4 hover:bg-primary/5"
                    asChild
                  >
                    <a href="mailto:info@bovensiepenpartner.de" className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <p className="font-semibold">E-Mail</p>
                        <p className="text-sm text-muted-foreground">info@bovensiepenpartner.de</p>
                      </div>
                    </a>
                  </Button>
                  
                  <div className="flex items-center gap-3 p-4 rounded-lg border bg-muted/20">
                    <div className="p-2 rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Adresse</p>
                      <p className="text-sm text-muted-foreground">Nymphenburger Str. 20<br />80335 München</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 rounded-lg border bg-muted/20">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Öffnungszeiten</p>
                      <p className="text-sm text-muted-foreground">Mo-Fr: 8:00 - 18:00 Uhr<br />Sa: 9:00 - 14:00 Uhr</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 3-Step Process */}
              <Card className="border-0 shadow-card bg-card">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">So läuft es ab</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold">Kurzes Gespräch</h4>
                      <p className="text-sm text-muted-foreground">Kostenlos, unverbindlich - wir hören uns Ihren Fall an</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold">Forensische Ersteinschätzung</h4>
                      <p className="text-sm text-muted-foreground">60-Minuten Rückmeldung zu Ihren Erfolgsaussichten</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold">Maßnahmenplan</h4>
                      <p className="text-sm text-muted-foreground">Erfolgsbasiert - Sie zahlen nur bei Erfolg</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Right Column - Contact Form */}
            <Card id="kontakt-form" className="border-0 shadow-card bg-card h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Kostenlose Erstberatung anfragen
                </CardTitle>
                <p className="text-muted-foreground">
                  Schildern Sie uns Ihren Fall – wir melden uns innerhalb von 60 Minuten
                </p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 h-full flex flex-col" onFocus={handleFormStart}>
                    
                    {/* Honeypot field - hidden from users */}
                    <FormField
                      control={form.control}
                      name="honeypot"
                      render={({ field }) => (
                        <FormItem className="hidden">
                          <FormControl>
                            <Input {...field} tabIndex={-1} autoComplete="off" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Vor- und Nachname *</FormLabel>
                          <FormControl>
                            <Input placeholder="Ihr Vor- und Nachname" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-Mail-Adresse *</FormLabel>
                            <FormControl>
                              <Input placeholder="Ihre Email-Adresse" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefonnummer *</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="Ihre Telefonnummer" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="topic"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Thema/Anliegen *</FormLabel>
                            <FormControl>
                              <Input placeholder="Ihr Thema oder Anliegen" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="damage_amount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Schadenshöhe (optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="z.B. 50.000 EUR" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ihre Nachricht *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Beschreiben Sie Ihren Fall bitte so detailliert wie möglich..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="consent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm">
                              Ich habe die Datenschutzerklärung gelesen und akzeptiere sie. *
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full h-12 text-lg font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Wird gesendet...' : 'Kostenlose Erstberatung anfragen'}
                      {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                    </Button>
                    
                    <p className="text-center text-sm text-muted-foreground">
                      100% kostenlos & unverbindlich
                    </p>
                  </form>
                </Form>
              </CardContent>
              <CardFooter className="mt-auto border-t bg-muted/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Ihre Daten sind sicher</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Rückmeldung in 60 Min</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Kostenlos & unverbindlich</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>

          {/* Trust Bar - Full Width */}
          <div className="max-w-7xl mx-auto mt-16">
            <Card className="border-0 shadow-card bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 md:divide-x divide-primary/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <p className="text-sm text-muted-foreground">erfolgreiche Fälle</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <p className="text-sm text-muted-foreground">Jahre Erfahrung</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <p className="text-sm text-muted-foreground">Erreichbarkeit</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <p className="text-sm text-muted-foreground">DSGVO konform</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Häufig gestellte Fragen</h2>
              <p className="text-lg text-muted-foreground">
                Antworten auf die wichtigsten Fragen rund um unsere Hilfe bei Krypto-Betrug
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card border-0 px-6 rounded-lg shadow-sm">
                <AccordionTrigger className="text-left font-semibold">
                  Wie schnell melden Sie sich bei mir?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Wir melden uns in der Regel innerhalb von 60 Minuten bei Ihnen zurück, 
                  oft sogar schneller. Bei Eingang außerhalb der Geschäftszeiten spätestens 
                  am nächsten Werktag bis 9:00 Uhr.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border-0 px-6 rounded-lg shadow-sm">
                <AccordionTrigger className="text-left font-semibold">
                  Was kostet die Erstberatung?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Die Erstberatung ist für Sie völlig kostenlos und unverbindlich. 
                  Erst wenn Sie sich für eine Zusammenarbeit entscheiden, entstehen Kosten - 
                  und auch dann arbeiten wir erfolgsbasiert.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border-0 px-6 rounded-lg shadow-sm">
                <AccordionTrigger className="text-left font-semibold">
                  Welche Informationen sollte ich bereitstellen?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Je mehr Details Sie uns mitteilen können, desto besser können wir Ihnen helfen: 
                  Wallet-Adressen, Transaktions-IDs, Screenshots, E-Mail-Verläufe, Namen der 
                  verdächtigen Personen oder Plattformen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border-0 px-6 rounded-lg shadow-sm">
                <AccordionTrigger className="text-left font-semibold">
                  Welche Erfolgsaussichten gibt es?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Die Erfolgsaussichten hängen stark vom Einzelfall ab. In über 500 Fällen konnten 
                  wir bereits erfolgreich Gelder zurückholen. Eine erste Einschätzung erhalten Sie 
                  kostenlos in unserem Erstgespräch.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Section>

      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg p-4 lg:hidden">
        <div className="flex gap-2">
          {phoneEnabled && (
            <Button 
              size="sm" 
              className="flex-1"
              asChild
            >
              <a href={`tel:${phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                Anrufen
              </a>
            </Button>
          )}
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={scrollToForm}
          >
            Formular
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}