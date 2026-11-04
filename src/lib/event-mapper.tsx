import { EventData } from "@/interfaces/event/event-types";
import { EventInput } from "@fullcalendar/react";

export function mapEventToFullCalendarFormat(event: EventData): EventInput {
  return {
    id: event.id,
    title: event.fr.title,
    start: event.startDate,
    end: event.endDate,
    extendedProps: {
      image: event.cover,
    },
  };
}
