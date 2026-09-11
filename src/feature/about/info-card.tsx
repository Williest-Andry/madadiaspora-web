import { InfoData } from "@/constant/about-info/type";
import Image from "next/image";

type InfoCardProps = {
  data: InfoData;
};

export default function InfoCard({ data }: InfoCardProps) {
  return (
    <article className="bg-chart-1 hover:bg-popover text-card-foreground hover:text-foreground xs:w-96.25 xs:h-64.5 relative flex h-70 w-76 flex-col gap-5 rounded-[38px] p-5 sm:w-[399.75px]">
      <Image src={data.icon} alt={data.title} width={58} height={58} />

      <article className="flex flex-col gap-2">
        <h3 className="text-title-sm leading-8 font-bold">{data.title}</h3>
        <p className="text-p-sm xs:text-p-md leading-[110%]">
          {data.description}
        </p>
      </article>
    </article>
  );
}
