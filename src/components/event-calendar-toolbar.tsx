import { CalendarController } from "@fullcalendar/react";
import {
  EventCalendarNextIcon,
  EventCalendarPrevIcon,
} from "@/components/event-calendar-icons";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const viewLabels: Record<string, string> = {
  dayGridMonth: "Mois",
  timeGridWeek: "Semaine",
  timeGridDay: "Jour",
  listWeek: "Liste",
  multiMonthYear: "Année",
};

export interface EventCalendarToolbarProps {
  className?: string;
  controller: CalendarController;
  availableViews: string[];
  addButton?: {
    isPrimary?: boolean;
    text?: string;
    hint?: string;
    click?: (ev: MouseEvent) => void;
  };
}

export function EventCalendarToolbar({
  className,
  controller,
  availableViews,
  addButton,
}: EventCalendarToolbarProps) {
  const buttons = controller.getButtonState();

  return (
    <div
      className={cn(
        "bg-foreground text-primary flex flex-wrap items-center justify-between gap-3",
        className
      )}
    >
      <div className="flex shrink-0 items-center gap-3">
        {addButton && (
          <Button onClick={addButton.click as any} aria-label={addButton.hint}>
            {addButton.text}
          </Button>
        )}
        <Button
          onClick={() => controller.today()}
          aria-label={buttons.today.hint}
          variant="outline"
          className={"bg-foreground text-primary hover:bg-primary"}
        >
          {"Aujourd'hui"}
        </Button>
        <div className="flex items-center">
          <Button
            onClick={() => controller.prev()}
            disabled={buttons.prev.isDisabled}
            aria-label={buttons.prev.hint}
            variant="ghost"
            size="icon"
            className={"cursor-pointer"}
          >
            <EventCalendarPrevIcon />
          </Button>
          <Button
            onClick={() => controller.next()}
            disabled={buttons.next.isDisabled}
            aria-label={buttons.next.hint}
            variant="ghost"
            size="icon"
            className={"cursor-pointer"}
          >
            <EventCalendarNextIcon />
          </Button>
        </div>
        <div className="text-xl first-letter:uppercase">
          {controller.view?.title}
        </div>
      </div>
      <Tabs value={controller.view?.type ?? availableViews[0]}>
        <TabsList>
          {availableViews.map((availableView) => (
            <TabsTrigger
              key={availableView}
              value={availableView}
              onClick={() => controller.changeView(availableView)}
              aria-label={buttons[availableView]?.hint}
              className={"bg-foreground text-primary hover:bg-primary"}
            >
              {viewLabels[availableView] ?? buttons[availableView]?.text}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
