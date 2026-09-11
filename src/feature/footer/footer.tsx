"use client";

import Image from "next/image";
import FooterLinks from "./footer-links";
import {
  ABOUT_LINKS,
  RUBRICS_LINKS,
  USEFUL_LINKS,
} from "@/constant/footer/data";
import NewsLetter from "./news-letter";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import EarthGlobe from "@/components/earth-globe";

export default function Footer() {
  return (
    <footer className="relative mb-33 flex h-[1350px] w-[99vw] flex-col gap-10 sm:h-[1500px] lg:h-[850px] xl:h-[1000px]">
      <EarthGlobe className="xl:top-125! xl:left-300! 2xl:w-full! min-[131.25rem]:top-150! min-[131.25rem]:left-250! min-[150rem]:top-190! min-[150rem]:left-350! min-[187.5rem]:top-100! min-[187.5rem]:left-900!" />

      <article className="flex flex-col items-center justify-center gap-10">
        <article className="flex flex-col items-center gap-[40px] lg:flex-row lg:items-start lg:gap-[10px] xl:gap-[25px] 2xl:gap-[55px]">
          <div className="flex w-[70%] flex-col items-center gap-[21px] lg:w-[280px] lg:items-start 2xl:w-[493px]">
            <div className="relative h-[128px] w-[128px]">
              <Image
                src={"/footer-brand-logo.png"}
                alt="brand logo image"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-[18px text-justify leading-[100%] lg:text-start">
              {
                "MadaDiaspora est une plateforme dédiée à connecter, informer et rassembler la diaspora autour d'un espace de confiance et de partage."
              }
            </p>
          </div>

          <div className="3xl:ml-[175px] ml-0">
            <FooterLinks links={USEFUL_LINKS} title="Liens utiles" />
          </div>

          <div>
            <FooterLinks links={ABOUT_LINKS} title="À propos" />
          </div>

          <div>
            <FooterLinks links={RUBRICS_LINKS} title="Rubriques" />
          </div>

          <div>
            <NewsLetter />
          </div>
        </article>

        <Separator className={"w-[88%]!"} />

        <article className="tracking-0 flex w-[88%] flex-col justify-between gap-6 text-[16px] leading-[100%] lg:flex-row lg:gap-0">
          <p>{`© ${new Date().getFullYear()} MadaDiaspora — Tous droits réservés.`}</p>

          <div className="flex flex-col gap-6 text-[12px] sm:flex-row lg:justify-between lg:gap-10 xl:text-[16px]">
            <Link href={"#"}>{"Termes & Conditions"}</Link>
            <Link href={"#"}>{"Politique de confidentialité"}</Link>
          </div>
        </article>
      </article>
    </footer>
  );
}
