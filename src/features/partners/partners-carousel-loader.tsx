import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

export default function PartnersCarouselLoader() {
  return (
    <Carousel opts={{ watchDrag: false }}>
      <CarouselContent className="max-xs:-space-x-6 mt-10 mb-10 flex items-center justify-center">
        {Array(2)
          .fill(0)
          .map((e, index) => (
            <CarouselItem
              key={index}
              className={cn(
                "max-xs:basis-[180px] basis-[318px] max-sm:basis-[218px] lg:basis-[430px]"
              )}
            >
              <Skeleton
                className={cn(
                  "bg-primary-foreground xs:h-[200px] xs:w-[200px] flex h-[150px] w-[150px] items-center justify-center rounded-[38px] border-[3px] sm:h-[250px] sm:w-[300px] lg:h-[300px] lg:w-[400px]"
                )}
              ></Skeleton>
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
}
