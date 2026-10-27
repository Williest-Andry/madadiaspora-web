import ToggleGroupDemo from "@/components/shadcn-space/toggle-group/toggle-group-01";
import OpportunityDiscoveryCard from "./opportunity-discovery-card";
import CustomInfoCard from "./custom-info-card";

type CustomMainTitleProps = {
  leftLabel: string;
  leftLink: string;
  rightLabel: string;
  rightLink: string;
  defaultActive: string;
  firstTitle: string;
  firstDescription: string;
  secondTitle: string;
  secondDescription: string;
};

export default function CustomMainTitle({
  leftLabel,
  leftLink,
  rightLabel,
  rightLink,
  defaultActive,
  firstTitle,
  firstDescription,
  secondTitle,
  secondDescription,
}: CustomMainTitleProps) {
  return (
    <section className="bg-primary flex flex-col gap-[53px] overflow-x-auto rounded-[54px] p-[30px] sm:max-xl:pl-4">
      <div className="flex flex-col items-center justify-center gap-[53px]">
        <div className="text-foreground flex flex-col gap-[17px] text-center">
          <p className="text-title-sm xs:text-title-md lg:text-title-xl font-[700]">
            {"Opportunités & "}
            <span className="text-secondary">{"Business"}</span>
          </p>
          <p className="text-p-sm xs:text-p-md lg:text-p-xl font-[400] opacity-[0.6]">
            {
              "Des opportunités pour entreprendre, investir, travailler et collaborer avec Madagascar et sa diaspora."
            }
          </p>
        </div>

        <div>
          <ToggleGroupDemo
            leftLabel={leftLabel}
            leftLink={leftLink}
            rightLabel={rightLabel}
            rightLink={rightLink}
            defaultActive={defaultActive}
          />
        </div>
      </div>

      <div className="xl:max-3xl:items-center 3xl:flex-row 3xl:gap-[8px] flex flex-col gap-[18px] max-lg:items-center lg:flex-row xl:flex-col xl:gap-[28px]">
        <OpportunityDiscoveryCard />

        <div className="flex flex-1 flex-col gap-[18px] sm:flex-row xl:flex-col 2xl:flex-row 2xl:gap-[8px]">
          <CustomInfoCard
            title={firstTitle}
            description={firstDescription}
            className="rounded-l-[24px] rounded-r-[4px] max-2xl:rounded-[24px]"
          />
          <CustomInfoCard
            title={secondTitle}
            description={secondDescription}
            className="rounded-l-[4px] rounded-r-[24px] max-2xl:rounded-[24px]"
          />
        </div>
      </div>
    </section>
  );
}
