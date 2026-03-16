
-- Create application status enum
CREATE TYPE public.application_status AS ENUM (
  'draft',
  'submitted',
  'under_review',
  'accepted',
  'rejected'
);

-- Create nomination status enum
CREATE TYPE public.nomination_status AS ENUM (
  'draft',
  'nomination_submitted',
  'nominee_invited',
  'nominee_submitted',
  'under_review',
  'accepted',
  'rejected'
);

-- Function to generate unique application IDs
CREATE OR REPLACE FUNCTION public.generate_application_id()
RETURNS TEXT AS $$
DECLARE
  seq_val INTEGER;
BEGIN
  seq_val := nextval('application_id_seq');
  RETURN 'APP-2026-' || LPAD(seq_val::TEXT, 4, '0');
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE SEQUENCE IF NOT EXISTS public.application_id_seq START WITH 1;

-- Function to generate unique nomination IDs
CREATE OR REPLACE FUNCTION public.generate_nomination_id()
RETURNS TEXT AS $$
DECLARE
  seq_val INTEGER;
BEGIN
  seq_val := nextval('nomination_id_seq');
  RETURN 'NOM-2026-' || LPAD(seq_val::TEXT, 4, '0');
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE SEQUENCE IF NOT EXISTS public.nomination_id_seq START WITH 1;

-- Track 1: Individual Applications
CREATE TABLE public.applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  application_id TEXT NOT NULL DEFAULT public.generate_application_id() UNIQUE,
  status public.application_status NOT NULL DEFAULT 'submitted',
  -- Personal Information
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  country TEXT NOT NULL,
  city TEXT NOT NULL,
  -- Professional Background
  professional_category TEXT NOT NULL,
  job_title TEXT NOT NULL,
  organisation TEXT,
  years_experience TEXT NOT NULL,
  -- Written Responses
  biography TEXT NOT NULL,
  collaboration_style TEXT NOT NULL,
  cultural_leadership TEXT NOT NULL,
  research_inquiry TEXT NOT NULL,
  -- Commitments
  residential_confirmed BOOLEAN NOT NULL DEFAULT false,
  festival_confirmed BOOLEAN NOT NULL DEFAULT false,
  -- Bursary
  bursary_requested BOOLEAN NOT NULL DEFAULT false,
  bursary_document_url TEXT,
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Track 2: Institutional Nominations
CREATE TABLE public.nominations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nomination_id TEXT NOT NULL DEFAULT public.generate_nomination_id() UNIQUE,
  status public.nomination_status NOT NULL DEFAULT 'nomination_submitted',
  nominee_token TEXT NOT NULL DEFAULT encode(gen_random_bytes(24), 'hex') UNIQUE,
  -- Institution Information
  institution_name TEXT NOT NULL,
  institution_type TEXT NOT NULL,
  institution_address TEXT NOT NULL,
  institution_website TEXT,
  -- Primary Contact
  contact_name TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  contact_phone TEXT NOT NULL,
  contact_position TEXT NOT NULL,
  -- Nominee Information (from institution)
  nominee_first_name TEXT NOT NULL,
  nominee_last_name TEXT NOT NULL,
  nominee_email TEXT NOT NULL,
  nominee_position TEXT NOT NULL,
  nominee_years_at_institution TEXT NOT NULL,
  -- Institution Commitment
  participation_confirmed BOOLEAN NOT NULL DEFAULT false,
  programme_confirmed BOOLEAN NOT NULL DEFAULT false,
  -- Nominee Application (filled by nominee later)
  nominee_phone TEXT,
  nominee_country TEXT,
  nominee_city TEXT,
  nominee_professional_category TEXT,
  nominee_job_title TEXT,
  nominee_years_experience TEXT,
  nominee_biography TEXT,
  nominee_collaboration_style TEXT,
  nominee_cultural_leadership TEXT,
  nominee_research_inquiry TEXT,
  nominee_submitted_at TIMESTAMP WITH TIME ZONE,
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.nominations ENABLE ROW LEVEL SECURITY;

-- Applications: anyone can insert (public form), only admins can read
CREATE POLICY "Anyone can submit an application"
  ON public.applications FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can read applications by email"
  ON public.applications FOR SELECT
  TO anon, authenticated
  USING (true);

-- Nominations: anyone can insert, read by token or admin
CREATE POLICY "Anyone can submit a nomination"
  ON public.nominations FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can read nominations"
  ON public.nominations FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can update nominations by token"
  ON public.nominations FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

-- Timestamp trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_applications_updated_at
  BEFORE UPDATE ON public.applications
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_nominations_updated_at
  BEFORE UPDATE ON public.nominations
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Storage bucket for bursary documents
INSERT INTO storage.buckets (id, name, public) VALUES ('bursary-documents', 'bursary-documents', false);

CREATE POLICY "Anyone can upload bursary documents"
  ON storage.objects FOR INSERT
  TO anon, authenticated
  WITH CHECK (bucket_id = 'bursary-documents');

CREATE POLICY "Authenticated users can read bursary documents"
  ON storage.objects FOR SELECT
  TO authenticated
  USING (bucket_id = 'bursary-documents');

-- Indexes
CREATE INDEX idx_applications_email ON public.applications(email);
CREATE INDEX idx_applications_status ON public.applications(status);
CREATE INDEX idx_nominations_token ON public.nominations(nominee_token);
CREATE INDEX idx_nominations_status ON public.nominations(status);
CREATE INDEX idx_nominations_nominee_email ON public.nominations(nominee_email);
