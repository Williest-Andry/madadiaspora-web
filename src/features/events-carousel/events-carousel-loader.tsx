import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import EventsCardLoader from "./events-loader";

export default function EventsCarouselLoader() {
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
        {Array(10)
          .fill(0)
          .map((e, index) => (
            <CarouselItem key={index} className="basis-65 first:ml-4">
              <EventsCardLoader />
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
}
