"use client";

import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { LayoutGrid, List } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

type ToggleGroupDemoProps = {
  leftLabel: string;
  leftLink: string;
  rightLabel: string;
  rightLink: string;
  defaultActive?: string;
};

const ToggleGroupDemo = ({
  leftLabel,
  rightLabel,
  leftLink,
  rightLink,
  defaultActive = leftLabel,
}: ToggleGroupDemoProps) => {
  const [view, setView] = useState<string[]>([defaultActive]);

  return (
    <div className="flex w-full flex-col gap-1.5 sm:w-auto">
      <ToggleGroup
        value={view}
        onValueChange={(val) => {
          if (val && val.length > 0) setView(val);
        }}
        className="bg-foreground/20 max-xs:flex-col max-xs:h-[130px] max-xs:items-center max-xs:justify-center flex h-[60px] w-full justify-start gap-1 rounded-[48px] p-[4px] sm:w-auto"
      >
        {[
          { id: leftLabel, label: leftLabel, icon: LayoutGrid, href: leftLink },
          { id: rightLabel, label: rightLabel, icon: List, href: rightLink },
        ].map((item) => {
          const isActive = view.includes(item.id);
          return (
            <ToggleGroupItem
              key={item.id}
              value={item.id}
              className="hover:text-foreground text-muted-foreground hover:bg-muted/40 aria-pressed:text-primary-foreground! relative h-[51px] cursor-pointer rounded-[48px] border-0 px-[28px] py-[14px] text-sm font-medium transition-colors outline-none aria-pressed:bg-transparent!"
            >
              <Link
                className="relative z-10 flex items-center gap-2 rounded-[48px]"
                href={item.href}
              >
                {/* <item.icon className="size-4" /> */}
                <span className="text-p-sm lg:text-p-md font-light">
                  {item.label}
                </span>
              </Link>
              {isActive && (
                <motion.div
                  layoutId="active-view-pill"
                  className="bg-secondary absolute inset-0 z-0 rounded-[48px]"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </ToggleGroupItem>
          );
        })}
      </ToggleGroup>
    </div>
  );
};

export default ToggleGroupDemo;
