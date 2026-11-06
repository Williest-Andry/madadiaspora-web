import { Actuality, ActualityParams, News } from "@/interfaces/news/news-types";
import { genericGetList, genericGetOne } from "../common";

const NEWS_URL = "/News";
const ACTUALITY_URL = "/fr/Actuality";

export const newsServices = {
  getAll: () => genericGetList<News>(NEWS_URL),
};

export const actualityServices = {
  getAll: (params?: ActualityParams) =>
    genericGetList<Actuality, ActualityParams>(ACTUALITY_URL, params),
    getById: (id: string) => genericGetOne<Actuality>(ACTUALITY_URL, id),
};