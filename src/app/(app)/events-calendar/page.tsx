"use client";

import RubricCustomMainTitle from "@/components/rubric-custom-main-title";
import { EventCalendar } from "@/components/event-calendar";
import { useEvents } from "@/hooks/event/use-event";
import { useMemo, useState } from "react";
import { mapEventToFullCalendarFormat } from "@/lib/mapper/event-mapper";
import DayCellCard from "@/features/events-calendar/day-cell-card";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";
import UpComingEventsList from "@/features/events-calendar/upcoming-events-list";

export default function EventsCalendarPage() {
  const now = new Date();
  const [month, setMonth] = useState<number>(now.getMonth() + 1);
  const [year, setYear] = useState<number>(now.getFullYear());

  const { events, isFetching } = useEvents({
    month: month,
    year: year,
  });

  const router = useRouter();

  const calendarEvents = useMemo(
    () => events.map(mapEventToFullCalendarFormat),
    [events]
  );

  return (
    <div className="flex flex-col gap-10">
      <RubricCustomMainTitle
        title="Événements"
        description="Les rendez-vous qui réunissent Madagascar et sa diaspora."
        leftLabel="Calendrier"
        leftLink="/events-calendar"
        rightLabel="Événements"
        rightLink="/events"
        defaultActive="Calendrier"
      />

      <h2 className="text-title-sm px-4 font-[600]">
        {"Calendrier des évènements"}
      </h2>

      <div className="relative">
        <EventCalendar
          events={calendarEvents}
          datesSet={(info) => {
            setMonth(info.view.currentStart.getMonth() + 1);
            setYear(info.view.currentStart.getFullYear());
          }}
          locale={"fr"}
          availableViews={["dayGridMonth"]}
          tableBodyClass="bg-foreground"

          // month view
          buttonClass="bg-foreground text-primary"
          dayHeaderClass="bg-foreground text-primary capitalize border-1"
          dayCellClass="bg-foreground text-primary border-1"
          rowEventClass={
            "bg-transparent hover:bg-transparent  rounded-[4px] cursor-pointer"
          }

          rowEventAfterClass={"hidden"}
          rowEventBeforeClass={"hidden"}
          showNonCurrentDates={false}
          fixedWeekCount={false}
          dayMaxEvents={true}
          eventClick={(info) => router.push(`/events/${info.event.id}`)}
          firstDay={1}
          eventContent={(arg) => (
            <DayCellCard
              image={arg.event.extendedProps.image}
              title={arg.event.title}
            />
          )}
          moreLinkText={(count) => `+${count} autre(s)`}
          moreLinkClass={"font-bold hover:bg-primary hover:text-foreground"}
          moreLinkHint={() => "Afficher plus"}
        />

        {isFetching && (
          <div className="bg-background/60 absolute inset-0 z-10 flex items-center justify-center rounded-lg">
            <Spinner className="flex size-20" color="var(--secondary)" />
          </div>
        )}
      </div>

      <UpComingEventsList />
    </div>
  );
}
