import { useEvents } from "@/hooks/event/use-event";
import UpComingEventCard from "./upcoming-event-card";
import Link from "next/link";
import GenericErrorSection from "@/components/generic-error-section";
import UpComingEventLoader from "./upcoming-events-loader";

const LIMIT = 3;

export default function UpComingEventsList() {
  const { events, isError, isFetching, refetch, isLoading } = useEvents({
    limit: LIMIT,
  });

  const upComingEvents = events.filter(
    (event) => new Date(event.startDate) >= new Date()
  );

  return (
    <>
      {isError && (
        <GenericErrorSection
          isFetching={isFetching}
          message="Impossible de charger les évènements à venir"
          refetch={refetch}
          backgroundColor="foreground"
        />
      )}

      {isLoading && <UpComingEventLoader />}

      {upComingEvents.length > 0 && (
        <div className="mb-10 flex flex-col gap-8">
          <h2 className="text-title-sm px-4 font-[600]">
            {"Évènements à venir"}
          </h2>

          {upComingEvents.map((event) => (
            <UpComingEventCard data={event} key={event.id} />
          ))}

          <div className="flex justify-center">
            <Link
              href={"/events"}
              className="bg-secondary max-sm:text-p-xs rounded-2xl p-4 font-light"
            >
              {"Voir tout"}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
