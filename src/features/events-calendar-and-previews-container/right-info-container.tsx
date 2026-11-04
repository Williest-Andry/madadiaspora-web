"use client";

import { usePathname } from "next/navigation";
import EventCalendar from "./event-calendar";
import PreviewsContainer from "./previews-container";

export default function EventsCalendarAndPreviewsContainer() {
  const pathName = usePathname();

  return (
    <div className="flex flex-col justify-center gap-[30px] max-xl:w-[80%] max-xl:items-center">
      {pathName !== "/events-calendar" && <EventCalendar />}

      <PreviewsContainer />
    </div>
  );
}
