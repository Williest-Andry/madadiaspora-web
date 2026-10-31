import z from "zod";

export const newsletterSchema = z.object({
  email: z
    .email("Veuillez entrer un email valide")
    .trim()
    .min(1, "Veuillez entrer un email valide"),
});

export type Newsletter = z.infer<typeof newsletterSchema>;
