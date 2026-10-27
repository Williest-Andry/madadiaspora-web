import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type RubricCTAButtonProps = {
  title: string;
  className?: string;
  href?: string;
};

export default function RubricCTAButton({
  title,
  className,
  href = "#",
}: RubricCTAButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "hover:bg-primary text-p-sm bg-primary flex h-[48px] w-[136px] cursor-pointer items-center justify-center gap-[10px] rounded-[24px] px-[16px] py-[12px] leading-5 font-[500]",
        className
      )}
    >
      <p className="text-foreground">{title}</p>

      <MoveRight color="var(--foreground)" />
    </Link>
  );
}
