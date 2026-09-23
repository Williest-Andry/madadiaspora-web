import { InfoData } from "@/constant/about-info/type";
import { cn } from "cn";
import Image from "next/image";
import { ClassNameValue } from "tailwind-merge";

type InfoCardProps = {
  data: InfoData;
  className?: string;
};

export default function InfoCard({
  data,
  className = "xs:w-96.25 xs:h-64.5 h-[280px] w-76 sm:w-[399.75px]",
}: InfoCardProps) {
  return (
    <article
      className={cn(
        "bg-chart-1 hover:bg-popover text-card-foreground hover:text-foreground relative flex flex-col gap-5 rounded-[38px] p-5",
        className
      )}
    >
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
