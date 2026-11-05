import { GenericParams, ImageType } from "../global";

export interface Info {
  title: string;
  summary: string;
  description: string;
}

export interface Address {
  country: string;
}

export type AlbumType = "EVENT" | "TIP" | "NEWS" | "PROJECT" | "OPPORTUNITY";

export interface Album {
  type: AlbumType;
  info: Info;
  address: Address;
  startDate: Date;
  endDate: Date;
  cover: ImageType;
  images: ImageType[];
  attachments: string[];
  id: string;
  createdAt: Date;
  isDeleted: boolean;
}

export interface AlbumImages {
  images: ImageType[];
}

export interface AlbumParams extends GenericParams {}
