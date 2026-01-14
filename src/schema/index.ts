import * as z from "zod";

//name, email, message
export const contactSchema = z.object({
  name: z.string().min(5, "Full name must be at least 5 characters long"),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
