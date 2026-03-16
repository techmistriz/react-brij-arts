ALTER TABLE public.nominations
  ADD COLUMN IF NOT EXISTS why_nominating text,
  ADD COLUMN IF NOT EXISTS expected_change text,
  ADD COLUMN IF NOT EXISTS fee_confirmed boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS po_number text,
  ADD COLUMN IF NOT EXISTS agreement_confirmed boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS signatory_name text,
  ADD COLUMN IF NOT EXISTS signatory_date date,
  ADD COLUMN IF NOT EXISTS time_commitment_confirmed boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS institution_city text,
  ADD COLUMN IF NOT EXISTS institution_country text;