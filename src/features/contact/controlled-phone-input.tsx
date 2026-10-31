import { Field, FieldError } from "@/components/ui/field";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import CustomPhoneInput from "./custom-phone-input";
import "react-phone-number-input/style.css";

type ControlledPhoneInputProps<T extends FieldValues> = {
  control: Control<T>;
};

export default function ControlledPhoneInput<T extends FieldValues>({
  control,
}: ControlledPhoneInputProps<T>) {
  return (
    <Controller
      name={"phone" as Path<T>}
      control={control}
      render={({ field, fieldState }) => (
        <Field className="w-full">
          <PhoneInput
            {...field}
            defaultCountry="MG"
            international
            inputComponent={CustomPhoneInput}
          />
          <div className="min-h-[20px]">
            <FieldError className="text-p-sm text-destructive">
              {fieldState.error?.message}
            </FieldError>
          </div>
        </Field>
      )}
    />
  );
}
