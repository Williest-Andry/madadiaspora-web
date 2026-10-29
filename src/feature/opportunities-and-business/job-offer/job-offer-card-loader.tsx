import { Skeleton } from "@/components/ui/skeleton";

export default function JobOfferCardLoader() {
  return (
    <Skeleton className="bg-muted-foreground/40 xs:p-[20px] xs:w-[80%] flex w-full gap-[27px] border-[1px] p-2">
      <Skeleton className="bg-muted-foreground xs:h-[93px] xs:w-[93px] h-[80px] w-[80px] rounded-[4px]" />

      <div className="flex w-full flex-col gap-[15px]">
        <div className="flex flex-col gap-[6px]">
          <Skeleton className="bg-muted-foreground/40 h-10 w-full" />
          <Skeleton className="bg-muted-foreground/40 h-10 w-[60%]" />
        </div>

        <div className="flex gap-[12px]">
          <Skeleton className="bg-muted-foreground/40 h-10 w-30 rounded-[40px]" />
          <Skeleton className="bg-muted-foreground/40 h-10 w-30 rounded-[40px]" />
        </div>

        <div className="flex flex-col gap-4">
          <Skeleton className="bg-muted-foreground/40 h-4 w-20" />
          <Skeleton className="bg-muted-foreground/40 h-4 w-20" />
        </div>
      </div>
    </Skeleton>
  );
}
