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
  startDate: string;
  endDate: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
}

export interface ProjectParams extends GenericParams {}
