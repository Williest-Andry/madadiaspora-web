import { Skeleton } from "./ui/skeleton";

export default function PersonCardLoader() {
  return (
    <Skeleton className="bg-primary/20 text-primary xs:w-[399.25px] flex w-[95%] flex-col gap-2 rounded-[32px] border-[1px] border-[#F1F2F4] p-[8px]">
      <figure className="xs:w-[381.25px] xs:h-[400px] relative h-[300px] w-full rounded-[24px]">
        <Skeleton className="bg-muted-foreground/40 h-full w-full rounded-[24px]" />
        <Skeleton className="bg-muted-foreground text-text-badge absolute top-[12px] left-[12px] h-[24px] w-[20%] rounded-[8px] px-[8px] py-[4px]"></Skeleton>
      </figure>

      <article className="flex w-full flex-col gap-[8px] rounded-[24px]">
        <Skeleton className="bg-muted-foreground h-4 w-full" />

        <div className="flex w-full gap-[8px]">
          <Skeleton className="bg-muted-foreground h-8 w-full" />
          <Skeleton className="bg-muted-foreground h-8 w-full" />
          <Skeleton className="bg-muted-foreground h-8 w-full" />
        </div>

        <div className="flex gap-[8px] rounded-[24px]">
          <Skeleton className="bg-muted-foreground h-12 w-full rounded-[24px]" />
        </div>
      </article>
    </Skeleton>
  );
}
