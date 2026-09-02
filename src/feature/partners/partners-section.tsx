import DoubleImagesCard from "@/feature/partners/double-images-card";

export default function PartnersSection() {
  return (
    <section className="mt-45.25 flex flex-col items-center justify-around gap-10 xl:flex-row xl:gap-0">
      <article className="flex w-90 flex-col gap-3.75 text-center text-[24px] leading-[110%] font-bold sm:w-120 sm:text-[34px] xl:text-left 2xl:w-151.25 2xl:text-[64px]">
        <h2>
          Nos <span className="text-secondary">partenaires</span> officiels
        </h2>
        <p className="text-[15px] leading-8 font-normal sm:text-[18px] 2xl:text-[28px]">
          {
            "Nos partenaires officiels sont des acteurs engagés qui partagent notre vision d'une diaspora unie, dynamique et solidaire."
          }
        </p>
      </article>

      <figure className="h-35 w-90 sm:h-55 sm:w-150 2xl:h-75 2xl:w-200">
        <DoubleImagesCard rightImage="/afo.png" leftImage="/paositra.png" />
      </figure>
    </section>
  );
}
