import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

export default function AlbumMobileLoader() {
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
        {Array(10)
          .fill(0)
          .map((e, index) => (
            <CarouselItem key={index} className="basis-65 first:ml-30">
              <figure className="relative h-[512.5px] w-[350px] rounded-[27px]">
                <Skeleton className="bg-muted-foreground h-full w-full rounded-[27px]" />
              </figure>
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
}
