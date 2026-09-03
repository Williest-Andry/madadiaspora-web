"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { eventsData } from "@/constant/events-carousel/data";
import CustomCarouselItem from "./carousel-item";

export function InfiniteCarousel() {
  const allEvents = [...eventsData, ...eventsData];

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
      <CarouselContent className="mt-20 flex gap-8 xl:mt-0">
        {allEvents.map((event, index) => (
          <CarouselItem key={index} className="basis-65 first:ml-8">
            <CustomCarouselItem
              title={event.title}
              description={event.description}
              country={event.country}
              image={event.image}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <div className={"absolute top-35 left-50 h-10 w-10"}>
        <CarouselPrevious className={"h-full w-full bg-red-500"} />
      </div>
      <div className={"absolute top-35 right-50 h-10 w-10"}>
        <CarouselNext className={"h-full w-full bg-red-500"} />
      </div> */}
    </Carousel>
  );
}
