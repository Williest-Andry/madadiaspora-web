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
import { createRoot } from "react-dom/client";
import { GlobeMarker } from "@/feature/earth-globe/globe-marker";

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
      .htmlElementsData(locations)
      .htmlLat("lat")
      .htmlLng("lng")
      .htmlElement((data) => {
        const element = document.createElement("div");
        element.style.pointerEvents = "auto";
        createRoot(element).render(<GlobeMarker data={data as LocationData} />);

        return element;
      });

    globe.controls().enableZoom = false;
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5;

    return () => {
      globe.renderer().dispose();
      globe._destructor();
      globeRef.current = null;
    };
  }, [globeSize]);

  return (
    <section className="relative h-full w-full items-center justify-center overflow-hidden xl:h-full">
      <section
        ref={globeRef}
        className={cn(
          "globe-huge:top-190 globe-huge:left-350 max-globe-huge:absolute max-globe-huge:top-1/2 max-globe-huge:left-1/2 max-globe-huge:-translate-x-1/2 max-globe-huge:-translate-y-1/2 globe-huge:w-[50%] globe-huge:items-center globe-huge:justify-center globe-huge:mt-100 m-auto flex h-full xl:top-125 xl:left-220 2xl:left-130 2xl:w-full min-[112.5rem]:left-180 min-[131.25rem]:top-160 min-[131.25rem]:left-250",
          className
        )}
      />

      <div className="via-background/70 to-background pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent" />
    </section>
  );
}
