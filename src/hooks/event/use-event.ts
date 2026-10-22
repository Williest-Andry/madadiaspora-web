import { EventParams } from "@/interfaces/event/event-types";
import { eventServices } from "@/services/event/event-services";
import { useQuery } from "@tanstack/react-query";

export function useEvents(params?: EventParams) {
  const query = useQuery({
    queryKey: ["events", params],
    queryFn: () => eventServices.getAll(params),
  });

  return {
    ...query,
    events: query.data?.data ?? [],
    meta: query.data?.meta,
  };
}
