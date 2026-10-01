import { CircleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type GenericErrorSectionProps = {
  message: string;
  refetch: () => void;
  isFetching: boolean;
  className?: string;
};

export default function GenericErrorSection({
  message,
  refetch,
  isFetching,
  className,
}: GenericErrorSectionProps) {
  return (
    <div
      className={cn(
        "mt-20 flex h-72.5 flex-col items-center justify-center gap-3 rounded-lg border-2 border-dotted border-red-400 p-6 text-center",
        className
      )}
    >
      <CircleAlert color="#ed3947" />
      <p className="text-muted-foreground text-sm">{message}</p>
      <Button
        onClick={() => refetch()}
        disabled={isFetching}
        variant={"secondary"}
      >
        {isFetching ? "Nouvelle tentative..." : "Réessayer"}
      </Button>
    </div>
  );
}
