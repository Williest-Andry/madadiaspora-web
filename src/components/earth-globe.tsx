"use client";

import { useEffect, useRef, useState } from "react";
import Globe from "globe.gl";
import {
  getEarthGlobeOffset,
  getEarthGlobeSize,
} from "@/lib/get-earth-globe-breakpoints";
import { locations } from "@/constant/earth-globe/data";
import { LocationData } from "@/constant/earth-globe/type";
import { cn } from "@/lib/utils";

const GLOBE_PROPERTIES = {
  IMAGE: "//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg",
  BACKGROUND_COLOR: "#021D2C",
  POINTS_COLOR: "#FBB03B",
  INITAL_POINT_OF_VIEW: {
    lat: -13.9626,
    lng: 33.7741,
  },
};

type EarthGlobeProps = {
  className?: string;
};

export default function EarthGlobe({ className }: EarthGlobeProps) {
  if (typeof window === "undefined") return;

  const globeRef = useRef<HTMLDivElement>(null);

  const [hoveredLocation, setHoveredLocation] = useState<LocationData | null>(
    null
  );

  const [globeSize, setGlobeSize] = useState(
    getEarthGlobeSize(window.innerWidth)
  );
  const [globeOffset, setGlobeOffset] = useState(
    getEarthGlobeOffset(window.innerWidth)
  );

  useEffect(() => {
    if (!globeRef.current) return;
    if (typeof window === "undefined") return;

    const handleGlobeSize = () => {
      location.reload();
      // router.refresh();
      setGlobeSize(getEarthGlobeSize(window.innerWidth));
      setGlobeOffset(getEarthGlobeOffset(window.innerWidth));
    };

    window.addEventListener("resize", handleGlobeSize);

    const globe = new Globe(globeRef.current);

    globe
      .width(globeSize)
      .height(globeSize)
      .globeImageUrl(GLOBE_PROPERTIES.IMAGE)
      .globeOffset(globeOffset)
      .backgroundColor(GLOBE_PROPERTIES.BACKGROUND_COLOR)
      .showAtmosphere(false)
      .pointsData(locations)
      .pointColor(() => GLOBE_PROPERTIES.POINTS_COLOR)
      .pointRadius(0.8)
      .pointAltitude(0.05)
      .pointOfView(GLOBE_PROPERTIES.INITAL_POINT_OF_VIEW)
      .onPointHover((point) => {
        setHoveredLocation(point as LocationData);
      });

    globe.controls().enableZoom = false;

    return () => {
      globe.renderer().dispose();
      globeRef.current = null;
    };
  }, [globeSize]);

  return (
    <section className="relative h-full w-full overflow-hidden xl:h-full">
      <section
        ref={globeRef}
        className={cn(
          "absolute top-1/2 left-1/2 m-auto h-full -translate-x-1/2 -translate-y-1/2 xl:top-125 xl:left-220 2xl:left-130 2xl:w-full min-[112.5rem]:left-180 min-[131.25rem]:top-160 min-[131.25rem]:left-250 min-[150rem]:top-190 min-[150rem]:left-350 min-[187.5rem]:top-100 min-[187.5rem]:left-900",
          className
        )}
      />
      {hoveredLocation && (
        <div className="bg-background/95 h pointer-events-none absolute top-60 left-140 h-[300px] w-[300px] rounded-xl border p-4 shadow-lg">
          <p className="font-semibold">{hoveredLocation.name} ... mock data</p>
        </div>
      )}

      <div className="via-background/70 to-background pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent" />
    </section>
  );
}
