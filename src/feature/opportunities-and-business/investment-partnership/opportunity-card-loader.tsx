import { Skeleton } from "@/components/ui/skeleton";

export default function OpportunityCardLoader() {
  return (
    <Skeleton className="bg-muted-foreground/40 relative flex flex-col gap-0 rounded-[32px] border-[1px] p-[12px]">
      <div className="relative h-[593px] w-full rounded-t-[29px] pt-[12px]">
        <Skeleton className="bg-muted-foreground/40 h-full w-full rounded-t-[29px] object-cover" />

        <Skeleton className="bg-foreground/40 absolute top-[24px] left-[24px] flex h-[34px] w-[15%] items-center gap-[8px] rounded-[17px] p-[10px]" />

        <Skeleton className="bg-foreground/40 absolute top-[24px] right-[24px] flex h-[34px] w-[15%] items-center gap-[8px] rounded-[17px] p-[10px]" />
      </div>

      <div className="flex flex-col gap-[10px] rounded-b-[32px] px-[16px] pt-[19px] pb-[17px]">
        <Skeleton className="bg-muted-foreground/40 h-10 w-[75%]" />

        <Skeleton className="bg-muted-foreground/40 h-10 w-[50%]" />
      </div>
    </Skeleton>
  );
}
