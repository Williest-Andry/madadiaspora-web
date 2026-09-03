import CTAButton from "@/components/cta-button";
import AboutImagesFigure from "./about-images-figure";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-foreground relative flex w-100 flex-col items-center justify-between gap-10 pt-23.5 min-[1700px]:w-[1656px] md:w-185 xl:w-305 xl:flex-row xl:gap-0 2xl:w-357.5">
      <AboutImagesFigure />

      <article className="flex w-100 flex-col items-center gap-25.5 min-[1700px]:w-204 md:w-150 xl:items-start">
        <article className="flex flex-col items-center xl:items-start">
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

          <figure className="mb-4.25 text-[44px] leading-[110%] font-bold min-[1700px]:text-[64px]">
            <h2 className="text-popover">La plateforme</h2>
            <h2 className="text-secondary">Madadiaspora</h2>
          </figure>

          <p className="text-popover text-center text-[17px] leading-8 min-[1700px]:text-[28px] md:text-[22px] xl:text-justify">{`La culture malagasy s'ancre profondément dans une valeur fondamentale : le "Fihavanana". Ce lien fort qui unit les malagasy repose sur l'entraide, la solidarité et le respect mutuel, constituant ainsi l'essence même de notre identité. Cependant, dans le tumulte de la vie quotidienne, entre les défis personnels et professionnels, ce précieux esprit du Fihavanana peut parfois être mis à l'épreuve.`}</p>
        </article>

        <CTAButton
          title="Voir plus"
          className="text-foreground bg-popover hover:bg-popover h-14.5 w-47.25 justify-between p-1 pl-5"
        />
      </article>
    </section>
  );
}
