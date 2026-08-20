import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(80),
  lastName: z.string().trim().min(1, "Last name is required").max(80),
  email: z.string().trim().email("Enter a valid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
  services: z.array(z.string().max(60)).max(10).default([]),
  newsletter: z.boolean().default(false),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      message: data.message,
      services: data.services,
      newsletter: data.newsletter,
    });

    if (error) {
      console.error("contact submission failed", error.message);
      throw new Error("Could not send your message. Please email me directly.");
    }

    return { ok: true as const };
  });
