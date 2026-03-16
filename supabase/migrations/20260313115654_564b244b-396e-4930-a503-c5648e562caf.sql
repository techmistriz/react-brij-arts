
CREATE SEQUENCE IF NOT EXISTS public.track3_application_id_seq START 1;

CREATE OR REPLACE FUNCTION public.generate_track3_application_id()
RETURNS text
LANGUAGE plpgsql
SET search_path TO 'public'
AS $$
DECLARE
  seq_val INTEGER;
BEGIN
  seq_val := nextval('track3_application_id_seq');
  RETURN 'T3-2026-' || LPAD(seq_val::TEXT, 4, '0');
END;
$$;

CREATE TABLE public.track3_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  application_id text NOT NULL DEFAULT public.generate_track3_application_id(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  pronouns text,
  country text NOT NULL,
  city text NOT NULL,
  role_title text NOT NULL,
  organisation text,
  primary_discipline text,
  years_in_culture text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  mailing_address text NOT NULL,
  residential_confirmed boolean NOT NULL DEFAULT false,
  festival_confirmed boolean NOT NULL DEFAULT false,
  practice_description text,
  practice_question text,
  turning_point text,
  pivotal_nine_months text,
  restated_question text,
  work_sample_url text,
  work_sample_description text,
  time_commitment_confirmed boolean NOT NULL DEFAULT false,
  reference_salutation text,
  reference_first_name text,
  reference_last_name text,
  reference_email text,
  reference_relationship text,
  reference_external text,
  current_stage text NOT NULL DEFAULT 'stage1',
  status public.application_status NOT NULL DEFAULT 'draft',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.track3_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a track3 application" ON public.track3_applications FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Anyone can read track3 applications" ON public.track3_applications FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Update track3 applications" ON public.track3_applications FOR UPDATE TO anon, authenticated USING (true) WITH CHECK (true);

CREATE TRIGGER update_track3_applications_updated_at BEFORE UPDATE ON public.track3_applications FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
