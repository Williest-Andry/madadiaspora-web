import { Skeleton } from "./ui/skeleton";

export default function PersonCardLoader() {
  return (
    <Skeleton className="bg-primary/20 xs:w-[308px] text-primary flex w-[95%] flex-col gap-2 rounded-[32px] p-[8px] pb-10">
      <figure className="xs:w-[99%] xs:h-[350px] relative h-[300px] w-full rounded-[24px]">
        <Skeleton className="bg-muted-foreground/40 h-full w-full rounded-[24px]" />
        <Skeleton className="bg-muted-foreground text-text-badge absolute top-[12px] left-[12px] h-[24px] w-[20%] rounded-[8px] px-[8px] py-[4px]"></Skeleton>
      </figure>

      <article className="flex w-full flex-col gap-[8px] rounded-[24px]">
        <Skeleton className="bg-muted-foreground h-4 w-full" />

        <div className="flex gap-[8px] rounded-[24px]">
          <Skeleton className="bg-muted-foreground h-4 w-[60%] rounded-[24px]" />
        </div>
      </article>
    </Skeleton>
  );
}
