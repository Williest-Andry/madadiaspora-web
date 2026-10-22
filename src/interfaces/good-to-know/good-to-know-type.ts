import { AddressType, GenericParams, ImageType, Info } from "../global";

export interface GoodToKnow {
  info: Info;
  address: AddressType;
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
