import { cn } from "@/lib/utils";
import CTAButton from "./cta-button";

type MobileCTAButtonProps = {
  className?: string;
};

export default function MobileCTAButton({ className }: MobileCTAButtonProps) {
  return (
    <CTAButton
      title="Voir plus"
      className={cn(
        "text-foreground bg-popover hover:bg-popover max-sm:text-p-sm h-14.5 w-47.25 justify-between p-1 pl-5 max-sm:w-35",
        className
      )}
    />
  );
}
