-- Add phone_enabled setting with default value true
INSERT INTO public.settings (key, value) 
VALUES ('phone_enabled', 'true')
ON CONFLICT (key) DO NOTHING;