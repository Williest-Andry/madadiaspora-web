import { genericGetList } from "../common";
import { EventData, EventParams } from "@/interfaces/event/event-types";

const EVENT_URL = "/fr/Event";

export const eventServices = {
  getAll: (params?: EventParams) =>
    genericGetList<EventData, EventParams>(EVENT_URL, params),
};
