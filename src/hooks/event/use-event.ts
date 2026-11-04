import { EventParams } from "@/interfaces/event/event-types";
import { eventServices } from "@/services/event/event-services";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export function useEvents(params?: EventParams) {
  const query = useQuery({
    queryKey: ["events", params],
    queryFn: () => eventServices.getAll(params),
    placeholderData: keepPreviousData,
    staleTime: 30 * 60 * 1000,
  });

  return {
    ...query,
    events: query.data?.data ?? [],
    meta: query.data?.meta,
  };
}
