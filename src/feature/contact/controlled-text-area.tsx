import { Field, FieldError } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";

type ControlledTextAreaProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  placeholder?: string;
};

export default function ControlledTextArea<T extends FieldValues>({
  name,
  control,
  placeholder,
}: ControlledTextAreaProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field>
          <Textarea
            {...field}
            placeholder={placeholder}
            className="bg-chart-2 h-[272px] w-full resize-none rounded-[18px] border-[3px] p-[15px]"
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
