import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <FieldSet className="flex h-[663px] w-[338px] items-center gap-[15px] rounded-[38px] border-[3px] p-[30px] text-[18px] leading-[24px] font-light sm:h-[563px] sm:w-[618px] lg:w-[818px]">
      <div className="flex w-[99%] flex-col gap-[15px] sm:flex-row">
        <Field className="w-full sm:w-[50%]">
          <Input
            placeholder="Adresse e-mail"
            required
            className="bg-chart-2 h-full w-[50%] rounded-[18px] border-[3px] p-[15px]"
          />
        </Field>
        <Field className="w-full sm:w-[50%]">
          <Input
            placeholder="Numéro de téléphone"
            required
            className="bg-chart-2 h-full w-[50%] rounded-[18px] border-[3px] p-[15px]"
          />
        </Field>
      </div>

      <FieldGroup>
        <Field>
          <Input
            placeholder="Objet"
            required
            className="bg-chart-2 h-full w-full rounded-[18px] border-[3px] p-[15px]"
          />
        </Field>
      </FieldGroup>

      <FieldGroup>
        <Field>
          <Textarea
            placeholder="Message"
            className="bg-chart-2 h-[272px] w-full resize-none rounded-[18px] border-[3px] p-[15px]"
          />
        </Field>
      </FieldGroup>

      <Field
        orientation="horizontal"
        className="flex items-center justify-center"
      >
        <Button
          type="submit"
          className={
            "bg-popover mt-6 h-[58px] w-[189px] rounded-[50px] p-[4px] text-[20px]"
          }
        >
          Envoyer
        </Button>
      </Field>
    </FieldSet>
  );
}
