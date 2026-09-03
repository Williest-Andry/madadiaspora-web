import AboutSection from "./about-section";
import InfosSection from "./infos-section";

export default function AboutAndInfoSection() {
  return (
    <section className="bg-foreground flex flex-col items-center justify-center">
      <AboutSection />

      <InfosSection />
    </section>
  );
}
