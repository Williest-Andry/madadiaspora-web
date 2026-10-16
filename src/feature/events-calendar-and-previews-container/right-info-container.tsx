import EventCalendar from "./event-calendar";
import PreviewInfoCard from "./preview-info-card";

export default function EventsCalendarAndPreviewsContainer() {
  return (
    <div className="flex flex-col gap-[30px] max-lg:w-[80%] max-lg:items-center lg:flex-row xl:flex-col">
      <EventCalendar />

      <PreviewInfoCard />
      <PreviewInfoCard />
      <PreviewInfoCard />
    </div>
  );
}
