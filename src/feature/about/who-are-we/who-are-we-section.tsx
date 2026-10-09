"use client";

import Image from "next/image";
import CustomWhoAreWeImagesFigure from "./custom-who-are-we-images-figure";
import { motion } from "motion/react";

export default function WhoAreWeSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: "some", once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-foreground 3xl:w-[1656px] relative flex w-full flex-col items-center justify-between gap-10 pt-23.5 md:w-185 xl:w-305 xl:flex-row xl:gap-0 2xl:w-357.5"
    >
      <CustomWhoAreWeImagesFigure />

      <article
        className={`3xl:w-204 flex w-full flex-col items-center gap-15 max-sm:gap-8 md:w-150 xl:items-start xl:gap-${0}`}
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
              {"QUI SOMMES-NOUS ?"}
            </span>
          </figure>

          <figure className="text-title-sm 3xl:text-title-xl sm:text-title-md mb-10 flex flex-col leading-[110%] font-bold max-xl:text-center">
            <h2 className="text-popover">{"Un pont numérique, signé"}</h2>
            <h2 className="text-secondary">{"Phenix Agency"}</h2>
          </figure>

          <div className="flex flex-col gap-10 xl:gap-20">
            <p className="text-popover 3xl:text-p-xl text-p-sm sm:text-p-md -mt-[17px] text-center leading-8 max-sm:w-full xl:text-justify">
              {
                "Madadiaspora est une initiative conçue par des Malagasy, pour les Malagasy. Mise en œuvre par Phenix Agency, la plateforme a pour objectif de connecter les Malagasy à travers le monde et de favoriser les échanges et la solidarité au sein de la communauté. Basée à Antananarivo, Phenix Agency est une société privée malagasy spécialisée dans le conseil en communication et en développement, ainsi que dans l’organisation événementielle."
              }
            </p>

            <p className="text-popover 3xl:text-p-xl text-p-sm sm:text-p-md -mt-[17px] text-center leading-8 max-sm:w-full xl:text-justify">
              {
                "Notre ambition est de faire de Madadiaspora un réseau de référence pour connecter les Malagasy à travers le monde."
              }
            </p>
          </div>
        </article>
      </article>
    </motion.section>
  );
}
