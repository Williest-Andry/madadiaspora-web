import { ContentType, ImageExtension, ImageType } from "../global";

type NewsType = "NEWS" | "EVENTS";

export interface News {
  id: string;
  title: string;
  summary: string;
  image: ImageType;
  type: NewsType;
  country: string;
}
