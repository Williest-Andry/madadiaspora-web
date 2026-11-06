import { AddressType, GenericParams, ImageType, Info } from "../global";

type NewsType = "NEWS" | "EVENTS";

export interface News {
  id: string;
  title: string;
  summary: string;
  image: ImageType;
  type: NewsType;
  country: string;
}

export interface Actuality {
  info: Info;
  address: AddressType;
  cover: ImageType;
  images: ImageType[];
  attachments: string[];
  id: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
}

export interface ActualityParams extends GenericParams {}
