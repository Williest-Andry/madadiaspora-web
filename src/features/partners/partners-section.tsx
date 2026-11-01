import { usePartners } from "@/hooks/partners/use-partners";
import OfficialPartnersCarousel from "./official-partners-carousel";
import GenericErrorSection from "@/components/generic-error-section";
import PartnersLoaderSection from "./partners-loader-section";

export default function PartnersSection() {
  const { partners, error, isLoading, refetch, isFetching } = usePartners({
    isOfficial: true,
    limit: 2,
  });

  if (isLoading) return <PartnersLoaderSection />;

  if (error)
    return (
      <GenericErrorSection
        message="Impossible de charger les partenaires officiels"
        refetch={refetch}
        isFetching={isFetching}
        className="mb-10"
      />
    );

  return (
    <section className="mt-45.25 mb-40.75 flex flex-col items-center justify-around gap-10">
      <article className="3xl:w-[1656px] 3xl:gap-34.75 flex flex-col items-center justify-between gap-10 max-2xl:w-[90%] xl:flex-row xl:gap-10">
        <article className="flex w-full flex-col items-center sm:w-126.25 xl:items-start 2xl:w-[819.5px]">
          <figure className="text-title-sm sm:text-title-md 3xl:text-title-xl mb-4.25 w-full text-center leading-[110%] font-bold xl:w-186.25 xl:text-left">
            <h2>
              Nos <span className="text-secondary">partenaires</span>
            </h2>
            <h2>officiels</h2>
          </figure>
        </article>
        <p className="text-p-sm sm:text-p-md md:text-p-md 3xl:text-p-xl 3xl:w-203 w-[90%] text-center leading-8 xl:text-start 2xl:w-120">
          {
            "Nos partenaires officiels sont des acteurs engagés qui partagent notre vision d'une diaspora unie, dynamique et solidaire."
          }
        </p>
      </article>

      <figure className="flex w-[50%] items-center justify-center">
        <OfficialPartnersCarousel
          partners={partners}
          isInfinite={false}
          itemClassName="max-xs:basis-[180px] max-sm:basis-[218px]"
        />
      </figure>
    </section>
  );
}
