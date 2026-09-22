import { Newsletter } from "@/schema/contact/newsletter/newsletter-schema";
import { newsletterServices } from "@/services/newsletter/newsletter-services";
import { useMutation } from "@tanstack/react-query";

export function useSubscribeToNewsletter() {
  return useMutation({
    mutationFn: (body: Newsletter) => newsletterServices.subscribe(body),
  });
}
