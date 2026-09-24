import { cn } from "@/lib/utils";

type HistoryDetailsProps = {
  span: string;
  title: string;
  firstParagraph: string;
  secondParagraph?: string;
};

export default function HistoryDetails({
  span,
  title,
  firstParagraph,
  secondParagraph,
}: HistoryDetailsProps) {
  return (
    <article className="flex flex-col items-center gap-[17px] max-md:w-[90vw] md:max-xl:w-[70vw] xl:items-start">
      <figure className="flex gap-2.25">
        <span
          className={cn(
            "text-muted-foreground text-[14px] leading-5 font-semibold uppercase"
          )}
        >
          {span}
        </span>
      </figure>

      <figure className="text-title-sm sm:text-title-md flex flex-col leading-[110%] font-bold max-xl:text-center">
        <h2 className="text-secondary">{title}</h2>
      </figure>

      <div className="flex flex-col gap-10 xl:gap-[47px]">
        <p
          className={cn(
            "text-popover text-p-sm sm:text-p-md 3xl:text-p-xl text-center leading-8 max-sm:w-full xl:text-justify"
          )}
        >
          {firstParagraph}
        </p>

        {secondParagraph && (
          <p
            className={cn(
              "text-popover text-p-sm sm:text-p-md 3xl:text-p-xl text-center leading-8 max-sm:w-full xl:text-justify"
            )}
          >
            {
              "Notre ambition est de faire de MadaDiaspora un réseau de référence pour connecter les Malagasy à travers le monde."
            }
          </p>
        )}
      </div>
    </article>
  );
}
