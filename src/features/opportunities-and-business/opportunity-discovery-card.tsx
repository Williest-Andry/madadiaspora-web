import CTAButton from "@/components/cta-button";
import Image from "next/image";

export default function OpportunityDiscoveryCard() {
  return (
    <article className="bg-secondary xl:max-3xl:w-full 3xl:w-[305px] relative flex w-full flex-col gap-[90px] overflow-hidden rounded-[24px] p-[30px] lg:w-[305px] lg:gap-[31px]">
      <p className="text-p-md lg:text-title-sm text-foreground z-2 font-[700]">
        {"Trouvez votre prochaine opportunité"}
      </p>
      <CTAButton
        title="Voir les opportunités"
        className="text-p-xs! lg:text-p-sm! bg-popover text-foreground hover:bg-popover xl:max-3xl:w-[270px] 3xl:w-full z-2 w-[240px] lg:w-full"
      />

      <div className="xl:max-3xl:left-[73%] 3xl:left-[90px] absolute top-[43px] left-[60%] z-1 h-[231px] w-[231px] sm:left-[75%] lg:left-[90px]">
        <Image
          src={"/projects-transparent-globe.svg"}
          alt="transparent globe image"
          fill
        />
      </div>
    </article>
  );
}
