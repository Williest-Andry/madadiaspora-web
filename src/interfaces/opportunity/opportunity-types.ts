import {
  AddressType,
  ContactType,
  GenericParams,
  ImageType,
  Info,
} from "../global";

export type OpportunityType =
  | "REQUEST_JOB"
  | "OFFER_JOB"
  | "REQUEST_SERVICE"
  | "OFFER_SERVICE"
  | "PARTNERSHIP"
  | "INVESTMENT";

export interface Opportunity {
  contact: ContactType;
  address: AddressType;
  info: Info;
  cover: ImageType;
  images: ImageType[];
  attachments: string[];
  type: OpportunityType;
  startDate: Date;
  endDate: Date;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface OpportunityParams extends GenericParams {
  search?: string;
  country?: string[];
  sortCreated?: boolean;
  category?: string[];
  type?: OpportunityType;
}
