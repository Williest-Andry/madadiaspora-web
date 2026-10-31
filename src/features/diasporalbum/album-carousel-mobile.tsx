"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CarouselAlbumItem from "./album-item";
import { Album } from "@/interfaces/album/album-types";

type AlbumCarouselMobileProps = {
  album?: Album[];
};

export default function AlbumCarouselMobile({
  album,
}: AlbumCarouselMobileProps) {
  const MOCK_DATA = [
    "/maki.jpg",
    "/album-baoba-taxi.jpg",
    "/album-road.jpg",
    "/album-sea.jpg",
    "/album-sunset.jpg",
    "/album-baobab.jpg",
    "/album-womens-children.jpg",
  ];

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
      <CarouselContent className="flex gap-30 xl:mt-0 xl:hidden">
        {MOCK_DATA.map((image, index) => (
          <CarouselItem key={index} className="basis-65 first:ml-30">
            <CarouselAlbumItem image={image} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
