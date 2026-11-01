import CustomMainTitleSection from "@/components/custom-main-title-section";
import CommunitySection from "@/features/about/platform/community-section";
import OurIdentitySection from "@/features/about/platform/our-identity-section";
import ServicesDetails from "@/features/about/platform/services-details";

export default function PlatformPage() {
  return (
    <div>
      <CustomMainTitleSection
        primaryTitle="À propos de"
        secondaryTitle="Madadiaspora"
        description="Découvrez la vision, la mission et les valeurs qui font de Madadiaspora un lien entre les Malagasy du monde et Madagascar."
      />

      <OurIdentitySection />

      <ServicesDetails />

      <CommunitySection />
    </div>
  );
}
