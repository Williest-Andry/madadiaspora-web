import { cn } from "@/lib/utils";
import Image from "next/image";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";

type CustomTitleSectionProps = {
  span?: string;
  primaryTitle: string;
  secondaryTitle: string;
  tertiaryTitle?: string;
  paragraph: string;
  textColor?: "primary" | "foreground";
  titleBlock?: boolean;
};

export default function CustomTitleSection({
  span,
  primaryTitle,
  secondaryTitle,
  tertiaryTitle,
  paragraph,
  textColor = "foreground",
  titleBlock = false,
}: CustomTitleSectionProps) {
  const TEXT_COLOR = {
    primary: " text-popover ",
    foreground: " text-foreground ",
  };

  return (
    <article className="3xl:w-[1656px] 3xl:gap-34.75 flex flex-col items-center justify-between gap-10 max-2xl:w-[90%] xl:flex-row xl:gap-10">
      <article className="flex w-full flex-col items-center sm:w-126.25 xl:items-start 2xl:w-[819.5px]">
        {span && (
          <figure className="mb-6.75 flex gap-2.25">
            <div className="relative h-5 w-5">
              <Image
                src={"/yellow-globe.png"}
                alt="little yellow globe image"
                fill
              />
            </div>
            <DiaTextReveal
              text={span}
              className={cn(
                "text-[14px] leading-5 font-semibold uppercase",
                TEXT_COLOR[textColor]
              )}
              colors={textColor == "foreground" ? ["#ffffff"] : ["#043d4d"]}
              textColor={
                textColor == "foreground"
                  ? "var(--foreground)"
                  : "var(--popover)"
              }
              startOnView
            />
          </figure>
        )}

        <figure className="text-title-sm sm:text-title-md 3xl:text-title-xl mb-4.25 w-full text-center leading-[110%] font-bold xl:w-186.25 xl:text-left">
          <DiaTextReveal
            text={primaryTitle}
            className={cn(
              TEXT_COLOR[textColor],
              titleBlock ? "block" : "inline"
            )}
            colors={textColor == "foreground" ? ["#ffffff"] : ["#043d4d"]}
            textColor={
              textColor == "foreground" ? "var(--foreground)" : "var(--popover)"
            }
            startOnView
          />{" "}
          <DiaTextReveal
            text={secondaryTitle}
            className={cn(
              TEXT_COLOR[textColor],
              "pb-[0.2em]",
              titleBlock ? "block" : "inline"
            )}
            colors={["#fbb03c"]}
            textColor="var(--secondary)"
            startOnView
          />{" "}
          {tertiaryTitle && (
            <DiaTextReveal
              text={tertiaryTitle as string}
              className={cn(
                TEXT_COLOR[textColor],
                titleBlock ? "block" : "inline"
              )}
              colors={textColor == "foreground" ? ["#ffffff"] : ["#043d4d"]}
              textColor={
                textColor == "foreground"
                  ? "var(--foreground)"
                  : "var(--popover)"
              }
              startOnView
            />
          )}
        </figure>
      </article>

      <DiaTextReveal
        text={paragraph}
        className={cn(
          "text-p-sm sm:text-p-md md:text-p-md 3xl:text-p-xl 3xl:w-203 w-[90%] text-center leading-8 xl:text-start 2xl:w-120",
          TEXT_COLOR[textColor]
        )}
        colors={textColor == "foreground" ? ["#ffffff"] : ["#043d4d"]}
        textColor={
          textColor == "foreground" ? "var(--foreground)" : "var(--popover)"
        }
        startOnView
      />
    </article>
  );
}
