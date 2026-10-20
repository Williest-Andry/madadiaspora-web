import { GenericParams, ImageType } from "../global";

interface Info {
  title: string;
  summary: string;
  description: string;
}

export interface GoodToKnow {
  info: Info;
  address: {
    country: string;
  };
  cover: ImageType;
  images: ImageType[];
  attachments: string[];
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface GoodToKnowParams extends GenericParams {
  search?: string;
  country?: string[];
  sortCreated?: string;
}
