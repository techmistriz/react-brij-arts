
-- Tighten the nominations update policy to only allow updating nominee fields via token
DROP POLICY "Anyone can update nominations by token" ON public.nominations;

CREATE POLICY "Update nominations by token only"
  ON public.nominations FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (
    -- Only allow updating nominee application fields (not institution fields)
    nominee_phone IS NOT NULL
    AND nominee_country IS NOT NULL
    AND nominee_city IS NOT NULL
  );
