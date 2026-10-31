import { Skeleton } from "@/components/ui/skeleton";

export default function AlbumSideLoader() {
  return (
    <figure className="flex flex-col gap-[20px]">
      <div className="relative h-[354px] w-[299px] rounded-[48px] min-[109.375rem]:h-[454px] min-[109.375rem]:w-[399px]">
        <Skeleton className="bg-muted-foreground h-full w-full rounded-[48px]" />
      </div>

      <div className="relative h-[600px] w-[299px] rounded-[48px] min-[109.375rem]:h-[700px] min-[109.375rem]:w-[399px]">
        <Skeleton className="bg-muted-foreground h-full w-full rounded-[48px]" />
      </div>
    </figure>
  );
}
