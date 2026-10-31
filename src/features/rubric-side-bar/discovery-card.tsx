import { Button } from "@/components/ui/button";

type DiscoveryCardProps = {
  title: string;
  description: string;
};

export default function DiscoveryCard({
  title,
  description,
}: DiscoveryCardProps) {
  return (
    <article className="flex flex-col gap-[8px] rounded-[24px] bg-[#DFECEE66] px-[24px] py-[12px]">
      <p className="text-rubric-text-md text-layout-black font-[500]">
        {title}
      </p>

      <p className="text-rubric-text-sm text-layout-muted leading-[150%] font-[400]">
        {description}
      </p>

      <Button
        className={
          "bg-popover text-rubric-text-sm text-foreground cursor-pointer rounded-[24px] px-[8px] py-[4px] font-[400]"
        }
      >
        {"Découvrir la session"}
      </Button>
    </article>
  );
}
