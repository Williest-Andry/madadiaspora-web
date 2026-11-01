import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldSet } from "@/components/ui/field";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SendMail, sendMailSchema } from "@/schemas/contact/contact-schema";
import { useSendMail } from "@/hooks/contact/use-contact";
import ControlledInput from "./controlled-input";
import ControlledTextArea from "./controlled-text-area";
import ControlledPhoneInput from "./controlled-phone-input";
import { toast } from "@/components/ui/toast";

export default function ContactForm() {
  const { control, handleSubmit, reset, formState } = useForm<SendMail>({
    resolver: zodResolver(sendMailSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
      phone: "",
    },
  });

  const { mutate: sendMail, isPending } = useSendMail();

  const onSubmit: SubmitHandler<SendMail> = (data: SendMail) => {
    sendMail(data, {
      onSuccess: () => {
        toast.add({
          type: "success",
          description: "Votre message a été transmis avec succès",
        });

        reset();
      },
      onError: () => {
        toast.add({
          type: "error",
          description: "Échec, veuillez réessayer.",
        });
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-[663px] w-full px-4 sm:h-[663px] sm:w-[618px] lg:w-[818px]"
    >
      <FieldSet className="flex w-full items-center gap-[15px] rounded-[38px] border-[3px] p-[30px] text-[18px] leading-[24px] font-light">
        <div className="flex w-[99%] flex-col gap-[15px] sm:flex-row">
          <ControlledInput
            name="email"
            control={control}
            placeholder="Adresse e-mail"
          />

          <ControlledPhoneInput control={control} />
        </div>

        <FieldGroup>
          <ControlledInput
            name="subject"
            control={control}
            placeholder="Objet"
          />
        </FieldGroup>

        <FieldGroup>
          <ControlledTextArea
            name="message"
            control={control}
            placeholder="Message"
          />
        </FieldGroup>

        <Field
          orientation="horizontal"
          className="flex items-center justify-center"
        >
          <Button
            disabled={!formState.isDirty || isPending}
            type="submit"
            className={
              "bg-popover text-p-sm sm:text-p-md text-foreground mt-6 h-[58px] w-[139px] rounded-[50px] p-[4px] hover:cursor-pointer sm:w-[189px]"
            }
          >
            {isPending ? "..." : "Envoyer"}
          </Button>
        </Field>
      </FieldSet>
    </form>
  );
}
