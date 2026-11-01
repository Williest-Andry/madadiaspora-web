"use client";

import { HISTORY_DETAILS_DATA } from "@/constants/about-info/who-are-we/data";
import HistoryDetails from "./history-details";
import { motion, useScroll } from "motion/react";
import { useRef } from "react";

export default function ChronologicalHistorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  return (
    <div className="flex w-full gap-2 min-xl:gap-[22px]">
      <div className="flex w-[4px] shrink-0 flex-col">
        <motion.div
          ref={ref}
          className="bg-secondary h-full w-1.5"
          style={{ scaleY: scrollYProgress, originY: 0 }}
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
