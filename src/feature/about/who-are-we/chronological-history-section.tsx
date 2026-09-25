import { Separator } from "@/components/ui/separator";
import { HISTORY_DETAILS_DATA } from "@/constant/about-info/who-are-we/data";
import HistoryDetails from "./history-details";

export default function ChronologicalHistorySection() {
  return (
    <div className="flex w-full gap-2 min-xl:gap-[22px]">
      <div className="flex w-[4px] shrink-0 flex-col">
        <Separator
          orientation="vertical"
          className="bg-secondary shrink-0 data-[orientation=vertical]:h-[245px] data-[orientation=vertical]:w-[4px] max-[25.125rem]:data-[orientation=vertical]:h-[300px] xl:max-[91.188rem]:data-[orientation=vertical]:h-[300px]"
        />
        <Separator
          orientation="vertical"
          className="flex-1 bg-[#D9D9D9] data-[orientation=vertical]:h-auto data-[orientation=vertical]:w-[4px]"
        />
      </div>

      <div className="flex flex-col gap-[120px]">
        {HISTORY_DETAILS_DATA.map((detail, index) => (
          <HistoryDetails
            key={index}
            span={detail.date}
            title={detail.title}
            firstParagraph={detail.firstParagraph}
            secondParagraph={detail?.secondParagraph}
          />
        ))}
      </div>
    </div>
  );
}
