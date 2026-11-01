import { ContactData } from "@/constants/contact/type";
import Image from "next/image";

type ContactCardProps = {
  data: ContactData;
};

export default function ContactCard({ data }: ContactCardProps) {
  return (
    <article className="bg-foreground text-card-foreground relative flex h-64.5 h-[195px] w-[75%] flex-col gap-[20px] rounded-[38px] border-[4px] p-5 p-[20px] md:w-1/3">
      <Image src={data.icon} alt={data.title} width={58} height={58} />

      <article className="flex flex-col gap-[8px]">
        <h3 className="text-p-md xl:text-p-xl leading-8 font-bold">
          {data.title}
        </h3>
        <p className="text-popover 3xl:text-p-xl text-[14px] leading-[110%] xl:text-[20px]">
          {data.value}
        </p>
      </article>
    </article>
  );
}
