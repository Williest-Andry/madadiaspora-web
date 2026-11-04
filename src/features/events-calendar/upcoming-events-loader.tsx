import { Skeleton } from "@/components/ui/skeleton";
import UpComingCardLoader from "./upcoming-card-loader";

type UpComingEventLoaderProps = {
  limit?: number;
};

export default function UpComingEventLoader({
  limit = 3,
}: UpComingEventLoaderProps) {
  return (
    <div className="mb-10 flex flex-col gap-8">
      <Skeleton className="bg-muted-foreground/40 h-10 w-[40%]" />

      {new Array(limit).fill(0).map((l, index) => (
        <UpComingCardLoader key={index} />
      ))}
    </div>
  );
}
