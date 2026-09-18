"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CustomCarouselItem from "./carousel-item";
import { useNews } from "@/hooks/news/use-news";

export function InfiniteCarousel() {
  const { news, error, isLoading } = useNews();

  if (error) return <p>ERREUR</p>;
  if (isLoading) return <p>Chargement...</p>;

  return (
    <Carousel
      opts={{ loop: true, dragFree: true }}
      plugins={[
        AutoScroll({
          speed: 2,
          direction: "forward",
          stopOnInteraction: false,
          stopOnMouseEnter: true,
          startDelay: 0,
        }),
      ]}
    >
      <CarouselContent className="mt-20 flex gap-4 xl:mt-0">
        {[...news, ...news].map((event, index) => (
          <CarouselItem key={index} className="basis-65 first:ml-4">
            <CustomCarouselItem
              title={event.title}
              summary={event.summary}
              country={event.country}
              image={event.image}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
