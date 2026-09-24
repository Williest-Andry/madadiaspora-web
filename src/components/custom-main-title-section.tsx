import { cn } from "@/lib/utils";

type CustomMainTitleSectionProps = {
  primaryTitle: string;
  secondaryTitle: string;
  description: string;
  className?: string;
};

export default function CustomMainTitleSection({
  primaryTitle,
  secondaryTitle,
  description,
  className,
}: CustomMainTitleSectionProps) {
  return (
    <article
      className={cn(
        "mt-[77px] mb-[110px] flex w-full flex-col items-center justify-center gap-[17px]",
        className
      )}
    >
      <h1 className="max-xs:w-[70%] text-title-sm sm:text-title-md lg:text-title-xl text-center leading-[110%] font-bold tracking-normal">
        {primaryTitle} <span className="text-secondary">{secondaryTitle}</span>
      </h1>
      <p className="text-muted-foreground text-p-sm sm:text-p-md lg:text-p-xl w-[57%] text-center leading-[32px] tracking-normal">
        {description}
      </p>
    </article>
  );
}
