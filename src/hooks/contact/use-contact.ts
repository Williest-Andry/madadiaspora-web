import { SendMail } from "@/schemas/contact/contact-schema";
import { contactServices } from "@/services/contact/contact-services";
import { useMutation } from "@tanstack/react-query";

export function useSendMail() {
  return useMutation({
    mutationKey: ["sendMail"],
    mutationFn: (body: SendMail) => contactServices.sendMail(body),
  });
}
