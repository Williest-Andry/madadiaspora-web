import EventsCalendarAndPreviewsContainer from "@/feature/events-calendar-and-previews-container/right-info-container";
import TopAppBar from "@/feature/top-app-bar/top-app-bar";
import { Suspense } from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-foreground text-primary font-poppins relative min-h-screen w-full">
      <Suspense fallback={null}>
        <TopAppBar />
      </Suspense>

      <div className="bg-foreground w-full p-2 pt-[29px] sm:max-xl:p-10 xl:pr-[410px] xl:pl-[390px]">
        <Suspense fallback={null}>{children}</Suspense>
      </div>

      <div className="bg-foreground flex w-100 justify-center max-xl:w-full max-xl:p-10 max-xl:pt-20 max-lg:flex max-lg:justify-center xl:absolute xl:top-[115px] xl:right-0 xl:min-h-screen xl:pr-[40px]">
        <EventsCalendarAndPreviewsContainer />
      </div>
    </div>
  );
}
