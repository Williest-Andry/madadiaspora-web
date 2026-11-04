import { EventData } from "@/interfaces/event/event-types";
import { getImageOrFallback } from "@/lib/get-image-url";
import Image from "next/image";
import DateAndCountryBadge from "./date-and-country-badge";
import Link from "next/link";

type UpComingEventCard = {
  data: EventData;
};

export default function UpComingEventCard({ data }: UpComingEventCard) {
  const { cover, startDate, address, fr, id } = data;

  const eventImage = getImageOrFallback(cover);

  return (
    <Link
      href={`/events/${id}`}
      className="flex gap-[12.54px] rounded-[30.31px] border-[1.05px] border-[#043E4E1A]/10 bg-[#F5FBFF] p-[8.36px] hover:bg-[#cce8fb]"
    >
      <div className="relative h-[109px] w-[109px] rounded-[21.95px] sm:h-[209px] sm:w-[209px]">
        <Image
          src={eventImage.image}
          alt={eventImage.alt}
          fill
          className="rounded-[21.95px] object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-[8.36px]">
        <DateAndCountryBadge date={startDate} country={address.country} />

        <h3 className="text-p-md sm:text-title-md text-popover font-[600] max-sm:line-clamp-2">
          {fr.title}
        </h3>

        <p className="text-p-sm sm:text-p-md font-[400] text-[#9CA3AF] max-sm:line-clamp-3">
          {fr.summary}
        </p>
      </div>
    </Link>
  );
}
