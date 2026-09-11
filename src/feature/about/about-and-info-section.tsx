import AboutSection from "./about-section";
import InfoSection from "./info-section";

export default function AboutAndInfoSection() {
  return (
    <section className="bg-foreground flex flex-col items-center justify-center pb-34 sm:pb-74.75">
      <AboutSection />

      <InfoSection />
    </section>
  );
}
