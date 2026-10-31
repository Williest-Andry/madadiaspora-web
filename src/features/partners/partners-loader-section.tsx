import { Skeleton } from "@/components/ui/skeleton";
import PartnersCarouselLoader from "./partners-carousel-loader";

export default function PartnersLoaderSection() {
  return (
    <section className="mt-45.25 mb-20.75 flex w-full flex-col items-center justify-around gap-10">
      <div className="3xl:w-[1656px] 3xl:gap-34.75 max-3xl:w-[90%] flex flex-col items-center justify-between gap-10 xl:flex-row">
        <div className="flex w-full flex-col items-center gap-2 sm:w-126.25 xl:items-start 2xl:w-[819.5px]">
          <Skeleton className="bg-muted-foreground h-4 w-1/2" />
          <Skeleton className="bg-muted-foreground h-4 w-2/3" />
        </div>

        <div className="flex w-full flex-col gap-2">
          <Skeleton className="bg-muted-foreground h-4 w-full" />
          <Skeleton className="bg-muted-foreground h-4 w-11/12" />
          <Skeleton className="bg-muted-foreground h-4 w-10/12" />
        </div>
      </div>

      <figure className="flex w-[50%] items-center justify-center">
        <PartnersCarouselLoader />
      </figure>
    </section>
  );
}
