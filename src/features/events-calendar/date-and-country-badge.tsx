import { formatDateFr } from "@/lib/date-format";
import { CalendarDays, MapPin } from "lucide-react";

type DateAndCountryBadgeProps = {
  date: Date;
  country: string;
};

export default function DateAndCountryBadge({
  date,
  country,
}: DateAndCountryBadgeProps) {
  return (
    <div className="flex flex-col gap-[10.66px] sm:flex-row">
      <div className="flex items-center gap-[8px]">
        <CalendarDays color="var(--secondary)" />
        <p className="text-p-xs font-sans font-semibold">
          {formatDateFr(date.toString())}
        </p>
      </div>
      <div className="flex items-center gap-[8px]">
        <MapPin color="var(--secondary)" />
        <p className="text-p-xs font-sans font-semibold">{country}</p>
      </div>
    </div>
  );
}
