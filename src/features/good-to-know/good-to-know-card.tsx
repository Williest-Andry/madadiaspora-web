import RubricCTAButton from "@/components/rubric-cta-button";
import { GoodToKnow } from "@/interfaces/good-to-know/good-to-know-type";
import { formatDateFr } from "@/lib/date-format";
import { getImageUrl } from "@/lib/get-image-url";
import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";

type GoodToKnowCardProps = {
  data: GoodToKnow;
};

export default function GoodToKnowCard({ data }: GoodToKnowCardProps) {
  const { id, cover, address, createdAt, info } = data;

  return (
    <article className="flex flex-col gap-[22.4px] rounded-[38px] border-[1.8px] p-[11px]">
      <div className="relative h-[412px] w-full rounded-[29px]">
        <Image
          src={getImageUrl(cover.url)}
          alt={cover.name}
          fill
          className="rounded-[29px] object-cover text-center"
        />

        <div className="bg-foreground absolute top-[24px] left-[24px] flex h-[34px] items-center gap-[8px] rounded-[17px] p-[10px]">
          <MapPin color="var(--secondary)" />
          <p className="text-p-xs font-sans font-semibold">{address.country}</p>
        </div>

        <div className="bg-foreground xs:top-[24px] max-xs:left-[24px] xs:right-[24px] absolute top-[74px] flex h-[34px] items-center gap-[8px] rounded-[17px] p-[10px]">
          <CalendarDays color="var(--secondary)" />
          <p className="text-p-xs font-sans font-semibold">
            {formatDateFr(createdAt.toString())}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-[37px]">
        <div className="flex flex-col gap-[10px]">
          <p className="text-p-xl text-secondary font-[500] uppercase">
            {info.title}
          </p>
          <p className="text-p-md font-[300] font-light">{info.summary}</p>
        </div>

        <RubricCTAButton title="Voir plus" href={`/good-to-know/${id}`} />
      </div>
    </article>
  );
}
