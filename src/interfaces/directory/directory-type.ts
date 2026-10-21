import { AddressType, ContactType, GenericParams, ImageType } from "../global";

interface Identity {
  civility: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  nationality: string;
}

interface Professional {
  title: string;
  sector: string;
  establishment: string;
  managerTitle: string;
  other: string;
  isRetired: boolean;
  isPublic: boolean;
}

type Type = "STUDENT" | "OTHER" | "PROFESSIONAL" | "GROUP";

export interface Directory {
  identity: Identity;
  address: AddressType;
  contact: ContactType;
  professional: Professional;
  type: Type;
  id: string;
  createdAt: Date;
  isDeleted: boolean;
  profile?: ImageType;
}

export interface DirectoryParams extends GenericParams {
  search?: string;
  subscriptionType?: Type;
  country?: string[];
}
