"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CarouselAlbumItem from "./album-item";

export default function AlbumCarouselMobile() {
  const data = [
    "/maki.jpg",
    "/album-baoba-taxi.jpg",
    "/album-road.jpg",
    "/album-sea.jpg",
    "/album-sunset.jpg",
    "/album-baobab.jpg",
    "/album-womens-children.jpg",
  ];

  const album = [...data, ...data];

  return (
    <Carousel
      opts={{ loop: true, dragFree: true }}
      plugins={[
        AutoScroll({
          speed: 2,
          direction: "backward",
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent className="flex gap-30 xl:mt-0 xl:hidden">
        {album.map((image, index) => (
          <CarouselItem key={index} className="basis-65 first:ml-30">
            <CarouselAlbumItem image={image} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
