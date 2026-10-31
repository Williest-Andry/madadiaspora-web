import z from "zod";

export const sendMailSchema = z.object({
  email: z
    .email("Veuillez entrer un email valide")
    .trim()
    .min(1, "Veuillez entrer un email valide"),
  subject: z.string().trim().min(1, "L'object est obligatoire"),
  message: z.string().trim().min(1, "Veuillez entrer votre message"),
  phone: z
    .string()
    .trim()
    .optional()
    .refine((val) => !val || z.e164().safeParse(val).success, {
      message: "Veuillez entrer un numéro de téléphone valide",
    }),
});

export type SendMail = z.infer<typeof sendMailSchema>;
