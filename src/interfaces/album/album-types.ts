import { GenericParams, ImageType } from "../global";

export interface Info {
  title: string;
  summary: string;
  description: string;
}

export interface Adress {
  country: string;
}

export interface Album {
  info: Info;
  adress: Adress;
  startDate: Date;
  endDate: Date;
  cover: ImageType;
  images: ImageType[];
  attachments: string[];
  id: string;
  createdAt: Date;
  isDeleted: boolean;
}

export interface AlbumParams extends GenericParams {}
