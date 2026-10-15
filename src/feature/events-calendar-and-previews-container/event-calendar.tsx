"use client";

import { Calendar } from "@/components/ui/calendar";
import { fr } from "date-fns/locale";
import { format } from "date-fns";
import { useState } from "react";

const eventDates = [new Date(2026, 9, 15), new Date(2026, 9, 16)];

export default function EventCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="bg-foreground text-layout-black z-9 w-full rounded-lg border-[0.2px]"
      modifiers={{ hasEvent: eventDates }}
      modifiersClassNames={{
        hasEvent:
          "relative after:z-20 after:absolute after:top-1 after:right-1 after:size-1.5 after:rounded-full after:bg-red-500",
      }}
      weekStartsOn={1}
      classNames={{
        button_next:
          "inline-flex items-center justify-center size-(--cell-size) p-0 cursor-pointer hover:bg-transparent text-center",
        button_previous:
          "inline-flex items-center justify-center size-(--cell-size) p-0 cursor-pointer hover:bg-transparent",
        caption_label: "text-p-xl text-center",
        weekday:
          "text-p-xs text-layout-black text-center space-10 flex-1 rounded-(--cell-radius) font-bold uppercase select-none",
        day_button:
          "hover:bg-popover hover:text-layout-black data-[selected-single=true]:bg-popover data-[selected-single=true]:text-layout-black",
        today: "bg-transparent text-layout-black",
      }}
      locale={fr}
      formatters={{
        formatWeekdayName: (day) =>
          format(day, "EEEE", { locale: fr }).slice(0, 3),
      }}
    />
  );
}
