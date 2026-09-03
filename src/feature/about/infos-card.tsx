import { InfosData } from "@/constant/about-infos/type";
import Image from "next/image";

type InfosCardProps = {
  data: InfosData;
};

export default function InfosCard({ data }: InfosCardProps) {
  return (
    <article className="bg-chart-1 hover:bg-popover text-card-foreground hover:text-foreground relative flex h-64.5 w-96.25 flex-col gap-5 rounded-[38px] p-5 sm:w-[399.75px]">
      <Image src={data.icon} alt={data.title} width={58} height={58} />

      <article className="flex flex-col gap-2">
        <h3 className="text-[26px] leading-8 font-bold">{data.title}</h3>
        <p className="text-[18px] leading-[110%]">{data.description}</p>
      </article>
    </article>
  );
}
