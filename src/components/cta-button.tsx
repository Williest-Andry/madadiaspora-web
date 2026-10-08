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
        "bg-secondary text-secondary-foreground hover:bg-secondary text-p-md flex h-14.5 w-93 cursor-pointer rounded-[50px] p-1 pl-6 leading-5 font-semibold",
        className
      )}
    >
      <p>{title}</p>

      <div className="bg-foreground text-primary flex h-full w-19 items-center justify-center rounded-[60px]">
        <MoveRight />
      </div>
    </Button>
  );
}
