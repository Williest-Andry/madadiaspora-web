import { EventData } from "@/interfaces/event/event-types";
import { ImageType } from "@/interfaces/global";
import { GoodToKnow } from "@/interfaces/good-to-know/good-to-know-type";
import { Actuality } from "@/interfaces/news/news-types";
import { Opportunity } from "@/interfaces/opportunity/opportunity-types";
import { Project } from "@/interfaces/project/project-types";

export type Preview = {
  id: string;
  title: string;
  image: ImageType;
  date: Date;
};

export function mapEntityToPreview(
  item: GoodToKnow | Actuality | Opportunity | Project | EventData
): Preview {
  return {
    id: item.id,
    title: item.info.title,
    image: item.cover,
    date: item.createdAt,
  };
}

export function mapEvent(item: EventData): Preview {
  return {
    id: item.id,
    title: item.info.title,
    image: item.cover,
    date: item.createdAt,
  };
}
