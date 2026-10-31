import { Skeleton } from "@/components/ui/skeleton";

export default function PreviewSkeleton() {
  return (
    <div className="flex w-full items-center gap-[16px] max-xl:justify-center">
      <div className="relative flex h-[50px] w-[50px] items-center rounded-full lg:h-[48px] lg:w-[55px] xl:h-[52px] xl:w-[52px]">
        <Skeleton className="bg-muted-foreground/40 h-10 w-full rounded-full" />
      </div>

      <div className="flex w-full flex-col gap-[4px]">
        <Skeleton className="bg-muted-foreground/40 text-rubric-text-xs text-layout-muted h-4 w-[50%] font-[300] font-light" />
        <Skeleton className="bg-muted-foreground/40 text-rubric-text-sm text-popover line-clamp-2 h-4 w-full font-[500]" />
      </div>
    </div>
  );
}
