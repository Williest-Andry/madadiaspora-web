import EventsCalendarAndPreviewsContainer from "@/feature/events-calendar-and-previews-container/right-info-container";
import TopAppBar from "@/feature/top-app-bar/top-app-bar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-foreground text-primary font-poppins relative min-h-screen w-full">
      <TopAppBar />

      <div className="bg-foreground w-full xl:pr-[410px] xl:pl-[390px]">
        {children}
      </div>

      <div className="absolute bottom-0 xl:top-[115px] max-xl:left-0 xl:right-0 min-h-screen w-100 pr-[40px]">
        <EventsCalendarAndPreviewsContainer />
      </div>
    </div>
  );
}
