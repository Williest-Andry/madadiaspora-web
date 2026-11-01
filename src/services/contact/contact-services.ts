import { SendMailResponse } from "@/interfaces/contact/contact-types";
import { genericCreate } from "../common";
import { SendMail } from "@/schemas/contact/contact-schema";

const SEND_MAIL_URL = "/sendmail";

export const contactServices = {
  sendMail: (body: SendMail) =>
    genericCreate<SendMail, SendMailResponse>(SEND_MAIL_URL, body),
};
