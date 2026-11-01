"use client";

import { usePartners } from "@/hooks/partners/use-partners";
import OtherPartnersCarousel from "./other-partners-carousel";
import { cn } from "@/lib/utils";
import { MOCK_PARTNERS_DATA } from "@/constants/partners/data";
import OtherPartnersLoader from "./other-partners-loader";
import GenericErrorSection from "@/components/generic-error-section";
import CustomTitleSection from "@/components/custom-title-section";

type OtherPartnersSectionProps = {
  backgroundColor?: "primary" | "foreground";
};

export default function OtherPartnersSection({
  backgroundColor = "primary",
}: OtherPartnersSectionProps) {
  const { partners, error, isLoading, refetch, isFetching } = usePartners({
    isOfficial: false,
  });

  return (
    <section
      className={cn(
        "flex flex-col items-center justify-center gap-[60px] overflow-hidden py-[185px] xl:gap-[100px] 2xl:gap-[171px]",
        backgroundColor == "primary"
          ? "bg-primary text-foreground"
          : "bg-foreground text-primary"
      )}
    >
      <CustomTitleSection
        textColor={backgroundColor == "primary" ? "foreground" : "primary"}
        span="Nos partenaires"
        primaryTitle="Un réseau de"
        secondaryTitle="partenaires engagés"
        titleBlock
        paragraph="Découvrez les partenaires qui nous accompagnent dans nos actions et participent au rayonnement de la diaspora à travers différentes collaborations."
      />

      {partners.length > 0 && (
        <figure className="w-[85%] min-w-0 overflow-hidden">
          <OtherPartnersCarousel
            backgroundColor="foreground"
            // partners={[...partners, ...partners, ...partners]}
            partners={[...MOCK_PARTNERS_DATA, ...MOCK_PARTNERS_DATA] as any}
            isInfinite
          />
        </figure>
      )}

      {error && (
        <figure className="flex w-full overflow-hidden">
          <GenericErrorSection
            message="Impossible de charger les autres partenaires"
            refetch={refetch}
            className="w-full!"
            isFetching={isFetching}
            backgroundColor={backgroundColor}
          />
        </figure>
      )}

      {isLoading && (
        <figure className="flex overflow-hidden">
          <OtherPartnersLoader />
        </figure>
      )}
    </section>
  );
}
