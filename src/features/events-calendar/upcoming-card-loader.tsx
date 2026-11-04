import { Skeleton } from "@/components/ui/skeleton";

export default function UpComingCardLoader() {
  return (
    <Skeleton className="flex gap-[12.54px] rounded-[30.31px]">
      <Skeleton className="bg-muted-foreground/40 h-[109px] w-[109px] rounded-[21.95px] sm:h-[209px] sm:w-[209px]" />

      <div className="flex w-full flex-1 flex-col gap-[8.36px]">
        <Skeleton className="bg-muted-foreground/40 h-10 w-[90%]" />
        <Skeleton className="bg-muted-foreground/40 h-10 w-[40%]" />
      </div>
    </Skeleton>
  );
}
