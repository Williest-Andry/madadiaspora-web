import { Newsletter } from "@/schemas/contact/newsletter/newsletter-schema";
import { genericCreate } from "../common";
import { newsletterResponse } from "@/interfaces/newsletter/newsletter-type";

export const newsletterServices = {
  subscribe: (body: Newsletter) =>
    genericCreate<Newsletter, newsletterResponse>("/newsletteree", body),
};
