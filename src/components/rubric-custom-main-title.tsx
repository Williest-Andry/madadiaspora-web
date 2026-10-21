"use client";

import { useState } from "react";
import ToggleGroupDemo from "./shadcn-space/toggle-group/toggle-group-01";
type RubricCustomMainTitleProps = {
  title: string;
  secondaryTitle?: string;
  description: string;
  leftLabel: string;
  leftLink: string;
  rightLabel: string;
  rightLink: string;
  defaultActive: string;
};

export default function RubricCustomMainTitle({
  title,
  secondaryTitle,
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
        <p className="text-title-sm xs:text-title-md lg:text-title-xl font-[700]">
          {title}{" "}
          {secondaryTitle && (
            <span className="text-secondary">{secondaryTitle}</span>
          )}
        </p>
        <p className="text-p-sm xs:text-p-md lg:text-p-xl font-[400] opacity-[0.6]">
          {description}
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
    </section>
  );
}
