import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { nomineeEmail, nomineeFirstName, nomineeLastName, institutionName, contactName, nomineeToken, siteUrl } = await req.json();

    const nomineeLink = `${siteUrl}/apply/nominee?token=${nomineeToken}`;

    // Log the email that would be sent (in production, integrate with email service)
    console.log(`📧 Sending nominee invitation email to: ${nomineeEmail}`);
    console.log(`   Nominee: ${nomineeFirstName} ${nomineeLastName}`);
    console.log(`   Institution: ${institutionName}`);
    console.log(`   Link: ${nomineeLink}`);

    // For now, return success with the link
    // In production, this would send via an email service
    return new Response(
      JSON.stringify({
        success: true,
        message: `Nominee invitation email queued for ${nomineeEmail}`,
        nomineeLink,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error sending nominee email:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
