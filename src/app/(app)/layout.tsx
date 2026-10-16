import EventsCalendarAndPreviewsContainer from "@/feature/events-calendar-and-previews-container/right-info-container";
import TopAppBar from "@/feature/top-app-bar/top-app-bar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-foreground text-primary font-poppins relative min-h-screen w-full">
      <TopAppBar />

      <div className="bg-foreground w-full p-2 pt-[29px] sm:max-xl:p-10 xl:pr-[410px] xl:pl-[390px]">
        {children}
      </div>

      <div className="bg-foreground absolute w-100 max-xl:left-0 max-xl:w-full max-xl:p-10 max-xl:pt-20 max-lg:flex max-lg:justify-center xl:top-[115px] xl:right-0 xl:min-h-screen xl:pr-[40px]">
        <EventsCalendarAndPreviewsContainer />
      </div>
    </div>
  );
}
