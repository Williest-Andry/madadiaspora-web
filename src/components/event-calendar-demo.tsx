import { EventCalendar } from "@/components/event-calendar";

export function EventCalendarDemo() {
  return (
    <EventCalendar
      className="mx-auto my-10 max-w-300"
      editable
      selectable
      nowIndicator
      navLinks
      timeZone="UTC"
      events="https://fullcalendar.io/api/demo-feeds/events.json"
      addButton={{
        text: "Add Event",
        click() {
          alert("add event...");
        },
      }}
    />
  );
}
