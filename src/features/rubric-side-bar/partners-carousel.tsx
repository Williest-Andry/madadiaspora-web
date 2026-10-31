"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { usePartners } from "@/hooks/partners/use-partners";
import { getImageUrl } from "@/lib/get-image-url";
import LogoLoader from "./logo-loader";
import GenericErrorSection from "@/components/generic-error-section";

export default function PartnersCarousel() {
  const { partners, isLoading, isError, isFetching, refetch } = usePartners();

  if (isError) {
    return (
      <GenericErrorSection
        isFetching={isFetching}
        message="Impossible de charger les partenaires"
        refetch={refetch}
        backgroundColor="foreground"
        className="mt-0!"
      />
    );
  }

  return (
    <Carousel
      opts={{ loop: true, dragFree: true, watchDrag: true }}
      plugins={[
        AutoScroll({
          speed: 2,
          direction: "backward",
          stopOnInteraction: false,
          stopOnMouseEnter: true,
          startDelay: 0,
        }),
      ]}
    >
      <p className="text-rubric-text-md mt-[30px] font-[500]">Partenaires</p>
      <CarouselContent className="mt-[20px] -ml-4 flex h-[112px] gap-4">
        {isLoading &&
          new Array(5).fill(0).map((l, index) => (
            <CarouselItem
              key={index}
              className="relative h-[112px] basis-[116px] pl-4 first:ml-4"
            >
              <LogoLoader />
            </CarouselItem>
          ))}

        {partners.map((partner, index) => (
          <CarouselItem
            key={index}
            className="relative h-[112px] basis-[116px] pl-4 first:ml-4"
          >
            <Image
              src={getImageUrl(partner.logo.url)}
              alt={partner.logo.name}
              fill
              className="object-contain"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
