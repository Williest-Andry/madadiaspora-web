import { Skeleton } from "@/components/ui/skeleton";

export default function AlubmCenterLoader() {
  return (
    <figure className="flex flex-col items-center justify-center">
      <figure className="flex gap-[20px]">
        <div
          className={
            "relative h-[477px] w-[280px] rounded-[48px] min-[109.375rem]:h-[577px] min-[109.375rem]:w-[399px]"
          }
        >
          <Skeleton className="bg-muted-foreground h-full w-full rounded-[48px]" />
        </div>

        <div
          className={
            "relative h-[477px] w-[280px] rounded-[48px] min-[109.375rem]:h-[577px] min-[109.375rem]:w-[399px]"
          }
        >
          <Skeleton className="bg-muted-foreground h-full w-full rounded-[48px]" />
        </div>
      </figure>

      <div
        className={
          "relative mt-[20px] h-[477px] w-[518px] rounded-[48px] min-[109.375rem]:h-[577px] min-[109.375rem]:w-[818px]"
        }
      >
        <Skeleton className="bg-muted-foreground h-full w-full rounded-[48px]" />
      </div>
    </figure>
  );
}
