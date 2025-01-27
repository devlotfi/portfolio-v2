// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { z } from "https://deno.land/x/zod@v3.24.1/mod.ts";
import { corsHeaders } from "../_shared/cors.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const ContactDto = z.object({
  email: z.string().email(),
  subject: z.string().min(1).max(512),
  text: z.string().min(1).max(4096),
});

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", {
      status: 405,
      headers: corsHeaders,
    });
  }

  try {
    const body = await req.json();
    const validatedData = ContactDto.parse(body);

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `Portfolio V2 Contact Form <onboarding@resend.dev>`,
        to: "debbal.lotfi.dev@gmail.com",
        subject: `<${validatedData.email}> ${validatedData.subject}`,
        text: validatedData.text,
      }),
    });

    const data = await response.json();

    return new Response(
      JSON.stringify(data),
      { headers: { "Content-Type": "application/json", ...corsHeaders } },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({ error: "Validation error", details: error.errors }),
        {
          headers: { "Content-Type": "application/json", ...corsHeaders },
          status: 400,
        },
      );
    }
    return new Response("Internal Server Error", {
      status: 500,
      headers: corsHeaders,
    });
  }
});
