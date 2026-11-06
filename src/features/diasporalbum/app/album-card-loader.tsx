import { Skeleton } from "@/components/ui/skeleton";

export default function AlbumCardLoader() {
  return (
    <Skeleton className="bg-muted-foreground/40 relative h-[400px] w-[500px] rounded-4xl sm:h-[600px]">
      <Skeleton className="bg-muted-foreground/40 absolute top-[24px] left-[24px] h-[34px] w-[20%] rounded-[17px]" />

      <Skeleton className="bg-muted-foreground/40 xs:top-[24px] max-xs:left-[24px] xs:right-[24px] absolute top-[74px] h-[34px] w-[20%] rounded-[17px]" />

      <Skeleton className="bg-muted-foreground/40 absolute bottom-0 flex h-[15%] w-full rounded-b-4xl" />
    </Skeleton>
  );
}
