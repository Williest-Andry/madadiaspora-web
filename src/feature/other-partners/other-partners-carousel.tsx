"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Partner } from "@/interfaces/partners/partners-types";
import { cn } from "@/lib/utils";
import PartnerLogo from "../partners/partner-logo";

type OtherPartnersCarouselProps = {
  partners: Partner[];
  isInfinite: boolean;
  itemClassName?: string;
  backgroundColor?: "popover" | "foreground";
};

export default function OtherPartnersCarousel({
  partners,
  isInfinite,
  itemClassName,
  backgroundColor = "popover",
}: OtherPartnersCarouselProps) {
  return (
    <Carousel
      opts={{ loop: isInfinite, watchDrag: isInfinite }}
      plugins={[
        AutoScroll({
          speed: 2,
          direction: isInfinite ? "forward" : undefined,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
          startDelay: 0,
        }),
      ]}
      draggable={isInfinite}
      className="relative w-full"
    >
      <CarouselContent className="flex">
        {partners.map((partner, index) => (
          <CarouselItem
            key={index}
            className={cn("basis-[318px] lg:basis-[430px]", itemClassName)}
          >
            <PartnerLogo href={partner.redirectUrl} partner={partner} />
          </CarouselItem>
        ))}
      </CarouselContent>

      {backgroundColor == "popover" ? (
        <>
          <div className="from-primary pointer-events-none absolute inset-0 z-10 h-full w-[40%] bg-linear-to-r from-80% to-transparent"></div>

          <div className="from-primary pointer-events-none absolute inset-y-0 right-0 z-10 h-full w-[40%] bg-linear-to-l from-80% to-transparent" />
        </>
      ) : (
        <>
          <div className="pointer-events-none absolute inset-0 z-10 h-full w-[40%] bg-linear-to-r from-black/40 from-80% to-transparent"></div>

          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 h-full w-[40%] bg-linear-to-l from-black/40 from-80% to-transparent" />
        </>
      )}
    </Carousel>
  );
}
