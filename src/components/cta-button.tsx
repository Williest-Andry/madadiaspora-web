import { MoveRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  title: string;
  className?: string;
};

export default function CTAButton({ title, className }: CTAButtonProps) {
  return (
    <Button
      className={cn(
        "bg-secondary text-secondary-foreground hover:bg-secondary flex h-14.5 w-93 rounded-[50px] p-1 pl-6 text-[18px] leading-5 font-semibold"
      )}
    >
      <p>{title}</p>

      <div className="bg-foreground flex h-full w-19 items-center justify-center rounded-[60px]">
        <MoveRight />
      </div>
    </Button>
  );
}
