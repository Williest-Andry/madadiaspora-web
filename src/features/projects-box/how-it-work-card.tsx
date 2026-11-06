import CTAButton from "@/components/cta-button";
import Image from "next/image";


interface WhoItWorkCardProps {
  className?: string;
}

export default function WhoItWorkCard({
    className
}:WhoItWorkCardProps) {
  return (
    <article className={`bg-secondary relative flex w-full flex-col gap-[90px] overflow-hidden p-[30px] lg:gap-[31px] ${className || ''}`}>
      <h1 className="text-p-md lg:text-title-sm text-foreground z-2 font-[700]">
        {"Comment ça fonctionne ?"}
      </h1>
      <p className="text-sm text-foreground z-2 font-[400]">
        Découvrez les différentes étapes qui permettent à un projet de voir le jour et de bénéficier de l’accompagnement de Madadiaspora
      </p>
      <CTAButton
        title="En savoir plus"
        className="text-p-xs! lg:text-p-sm! bg-popover text-foreground hover:bg-popover  w-fit z-2"
      />

      <div className=" absolute bottom-0 right-0 z-1 h-[231px] w-[231px]">
        <Image
          src={"/projects-transparent-globe.svg"}
          alt="transparent globe image"
          fill
        />
      </div>
    </article>
  );
}
