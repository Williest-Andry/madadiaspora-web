import CTAButton from "@/components/cta-button";
import Image from "next/image";

export default function QuestionsCard() {
  return (
    <article className="bg-secondary relative flex h-[315px] w-[300px] flex-col gap-[69px] overflow-hidden rounded-[50px] p-[30px] sm:w-[439px] 2xl:w-[539px]">
      <div className="flex flex-col gap-[12px]">
        <h2 className="text-title-sm sm:text-title-md leading-[110%] font-bold">
          {"Une question sur nos expériences ?"}
        </h2>
        <p className="text-p-sm sm:text-p-md leading-[100%]">
          {
            "Notre équipe est disponible pour vous apporter davantage d’informations."
          }
        </p>
      </div>

      <CTAButton
        title="Nous contacter"
        className="bg-popover hover:bg-popover max-sm:text-p-sm! z-1 w-[200px] sm:w-[255px]"
      />

      <figure className="absolute top-[28px] left-[139px] h-[400px] w-[400px] sm:top-[58px] sm:left-[269px]">
        <div className="relative h-full w-full">
          <Image
            src={"/who-transparent-globe.png"}
            alt="who-transparent-globe.png"
            fill
            className="object-cover"
          />
        </div>
      </figure>
    </article>
  );
}
