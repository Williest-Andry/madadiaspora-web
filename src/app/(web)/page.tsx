"use client";

import { InfiniteCarousel } from "@/features/events-carousel/events-infinite-carousel";
import AboutAndInfoSection from "@/features/about/about-and-info-section";
import HeroSection from "@/features/hero/hero-section";
import PartnersSection from "@/features/partners/partners-section";
import ServicesSection from "@/features/services/services-section";
import DiasporalbumSection from "@/features/diasporalbum/diasporablum-section";
import OtherPartnersSection from "@/features/other-partners/other-partners-section";
import ContactSection from "@/features/contact/contact-section";

export default function Home() {
  return (
    <>
      {/* <HeroSection /> */}

      <InfiniteCarousel />

      <PartnersSection />

      <AboutAndInfoSection />

      <ServicesSection />

      <DiasporalbumSection />

      <OtherPartnersSection />

      <ContactSection />
    </>
  );
}
