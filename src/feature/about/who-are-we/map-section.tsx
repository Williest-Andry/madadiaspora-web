import CustomTitleSection from "@/components/custom-title-section";
import MapSection from "@/feature/contact/map-section";

export default function ContactAndMapSection() {
  return (
    <section className="bg-foreground flex w-full flex-col items-center justify-center pb-30">
      <CustomTitleSection
        span="NOUS RETROUVER"
        primaryTitle="Nos"
        secondaryTitle="coordonnées"
        paragraph="Retrouvez les informations de contact de Phenix Agency et sa localisation à Antananarivo."
        textColor="primary"
      />

      <MapSection />
    </section>
  );
}
