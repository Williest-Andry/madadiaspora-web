"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function PartnersCarousel() {
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
        {new Array(5).fill(0).map((i, index) => (
          <CarouselItem
            key={index}
            className="relative h-[112px] basis-[116px] pl-4 first:ml-4"
          >
            <Image
              src={"/partner-paositra.png"}
              alt="mock"
              fill
              className="object-contain"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
