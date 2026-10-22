import { AddressType, GenericParams, ImageType, Info } from "../global";

export interface EventData {
  info: Info;
  cover: ImageType;
  startDate: Date;
  endDate: Date;
  address: AddressType;
  images: ImageType[];
  attachments: string[];
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface EventParams extends GenericParams {}
