"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CustomCarouselItem from "./carousel-item";
import { useNews } from "@/hooks/news/use-news";
import { eventsData } from "@/constant/events-carousel/data";
import EventsCarouselLoader from "./events-carousel-loader";
import GenericErrorSection from "@/components/generic-error-section";

export function InfiniteCarousel() {
  const { news, error, isLoading, refetch, isFetching } = useNews();

  if (error)
    return (
      <GenericErrorSection
        message="Impossible de charger les événements"
        refetch={refetch}
        isFetching={isFetching}
      />
    );
  if (isLoading) return <EventsCarouselLoader />;

  const MOCK_DATA = [...eventsData, ...eventsData];

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
        {MOCK_DATA.map((event, index) => (
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
