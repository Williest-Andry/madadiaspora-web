import { Skeleton } from "@/components/ui/skeleton";

export default function EventsCardLoader() {
  return (
    <Skeleton className="bg-muted-foreground relative h-72.5 w-64.25 rounded-[27px]">
      <Skeleton className="font-outfit bg-secondary-foreground/60 absolute top-45 right-2.5 bottom-2.5 left-2.5 flex h-25 w-59 flex-col gap-1 overflow-hidden rounded-[17px] p-3 backdrop-blur-[4px]">
        <Skeleton className="bg-muted-foreground h-4 w-2/3" />
        <Skeleton className="bg-muted-foreground h-4 w-1/2" />
      </Skeleton>
    </Skeleton>
  );
}
