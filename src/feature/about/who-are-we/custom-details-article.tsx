import { cn } from "@/lib/utils";
import Image from "next/image";

type CustomDetailsArticle = {
  span: string;
  primaryTitle: string;
  secondaryTitle: string;
  firstParagraph: string;
  secondParagraph?: string;
  textColor?: "primary" | "foreground";
  className?: string;
};

export default function CustomDetailsArticle({
  span,
  primaryTitle,
  secondaryTitle,
  firstParagraph,
  secondParagraph,
  textColor = "foreground",
  className,
}: CustomDetailsArticle) {
  const TEXT_COLOR = {
    primary: " text-popover ",
    foreground: " text-foreground ",
  };

  return (
    <article
      className={cn(
        "gap- flex flex-col items-center justify-center max-md:w-full max-md:px-6 md:max-xl:w-[70vw] xl:items-start",
        className
      )}
    >
      <figure className="mb-6.75 flex gap-2.25">
        <div className="relative h-5 w-5">
          <Image
            src={"/yellow-globe.png"}
            alt="little yellow globe image"
            fill
          />
        </div>
        <span
          className={cn(
            "text-[14px] leading-5 font-semibold",
            TEXT_COLOR[textColor]
          )}
        >
          {span}
        </span>
      </figure>

      <figure className="text-title-sm min-[110.063rem]:text-title-xl sm:text-title-md mb-10 flex flex-col leading-[110%] font-bold max-xl:text-center">
        <h2 className={cn("text-popover", TEXT_COLOR[textColor])}>
          {primaryTitle}
        </h2>
        <h2 className="text-secondary">{secondaryTitle}</h2>
      </figure>

      <div className="flex flex-col gap-10 xl:gap-20">
        <p
          className={cn(
            "text-popover 3xl:text-p-xl text-p-sm sm:text-p-md -mt-[17px] text-center leading-8 max-sm:w-full xl:text-justify",
            TEXT_COLOR[textColor]
          )}
        >
          {firstParagraph}
        </p>

        {secondParagraph && (
          <p
            className={cn(
              "text-popover 3xl:text-p-xl text-p-sm sm:text-p-md -mt-[17px] text-center leading-8 max-sm:w-full xl:text-justify",
              TEXT_COLOR[textColor]
            )}
          >
            {
              "Notre ambition est de faire de Madadiaspora un réseau de référence pour connecter les Malagasy à travers le monde."
            }
          </p>
        )}
      </div>
    </article>
  );
}
