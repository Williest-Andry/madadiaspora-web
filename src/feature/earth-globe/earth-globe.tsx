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

type EarthGlobeProps = {
  className?: string;
  onReady?: () => void;
  backgroundColor?: "primary" | "footer-bg";
};

export default function EarthGlobe({
  className,
  onReady,
  backgroundColor = "primary",
}: EarthGlobeProps) {
  const GLOBE_PROPERTIES = {
    IMAGE: "/earth-night.webp",
    BACKGROUND_COLOR: backgroundColor == "primary" ? "#021D2C" : "#01131D",
    POINTS_COLOR: "#FBB03B",
    INITAL_POINT_OF_VIEW: {
      lat: -13.9626,
      lng: 33.7741,
    },
  };

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
    <section className="globe-small:h-[350px] relative h-[250px] w-full items-center justify-center overflow-hidden sm:h-[450px] xl:h-full">
      <section
        ref={globeRef}

        className={cn(
          "globe-extra:justify-start globe-huge:justify-end z-100 flex h-full w-full items-center max-xl:justify-center",
          className
        )}
      />

      {backgroundColor == "primary" ? (
        <div
          className={
            "via-primary/70 to-primary pointer-events-none absolute inset-x-0 bottom-0 z-100 h-40 bg-linear-to-b from-transparent max-sm:bottom-0"
          }
        />
      ) : (
        <div
          className={
            "via-footer-bg/70 to-footer-bg pointer-events-none absolute inset-x-0 bottom-0 z-100 h-40 bg-linear-to-b from-transparent"
          }
        />
      )}
    </section>
  );
}
