import Image from "next/image";
import CTAButton from "@/components/cta-button";
import { cn } from "@/lib/utils";

type DiscoveryCardProps = {
  className?: string;
  title: string;
  description: string;
  buttonLabel: string;
};

export default function DiscoveryCard({
  className,
  title,
  description,
  buttonLabel,
}: DiscoveryCardProps) {
  return (
    <article
      className={cn(
        "text-foreground bg-secondary relative flex h-[357px] w-[300px] flex-col gap-[63px] overflow-hidden rounded-tl-[38px] rounded-tr-[12px] rounded-br-[12px] rounded-bl-[38px] p-[30px]",
        className
      )}
    >
      <div className="flex flex-col gap-[12px]">
        <h2 className="text-title-sm sm:text-title-md leading-[110%] font-[700] font-bold">
          {title}
        </h2>
        <p className="text-p-sm sm:text-p-md leading-[100%]">{description}</p>
      </div>

      <CTAButton
        title={buttonLabel}
        className="bg-popover hover:bg-popover max-sm:text-p-sm! z-1 w-[200px] gap-[22px] sm:w-[236px]"
      />

      <figure className="absolute top-[28px] left-[139px] h-[350px] w-[300px] sm:top-[83px] sm:left-[67px]">
        <div className="relative h-full w-full">
          <Image
            src={"/projects-transparent-globe.svg"}
            alt="projects-transparent-globe.svg"
            fill
            className="object-cover"
          />
        </div>
      </figure>
    </article>
  );
}
