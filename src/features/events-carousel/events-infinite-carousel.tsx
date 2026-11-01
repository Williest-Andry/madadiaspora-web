"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CustomCarouselItem from "./carousel-item";
import { useActuality } from "@/hooks/news/use-news";
import EventsCarouselLoader from "./events-carousel-loader";
import GenericErrorSection from "@/components/generic-error-section";

export function InfiniteCarousel() {
  const { actuality, error, isLoading, refetch, isFetching } = useActuality({
    limit: 10,
  });

  if (error)
    return (
      <GenericErrorSection
        message="Impossible de charger les événements"
        refetch={refetch}
        isFetching={isFetching}
      />
    );
  if (isLoading) return <EventsCarouselLoader />;

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
      <CarouselContent className="mt-4 flex gap-4 xl:mt-0">
        {actuality.map((event, index) => (
          <CarouselItem key={index} className="basis-65 first:ml-4">
            <CustomCarouselItem
              title={event.info.title}
              summary={event.info.summary}
              country={event.address.country}
              image={event.cover}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
