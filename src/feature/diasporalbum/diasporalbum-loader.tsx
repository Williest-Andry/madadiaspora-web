import { Skeleton } from "@/components/ui/skeleton";
import AlbumLoader from "./album-loader";
import AlbumMobileLoader from "./album-mobile-loader";

type DiasporalbumLoaderProps = {
  showText?: boolean;
};

export default function DiasporalbumLoader({
  showText = true,
}: DiasporalbumLoaderProps) {
  return (
    <section className="bg-foreground text-popover flex flex-col items-center justify-center gap-[30px] overflow-hidden pt-[162px] pb-[197px] max-lg:w-full">
      {showText && (
        <div className="flex w-full flex-col items-center justify-between gap-[27px] lg:w-[958px]">
          <div className="flex w-full items-center justify-center gap-2">
            <Skeleton className="bg-muted-foreground h-8 w-8 rounded-full" />
            <Skeleton className="bg-muted-foreground h-4 w-[30%]" />
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-2">
            <Skeleton className="bg-muted-foreground h-4 w-[60%]" />
            <Skeleton className="bg-muted-foreground h-4 w-[30%]" />
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-2">
            <Skeleton className="bg-muted-foreground h-4 w-[80%]" />
            <Skeleton className="bg-muted-foreground h-4 w-[70%]" />
            <Skeleton className="bg-muted-foreground h-4 w-[60%]" />
          </div>

          <Skeleton className="bg-muted-foreground h-12 w-[20%] rounded-[40px]" />
        </div>
      )}

      <AlbumLoader />

      <AlbumMobileLoader />
    </section>
  );
}
