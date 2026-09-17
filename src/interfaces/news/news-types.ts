import { ContentType, ImageExtension } from "../global";

export interface NewsImage {
  url: string;
  name: string;
  extension: ImageExtension;
  contentType?: ContentType;
  size?: number;
}

type NewsType = "NEWS" | "EVENTS";

export interface News {
  id: string;
  title: string;
  summary: string;
  image: NewsImage;
  type: NewsType;
  country: string;
}
