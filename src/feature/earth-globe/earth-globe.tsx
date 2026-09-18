"use client";

import { useEffect, useRef } from "react";
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
  IMAGE: "/earth-night.webp",
  BACKGROUND_COLOR: "#021D2C",
  POINTS_COLOR: "#FBB03B",
  INITAL_POINT_OF_VIEW: {
    lat: -13.9626,
    lng: 33.7741,
  },
};

type EarthGlobeProps = {
  className?: string;
  onReady?: () => void;
};

export default function EarthGlobe({ className, onReady }: EarthGlobeProps) {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!globeRef.current) return;

    const initialSize = getEarthGlobeSize(window.innerWidth);
    const initialOffset = getEarthGlobeOffset(window.innerWidth);

    const globe = new Globe(globeRef.current);

    globe
      .width(initialSize)
      .height(initialSize)
      .globeImageUrl(GLOBE_PROPERTIES.IMAGE)
      .globeOffset(initialOffset)
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
      })
      .onGlobeReady(() => onReady?.());

    globe.controls().enableZoom = false;
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5;

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const newSize = getEarthGlobeSize(window.innerWidth);
        const newOffset = getEarthGlobeOffset(window.innerWidth);
        globe.width(newSize).height(newSize).globeOffset(newOffset);
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      globe.renderer().dispose();
      globe._destructor();
      globeRef.current = null;
    };
  }, []);

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
