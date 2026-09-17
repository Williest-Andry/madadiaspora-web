"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Partner } from "@/interfaces/partners/partners-types";
import PartnerLogo from "./partner-logo";
import { cn } from "@/lib/utils";

type OfficialPartnersCarouselProps = {
  partners: Partner[];
  isInfinite: boolean;
  itemClassName?: string;
};

export default function OfficialPartnersCarousel({
  partners,
  isInfinite,
  itemClassName,
}: OfficialPartnersCarouselProps) {
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
    >
      <CarouselContent className="max-xs:-space-x-6 flex">
        {partners.map((partner, index) => (
          <CarouselItem
            key={index}
            className={cn("basis-[318px] lg:basis-[430px]", itemClassName)}
          >
            <PartnerLogo
              href={partner.redirectUrl}
              partner={partner}
              className="xs:h-[200px] xs:w-[200px] h-[150px] w-[150px] sm:h-[250px] sm:w-[300px]"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
