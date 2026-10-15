import EventsCalendarAndPreviewsContainer from "@/feature/events-calendar-and-previews-container/right-info-container";
import TopAppBar from "@/feature/top-app-bar/top-app-bar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-foreground text-primary font-poppins relative min-h-screen w-full">
      <TopAppBar />

      <div className="bg-foreground w-full pr-[410px] pl-[390px]">
        {children}
      </div>

      <div className="absolute top-[115px] right-0 h-screen w-100 pr-[40px]">
        <EventsCalendarAndPreviewsContainer />
      </div>
    </div>
  );
}
