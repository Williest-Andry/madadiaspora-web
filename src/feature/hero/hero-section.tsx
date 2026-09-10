"use client";

import CustomButton from "@/components/cta-button";
import WorldGlobe from "@/components/world-globe";
import dynamic from "next/dynamic";

const Globe = dynamic(
  () => import("@/components/earth-globe").then((m) => m.default),
  {
    ssr: false,
  }
);

export default function HeroSection() {
  return (
    <main className="relative mb-10 flex h-[800px] flex-col items-center justify-between gap-0 overflow-hidden pt-10 pl-0 sm:h-[1000px] xl:mb-10 xl:h-[calc(100vh-93px)] xl:flex-row xl:pt-0 xl:pl-33">
      <article className="flex flex-col items-center gap-6 text-center xl:items-start xl:text-left">
        <div className="flex flex-col text-[34px] leading-[110%] font-bold xl:text-[64px]">
          <h1 className="text-secondary">{"Malagasy,"}</h1>
          <p>{"et fier(e) de l'être !"}</p>
        </div>

        <div className="flex w-151.25 flex-col">
          <p className="text-[18px] leading-9 font-bold xl:text-[38px]">
            {"La première plateforme"}
          </p>
          <p className="m-auto w-[50%] text-[18px] leading-8 sm:w-full xl:text-[28px]">
            {"dédiée à la diaspora malagasy à travers le monde !"}
          </p>
        </div>

        <CustomButton
          title="Inscrivez-vous dans l'annuaire"
          className="w-80 text-sm sm:w-93 sm:text-[18px]"
        />
      </article>

      <figure className="h-full w-full xl:flex-1">
        {/* <WorldGlobe /> */}
        <Globe />
      </figure>
    </main>
  );
}
