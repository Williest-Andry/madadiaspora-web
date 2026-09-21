import { Field, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { HTMLInputTypeAttribute } from "react";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";

type ControlledInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
};

export default function ControlledInput<T extends FieldValues>({
  name,
  control,
  placeholder,
  type = "text",
}: ControlledInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field className="w-full">
          <Input
            {...field}
            type={type}
            placeholder={placeholder}
            className="bg-chart-2 h-full w-full rounded-[18px] border-[3px] p-[15px]"
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
