import { Skeleton } from "@/components/ui/skeleton";

export default function GoodsAndServicesDemandLoader() {
  return (
    <Skeleton className="bg-muted-foreground/40 xs:p-[20px] xs:w-[80%] flex w-full gap-[27px] border-[1px] p-2">
      <Skeleton className="bg-muted-foreground xs:h-[96px] xs:w-[100px] h-[50px] w-[100px] rounded-full" />

      <div className="flex w-full flex-1 flex-col gap-[15px]">
        <div className="flex flex-col gap-[6px]">
          <Skeleton className="bg-muted-foreground/40 h-6 w-full" />
          <Skeleton className="bg-muted-foreground/40 h-6 w-[60%]" />
        </div>

        <div className="flex gap-[12px]">
          <Skeleton className="bg-muted-foreground/40 h-10 w-30 rounded-[40px]" />
          <Skeleton className="bg-muted-foreground/40 h-10 w-30 rounded-[40px]" />
        </div>
      </div>
    </Skeleton>
  );
}
