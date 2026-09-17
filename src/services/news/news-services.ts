import { News } from "@/interfaces/news/news-types";
import { genericGetList } from "../common";

const NEWS_URL = "/news";

export const newsServices = {
  getAll: () => genericGetList<News>(NEWS_URL),
};
