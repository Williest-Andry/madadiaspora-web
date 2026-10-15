import EventCalendar from "./event-calendar";
import PreviewInfoCard from "./preview-info-card";

export default function EventsCalendarAndPreviewsContainer() {
  return (
    <div className="flex flex-col gap-[30px]">
      <EventCalendar />

      <PreviewInfoCard />
      <PreviewInfoCard />
      <PreviewInfoCard />
    </div>
  );
}
