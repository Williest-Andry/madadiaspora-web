"use client";

import { InfiniteCarousel } from "@/feature/events-carousel/events-infinite-carousel";
import AboutAndInfoSection from "@/feature/about/about-and-info-section";
import HeroSection from "@/feature/hero/hero-section";
import PartnersSection from "@/feature/partners/partners-section";
import ServicesSection from "@/feature/services/services-section";
import DiasporalbumSection from "@/feature/diasporalbum/diasporablum-section";
import OtherPartnersSection from "@/feature/other-partners/other-partners-section";
import ContactSection from "@/feature/contact/contact-section";
import Footer from "@/feature/footer/footer";

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

      <Footer />
    </>
  );
}
