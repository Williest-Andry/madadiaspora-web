import AboutSection from "./about-section";
import InfoSection from "./info-section";

export default function AboutAndInfoSection() {
  return (
    <section className="bg-foreground flex flex-col items-center justify-center pb-24 xl:pb-44.75">
      <AboutSection />

      <InfoSection />
    </section>
  );
}
