import { getImageUrl } from "@/lib/get-image-url";
import Image from "next/image";
import { formatDateFr } from "@/lib/date-format";
import { PreviewData } from "./previews-container";
import PreviewSkeleton from "./preview-skeleton";
import GenericErrorSection from "@/components/generic-error-section";
import Link from "next/link";

type PreviewInfoCardProps = {
  data: PreviewData;
};

export default function PreviewInfoCard({ data }: PreviewInfoCardProps) {
  return (
    <article className="flex w-full flex-col gap-[15px] rounded-[8px] border-2 p-4 max-xl:items-center max-md:items-start lg:max-xl:w-[70%] xl:px-10 xl:py-6">
      <p className="text-p-xl text-layout-black font-[500]">{data.label}</p>

      <div className="flex w-full flex-col gap-[26px] lg:gap-[16px]">
        {data.isLoading &&
          new Array(3)
            .fill(0)
            .map((p, index) => <PreviewSkeleton key={index} />)}

        {data.isError && (
          <GenericErrorSection
            isFetching={data.isRefetching}
            message="Impossible de charger les données"
            refetch={data.refetch}
            backgroundColor="foreground"
            className="mt-0!"
          />
        )}

        {data.data.slice(0, 3).map((d) => (
          <Link
            href={`${data.path}/${d.id}`}
            key={d.id}
            className="hover:bg-muted-foreground/10 flex items-center gap-[16px] rounded-[18px] max-xl:justify-center"
          >
            <div className="relative h-[50px] w-[50px] rounded-full lg:h-[48px] lg:w-[55px] xl:h-[52px] xl:w-[52px]">
              <Image
                src={getImageUrl(d.image.url)}
                alt={d.image.name}
                fill
                className="rounded-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col gap-[4px]">
              <p className="text-rubric-text-xs text-layout-muted font-[300] font-light">
                {formatDateFr(d.date.toString())}
              </p>
              <p className="text-rubric-text-sm text-popover line-clamp-2 font-[500] wrap-anywhere">
                {d.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
}
