import { FieldError } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useSubscribeToNewsletter } from "@/hooks/newsletter/use-newsletter";
import {
  Newsletter,
  newsletterSchema,
} from "@/schema/contact/newsletter/newsletter-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

export default function NewsLetter() {
  const { control, handleSubmit, reset } = useForm<Newsletter>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const { mutate: subscribeToNewsletter, isPending } =
    useSubscribeToNewsletter();

  const onSubmit: SubmitHandler<Newsletter> = (
    data,
    event?: React.BaseSyntheticEvent
  ) => {
    if (event) event.preventDefault();

    subscribeToNewsletter(data);

    reset();
  };

  return (
    <article className="flex flex-col gap-[5px] text-justify">
      <h3 className="text-center text-[18px] leading-[100%] font-bold lg:text-start xl:text-[24px]">
        Newsletter
      </h3>

      <div className="flex flex-col gap-[5px]">
        <p className="tracking-0 text-center text-[12px] leading-[150%] opacity-[50%] lg:text-start xl:text-[16px]">
          {"Ne ratez pas nos actualités, abonnez-vous"}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <>
              <InputGroup className="bg-foreground text-primary flex h-[45px] w-full rounded-[65px] p-[3px] py-2.5 pl-[15px] md:text-sm">
                <InputGroupInput
                  {...field}
                  placeholder="Votre email"
                  type="email"
                />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton
                    disabled={isPending}
                    type="submit"
                    variant="default"
                    className={
                      "-mr-1 h-[39px] w-[111px] rounded-[52.5px] px-[14px] py-[6px]"
                    }
                  >
                    {isPending ? "..." : "S'abonner"}
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
              <div className="mt-2 min-h-[20px] w-full pl-6">
                <FieldError className="text-p-sm text-destructive">
                  {fieldState.error?.message}
                </FieldError>
              </div>
            </>
          )}
        />
      </form>
    </article>
  );
}
