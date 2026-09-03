import { InfiniteCarousel } from "@/feature/events-carousel/events-infinite-carousel";

import AboutAndInfoSection from "@/feature/about/about-and-info-section";

import HeroSection from "@/feature/hero/hero-section";
import PartnersSection from "@/feature/partners/partners-section";

export default function Home() {
  return (
    <>
      <HeroSection />

      <InfiniteCarousel />

      <PartnersSection />

      <AboutAndInfoSection />
    </>
  );
}
