import CustomMainTitleSection from "@/components/custom-main-title-section";
import HistorySection from "@/features/about/who-are-we/history-section";
import ContactAndMapSection from "@/features/about/who-are-we/map-section";
import OurExpertiseSection from "@/features/about/who-are-we/our-expertise-section";
import WhoAreWeSection from "@/features/about/who-are-we/who-are-we-section";

export default function WhoAreWePage() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <CustomMainTitleSection
        primaryTitle="Malagasy et"
        secondaryTitle="fier(e) de l’être !"
        description="Dans un monde toujours plus connecté, Madadiaspora nous invite à célébrer notre culture, à affirmer notre identité et à renforcer les liens entre les Malagasy du monde."
      />

      <section className="bg-foreground flex w-full flex-col items-center justify-center pb-20">
        <WhoAreWeSection />
      </section>

      <HistorySection />

      <OurExpertiseSection />

      <ContactAndMapSection />
    </div>
  );
}
