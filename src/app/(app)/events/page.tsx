import { DataPagination } from "@/components/data-pagination";
import RubricCustomMainTitle from "@/components/rubric-custom-main-title";
import EventCard from "@/feature/event/event-card";
import EventCardLoader from "@/feature/event/event-card-loader";
import { Meta } from "@/interfaces/global";

const MOCK_EVENT = [
  {
    cover: {
      url: "/mock-miss.png",
      name: "mock miss image",
    },
    address: {
      country: "Madagascar",
    },
    startDate: "2026-12-19T00:00:00Z",
    fr: {
      summary:
        "Miss Madagascar 2026 - Flavie Riaka défend les couleurs de la diaspora",
    },
  },
  {
    cover: {
      url: "/mock-boys.png",
      name: "mock boys image",
    },
    address: {
      country: "Russie",
    },
    startDate: "2026-09-16T00:00:00Z",
    fr: {
      summary:
        "Cultures urbaines - Cinq talents malgaches à la conquête du concours international KARDO",
    },
  },
  {
    cover: {
      url: "/mock-miss.png",
      name: "mock miss image",
    },
    address: {
      country: "Madagascar",
    },
    startDate: "2026-12-19T00:00:00Z",
    fr: {
      summary:
        "Miss Madagascar 2026 - Flavie Riaka défend les couleurs de la diaspora",
    },
  },
  {
    cover: {
      url: "/mock-boys.png",
      name: "mock boys image",
    },
    address: {
      country: "Russie",
    },
    startDate: "2026-09-16T00:00:00Z",
    fr: {
      summary:
        "Cultures urbaines - Cinq talents malgaches à la conquête du concours international KARDO",
    },
  },
];

const MOCK_META: Meta = {
  limit: 10,
  page: 1,
  total: 900,
};

export default function EventsPage() {
  return (
    <div className="bg-foreground flex flex-col gap-[54px]">
      <RubricCustomMainTitle
        title="Événements"
        description="Les rendez-vous qui réunissent Madagascar et sa diaspora."
        leftLabel="Calendrier"
        leftLink="#"
        rightLabel="Événements"
        rightLink="#"
        defaultActive="Événements"
      />

      <div className="flex flex-col gap-[22px]">
        {MOCK_EVENT.map((event, index) => (
          <EventCard event={event} key={index} />
        ))}
      </div>

      {/* <div className="flex flex-col gap-[22px]">
        {new Array(5).fill(0).map((s, index) => (
          <EventCardLoader key={index} />
        ))}
      </div> */}
      <div className="w-full">
        <DataPagination meta={MOCK_META} basePath="/events" />
      </div>
    </div>
  );
}
