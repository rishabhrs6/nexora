"use server";

import { Resend } from "resend";
import { z } from "zod";
import ContactEmail from "@/components/emails/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(5),
  company: z.string().min(2),
  service: z.string().min(2),
  message: z.string().min(10),
});

export async function sendEmail(formData: {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}) {
  console.log("========== SEND EMAIL START ==========");
  console.log("ENV KEY EXISTS:", !!process.env.RESEND_API_KEY);

  try {
    const data = contactSchema.parse(formData);

    console.log("Parsed Data:", data);

    const result = await resend.emails.send({
      from: "Nexora <onboarding@resend.dev>",
      to: "rishabhsharmx1@gmail.com",
      subject: `🚀 New Lead - ${data.name}`,
      react: ContactEmail({
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        service: data.service,
        message: data.message,
      }),
    });

    console.log("✅ RESEND RESPONSE:");
    console.log(result);

    return {
      success: true,
      result,
    };
  } catch (error) {
    console.log("❌ RESEND ERROR:");
    console.dir(error, { depth: null });

    return {
      success: false,
      error: String(error),
    };
  }
}