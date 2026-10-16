import ToggleGroupDemo from "./shadcn-space/toggle-group/toggle-group-01";

type RubricCustomMainTitleProps = {
  title: string;
  description: string;
  leftLabel: string;
  leftLink: string;
  rightLabel: string;
  rightLink: string;
  defaultActive: string;
};

export default function RubricCustomMainTitle({
  title,
  description,
  leftLabel,
  leftLink,
  rightLabel,
  rightLink,
  defaultActive,
}: RubricCustomMainTitleProps) {
  return (
    <section className="bg-primary flex flex-col items-center justify-center gap-[53px] rounded-[54px] p-[30px]">
      <div className="text-foreground flex flex-col gap-[17px] text-center">
        <p className="text-title-xl font-[700]">{title}</p>
        <p className="text-p-xl font-[400] opacity-[0.6]">{description}</p>
      </div>

      <ToggleGroupDemo
        leftLabel={leftLabel}
        leftLink={leftLink}
        rightLabel={rightLabel}
        rightLink={rightLink}
        defaultActive={defaultActive}
      />
    </section>
  );
}
