import { cn } from "@/lib/utils";

type GlobeLoaderProps = {
  backgroundColor?: "primary" | "footer-bg";
};

export function GlobeLoader({ backgroundColor = "primary" }: GlobeLoaderProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
      <div
        className={cn(
          "flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl p-5",
          backgroundColor == "primary" ? "bg-primary" : "bg-footer-bg"
        )}
      >
        <div className="globe-small:h-[150px] globe-small:w-[150px] h-[50px] w-[50px] rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(251,176,59,0.55),rgba(2,29,44,0.05)_70%)] motion-safe:animate-[breathe_2.6s_ease-in-out_infinite]" />

        <div
          className={cn(
            "flex w-[280px] flex-col gap-[14px] rounded-xl p-5",
            backgroundColor == "primary" ? "bg-primary" : "bg-footer-bg"
          )}
        >
          <div className="flex items-center gap-[10px]">
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#FBB03B] text-[10px] font-medium text-[#021D2C]">
              {"✓"}
            </div>
            <span className="globe-small:text-xs text-[10px] text-white/85">
              {"Alignement des satellites"}
            </span>
          </div>

          <div className="flex items-center gap-[10px]">
            <div className="h-4 w-4 rounded-full bg-[#FBB03B] motion-safe:animate-[pulse_1.4s_ease-in-out_infinite]" />
            <span className="globe-small:text-xs text-[10px] text-white/85">
              {"Chargement des données"}
            </span>
          </div>

          <div className="flex items-center gap-[10px]">
            <div className="h-4 w-4 rounded-full border border-white/30" />
            <span className="globe-small:text-xs text-[10px] text-white/40">
              {"Préparation de votre voyage en 3D..."}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
