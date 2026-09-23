"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import { GlobeLoader } from "@/feature/earth-globe/globe-loader";

const Globe = dynamic(
  () => import("@/feature/earth-globe/earth-globe").then((m) => m.default),
  {
    ssr: false,
  }
);

type GlobeWithLoaderProps = {
  className?: string;
};

export function GlobeWithLoader({ className }: GlobeWithLoaderProps) {
  const [isGlobeReady, setIsGlobeReady] = useState(false);

  return (
    <div className="relative h-full w-full">
      <Globe className={className} onReady={() => setIsGlobeReady(true)} />

      <div
        aria-hidden={isGlobeReady}
        className={cn(
          "pointer-events-none absolute inset-0 transition-opacity duration-500",
          isGlobeReady ? "opacity-0" : "opacity-100"
        )}
      >
        <GlobeLoader />
      </div>
    </div>
  );
}
