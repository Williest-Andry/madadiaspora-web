import DoubleImagesCard from "@/feature/partners/double-images-card";

export default function PartnersSection() {
  return (
    <section className="mt-45.25 mb-40.75 flex flex-col items-center justify-around gap-10 xl:flex-row xl:gap-0">
      <article className="text-title-sm sm:text-title-md 2xl:text-title-xl flex w-[90%] flex-col gap-3.75 text-center leading-[110%] font-bold sm:w-120 xl:text-left 2xl:w-151.25">
        <h2>
          Nos <span className="text-secondary">partenaires</span> officiels
        </h2>
        <p className="text-p-sm sm:text-p-md 2xl:text-p-xl leading-8 font-normal">
          {
            "Nos partenaires officiels sont des acteurs engagés qui partagent notre vision d'une diaspora unie, dynamique et solidaire."
          }
        </p>
      </article>

      <figure className="xs:w-90 h-35 w-80 sm:h-55 sm:w-150 2xl:h-75 2xl:w-200">
        <DoubleImagesCard rightImage="/paositra.png" leftImage="/afo.png" />
      </figure>
    </section>
  );
}
