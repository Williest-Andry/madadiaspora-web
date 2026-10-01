import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Partner } from "@/interfaces/partners/partners-types";
import { cn } from "@/lib/utils";
import PartnerLogo from "../partners/partner-logo";
import { Skeleton } from "@/components/ui/skeleton";

export default function OtherPartnersLoader() {
  return (
    <Carousel
      opts={{ loop: true, watchDrag: false }}
      plugins={[
        AutoScroll({
          speed: 2,
          direction: "forward",
          stopOnInteraction: false,
          stopOnMouseEnter: true,
          startDelay: 0,
        }),
      ]}
      className="relative w-full"
    >
      <CarouselContent className="flex">
        {Array(10)
          .fill(0)
          .map((partner, index) => (
            <CarouselItem
              key={index}
              className={cn("basis-[318px] lg:basis-[430px]")}
            >
              <div
                className={cn(
                  "flex h-[250px] w-[300px] items-center justify-center rounded-[38px] lg:h-[300px] lg:w-[400px]"
                )}
              >
                <Skeleton className="bg-muted-foreground h-full w-full rounded-[38px]" />
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
}
