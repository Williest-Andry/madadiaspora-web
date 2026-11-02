import { cn } from "@/lib/utils";

type EmptyResultProps = {
  message?: string;
  className?: string;
};

export default function EmptyResult({
  message = "Aucun résultat",
  className,
}: EmptyResultProps) {
  return (
    <div
      className={cn(
        "flex h-screen items-start justify-center pt-30",
        className
      )}
    >
      <p className="text-muted-foreground text-p-md text-center font-extralight italic">
        {message}
      </p>
    </div>
  );
}
