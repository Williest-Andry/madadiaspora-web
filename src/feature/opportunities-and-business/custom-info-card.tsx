import { cn } from "@/lib/utils";

type CustomInfoCardProps = {
  title: string;
  description: string;
  className?: string;
};

export default function CustomInfoCard({
  title,
  description,
  className,
}: CustomInfoCardProps) {
  return (
    <article
      className={cn(
        "text-foreground flex flex-col gap-[8px] border-[1px] border-[#ECFAFE1A]/10 bg-[#ECFAFE1A] p-[20px]",
        className
      )}
    >
      <p className="text-p-md lg:text-title-sm font-[700]">{title}</p>
      <p className="text-p-sm lg:text-p-md font-[400]">{description}</p>
    </article>
  );
}
