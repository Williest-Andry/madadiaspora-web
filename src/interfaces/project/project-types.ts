import {
  AddressType,
  ContactType,
  GenericParams,
  ImageType,
  Info,
} from "../global";

export interface Project {
  contact: ContactType;
  address: AddressType;
  info: Info;
  cover: ImageType;
  images: ImageType[];
  attachments: string[];
  startDate: Date;
  endDate: Date;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface ProjectParams extends GenericParams {}
