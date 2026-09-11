import CTAButton from "@/components/cta-button";
import AboutImagesFigure from "./about-images-figure";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-foreground 3xl:w-[1656px] relative flex w-100 flex-col items-center justify-between gap-10 pt-23.5 md:w-185 xl:w-305 xl:flex-row xl:gap-0 2xl:w-357.5">
      <AboutImagesFigure />

      <article className="3xl:w-204 flex w-100 flex-col items-center gap-15 max-sm:gap-8 md:w-150 xl:items-start xl:gap-25.5">
        <article className="flex flex-col items-center max-md:w-[90vw] md:max-xl:w-[70vw] xl:items-start">
          <figure className="mb-6.75 flex gap-2.25">
            <div className="relative h-5 w-5">
              <Image
                src={"/yellow-globe.png"}
                alt="little yellow globe image"
                fill
              />
            </div>
            <span className="text-popover text-[14px] leading-5 font-semibold">
              {"À PROPOS"}
            </span>
          </figure>

          <figure className="text-title-sm 3xl:text-title-xl sm:text-title-md mb-10 leading-[110%] font-bold">
            <h2 className="text-popover">La plateforme</h2>
            <h2 className="text-secondary">Madadiaspora</h2>
          </figure>

          <p className="text-popover 3xl:text-p-xl text-p-sm sm:text-p-md text-center leading-8 max-sm:w-full xl:text-justify">{`La culture malagasy s'ancre profondément dans une valeur fondamentale : le "Fihavanana". Ce lien fort qui unit les malagasy repose sur l'entraide, la solidarité et le respect mutuel, constituant ainsi l'essence même de notre identité. Cependant, dans le tumulte de la vie quotidienne, entre les défis personnels et professionnels, ce précieux esprit du Fihavanana peut parfois être mis à l'épreuve.`}</p>
        </article>

        <CTAButton
          title="Voir plus"
          className="text-foreground bg-popover hover:bg-popover max-sm:text-p-sm h-14.5 w-47.25 justify-between p-1 pl-5 max-sm:w-35"
        />
      </article>
    </section>
  );
}
