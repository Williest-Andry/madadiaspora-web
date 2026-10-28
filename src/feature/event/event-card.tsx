import { EventData } from "@/interfaces/event/event-types";
import { formatDateFr } from "@/lib/date-format";
import { getImageOrFallback } from "@/lib/get-image-url";
import { formatRelativeDate } from "@/lib/get-relative-date";
import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
  event: EventData;
};

export default function EventCard({ event }: EventCardProps) {
  const eventImage = getImageOrFallback(event.cover);

  return (
    <Link
      href={"#"}
      className="relative flex flex-col gap-0 rounded-[32px] border-[1px] p-[12px] max-sm:h-[600px]"
    >
      <div className="relative h-[593px] w-full rounded-t-[29px] pt-[12px]">
        <Image
          src={eventImage.image}
          alt={eventImage.alt}
          fill
          className="rounded-t-[29px] object-cover"
        />

        <div className="bg-foreground absolute top-[24px] left-[24px] flex h-[34px] items-center gap-[8px] rounded-[17px] p-[10px]">
          <MapPin color="var(--secondary)" />
          <p className="text-p-xs font-sans font-semibold">
            {event.address.country}
          </p>
        </div>

        <div className="bg-foreground xs:top-[24px] max-xs:left-[24px] xs:right-[24px] absolute top-[74px] flex h-[34px] items-center gap-[8px] rounded-[17px] p-[10px]">
          <CalendarDays color="var(--secondary)" />
          <p className="text-p-xs font-sans font-semibold">
            {formatDateFr(event.startDate.toString())}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-[10px] rounded-b-[32px] px-[16px] pt-[19px] pb-[17px]">
        <p className="text-p-sm text-secondary font-[700] uppercase">
          {formatRelativeDate(event.startDate)}
        </p>
        <p className="text-title-sm text-popover line-clamp-2 w-[75%] font-[600] font-semibold">
          {event.fr.summary}
        </p>
      </div>
    </Link>
  );
}
