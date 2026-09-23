"use client";

import CustomButton from "@/components/cta-button";
import { GlobeWithLoader } from "../earth-globe/globe-with-loader";

export default function HeroSection() {
  return (
    <section className="globe-small:h-[800px] relative mb-10 flex h-[750px] flex-col items-center justify-start gap-0 overflow-hidden pt-10 pl-0 sm:h-[800px] xl:mb-10 xl:h-[800px] xl:h-[calc(100vh-93px)] xl:flex-row xl:justify-between xl:pt-0 xl:pl-33">
      <article className="flex flex-col items-center gap-6 text-center xl:items-start xl:text-left">
        <div className="text-title-md xl:text-title-xl flex flex-col leading-[110%] font-bold">
          <h1 className="text-secondary">{"Malagasy,"}</h1>
          <p>{"et fier(e) de l'être !"}</p>
        </div>

        <div className="flex w-151.25 flex-col">
          <p className="text-p-md leading-9 font-bold xl:text-[38px]">
            {"La première plateforme"}
          </p>
          <p className="text-p-md xl:text-p-xl m-auto w-[50%] leading-8 sm:w-full">
            {"dédiée à la diaspora malagasy à travers le monde !"}
          </p>
        </div>

        <CustomButton
          title="Inscrivez-vous dans l'annuaire"
          className="text-p-sm sm:text-p-md text-secondary-foreground w-80 sm:w-93"
        />
      </article>

      <figure className="[50%] w-full xl:h-full xl:flex-1">
        <GlobeWithLoader />
      </figure>
    </section>
  );
}
