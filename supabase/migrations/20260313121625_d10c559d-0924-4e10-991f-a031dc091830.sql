-- Make old required columns nullable (they won't be used in new form)
ALTER TABLE public.applications
  ALTER COLUMN biography DROP NOT NULL,
  ALTER COLUMN collaboration_style DROP NOT NULL,
  ALTER COLUMN cultural_leadership DROP NOT NULL,
  ALTER COLUMN research_inquiry DROP NOT NULL,
  ALTER COLUMN professional_category DROP NOT NULL,
  ALTER COLUMN years_experience DROP NOT NULL,
  ALTER COLUMN job_title DROP NOT NULL;

-- Add new columns for two-stage form
ALTER TABLE public.applications
  ADD COLUMN IF NOT EXISTS pronouns text,
  ADD COLUMN IF NOT EXISTS mailing_address text,
  ADD COLUMN IF NOT EXISTS primary_discipline text,
  ADD COLUMN IF NOT EXISTS years_in_culture text,
  ADD COLUMN IF NOT EXISTS role_title text,
  ADD COLUMN IF NOT EXISTS practice_description text,
  ADD COLUMN IF NOT EXISTS practice_question text,
  ADD COLUMN IF NOT EXISTS turning_point text,
  ADD COLUMN IF NOT EXISTS pivotal_nine_months text,
  ADD COLUMN IF NOT EXISTS restated_question text,
  ADD COLUMN IF NOT EXISTS work_sample_url text,
  ADD COLUMN IF NOT EXISTS work_sample_description text,
  ADD COLUMN IF NOT EXISTS time_commitment_confirmed boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS reference_salutation text,
  ADD COLUMN IF NOT EXISTS reference_first_name text,
  ADD COLUMN IF NOT EXISTS reference_last_name text,
  ADD COLUMN IF NOT EXISTS reference_email text,
  ADD COLUMN IF NOT EXISTS reference_relationship text,
  ADD COLUMN IF NOT EXISTS reference_external text,
  ADD COLUMN IF NOT EXISTS current_stage text NOT NULL DEFAULT 'stage1';

-- Change default status to draft for two-stage flow
ALTER TABLE public.applications ALTER COLUMN status SET DEFAULT 'draft'::application_status;

-- Allow updates on applications for stage 2 completion
CREATE POLICY "Update applications by id"
  ON public.applications
  FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);