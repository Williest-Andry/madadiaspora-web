import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type AuthButtonProps = {
  className?: string;
};

export default function AuthButton({ className }: AuthButtonProps) {
  return (
    <Button
      className={cn(
        "bg-secondary h-10 w-30.5 rounded-[54px] px-4 py-2",
        className
      )}
      variant={"secondary"}
    >
      Se connecter
    </Button>
  );
}
