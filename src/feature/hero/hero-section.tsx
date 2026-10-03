"use client";

import CustomButton from "@/components/cta-button";
import { GlobeWithLoader } from "../earth-globe/globe-with-loader";

export default function HeroSection() {
  return (
    <section className="globe-small:h-[700px] relative mb-10 flex h-[620px] flex-col items-center justify-start overflow-hidden pt-10 pl-0 sm:h-[800px] xl:mb-10 xl:h-[800px] xl:h-[calc(100vh-93px)] xl:flex-row xl:justify-between xl:pt-0 xl:pl-33 2xl:gap-10">
      <article className="globe-extra:w-[40%] globe-extra:items-end flex flex-col items-center gap-6 text-center xl:items-start xl:text-left">
        <div className="globe-extra:text-right text-title-md 3xl:text-title-xl flex flex-col leading-[110%] font-bold">
          <h1 className="text-secondary">{"Malagasy,"}</h1>
          <p>{"et fier(e) de l'être !"}</p>
        </div>

        <div className="3xl:w-151.25 globe-extra:text-right flex w-110 flex-col">
          <p className="text-p-md 3xl:text-[38px] leading-9 font-bold">
            {"La première plateforme"}
          </p>
          <p className="text-p-md 3xl:text-p-xl m-auto w-[50%] leading-8 sm:w-full">
            {"dédiée à la diaspora malagasy à travers le monde !"}
          </p>
        </div>

        <CustomButton
          title="Inscrivez-vous dans l'annuaire"
          className="text-p-sm 3xl:text-p-md text-secondary-foreground 3xl:w-93 w-80"
        />
      </article>

      <figure className="relative h-full w-full xl:flex-1">
        <GlobeWithLoader />
      </figure>
    </section>
  );
}
