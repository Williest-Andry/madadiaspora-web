"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LocationData } from "@/constant/earth-globe/type";
import { MapPin } from "lucide-react";

type GlobeMarkerProps = {
  data: LocationData;
};

export function GlobeMarker({ data }: GlobeMarkerProps) {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <div>
            <MapPin color="#fbb03c" size={50} />
          </div>
        }

        delay={0}
      />
      <TooltipContent side="top" className={"bg-secondary text-primary"}>
        {data.name}
      </TooltipContent>
    </Tooltip>
  );
}
