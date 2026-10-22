import { Actuality, News } from "@/interfaces/news/news-types";
import { genericGetList } from "../common";

const NEWS_URL = "/News";
const ACTUALITY_URL = "/fr/Actuality";

export const newsServices = {
  getAll: () => genericGetList<News>(NEWS_URL),
};

export const actualityServices = {
  getAll: () => genericGetList<Actuality>(ACTUALITY_URL),
};
