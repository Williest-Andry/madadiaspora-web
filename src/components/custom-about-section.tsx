"use client";

import CustomAboutImagesFigure from "./custom-about-images-figure";
import Image from "next/image";
import MobileCTAButton from "./mobile-cta-button";
import { motion } from "motion/react";

type CustomAboutSectionProps = {
  mainImage: string;
  leftImage: string;
  rightImage: string;
  span: string;
  primaryTitle: string;
  secondaryTitle: string;
  paragraph: string;
  gapParagraphButton?: number;
};

export default function CustomAboutSection({
  mainImage,
  leftImage,
  rightImage,
  span,
  primaryTitle,
  secondaryTitle,
  paragraph,
  gapParagraphButton = 25.5,
}: CustomAboutSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: "some", once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-foreground 3xl:w-[1656px] relative flex w-full flex-col items-center justify-between gap-10 pt-23.5 md:w-185 xl:w-305 xl:flex-row xl:gap-0 2xl:w-357.5"
    >
      <CustomAboutImagesFigure
        mainImage={mainImage}
        leftImage={leftImage}
        rightImage={rightImage}
      />

      <article
        className={`3xl:w-204 flex w-full flex-col items-center gap-15 max-sm:gap-8 md:w-150 xl:items-start xl:gap-${gapParagraphButton}`}
      >
        <article className="gap- flex flex-col items-center max-md:w-[90vw] md:max-xl:w-[70vw] xl:items-start">
          <figure className="mb-6.75 flex gap-2.25">
            <div className="relative h-5 w-5">
              <Image
                src={"/yellow-globe.png"}
                alt="little yellow globe image"
                fill
              />
            </div>
            <span className="text-popover text-[14px] leading-5 font-semibold">
              {span}
            </span>
          </figure>

          <figure className="text-title-sm 3xl:text-title-xl sm:text-title-md mb-10 flex leading-[110%] font-bold">
            <h2 className="text-popover">{`${primaryTitle}`}&nbsp; </h2>
            <h2 className="text-secondary">{secondaryTitle}</h2>
          </figure>

          <p className="text-popover 3xl:text-p-xl text-p-sm sm:text-p-md -mt-[17px] text-center leading-8 max-sm:w-full xl:text-justify">
            {paragraph}
          </p>
        </article>

        <MobileCTAButton />
      </article>
    </motion.section>
  );
}
