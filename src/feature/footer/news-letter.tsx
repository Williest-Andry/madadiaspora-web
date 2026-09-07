import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function NewsLetter() {
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

      <div>
        <InputGroup className="bg-foreground text-primary flex h-[45px] w-full rounded-[65px] p-[3px] py-2.5 pl-[15px] md:text-sm">
          <InputGroupInput placeholder="Votre email" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              variant="default"
              className={
                "-mr-1 h-[39px] w-[111px] rounded-[52.5px] px-[14px] py-[6px]"
              }
            >
              {"S'abonner"}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </article>
  );
}
