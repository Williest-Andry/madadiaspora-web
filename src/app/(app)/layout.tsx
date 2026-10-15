import EventsCalendarAndPreviewsContainer from "@/feature/events-calendar-and-previews-container/right-info-container";
import TopAppBar from "@/feature/top-app-bar/top-app-bar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-foreground text-primary font-poppins relative h-screen w-full">
      <TopAppBar />

      <div className="w-full pl-[390px] pr-[410px]">{children}</div>

      <div className="fixed top-[115px] right-0 h-screen w-100 pr-[40px]">
        <EventsCalendarAndPreviewsContainer />
      </div>
    </div>
  );
}
