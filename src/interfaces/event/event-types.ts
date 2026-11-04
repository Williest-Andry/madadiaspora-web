import { AddressType, GenericParams, ImageType, Info } from "../global";

export interface EventData {
  fr: Info;
  en: Info;
  address: AddressType;
  startDate: Date;
  endDate: Date;
  cover: ImageType;
  images: ImageType[];
  attachments: string[];
  likeCount: number;
  interestCount: number;
  isFavorite: true;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface EventParams extends GenericParams {
  search?: string;
  country?: string[];
  sortCreated?: boolean;
  category?: string[];
  month?: number;
  year?: number;
}
