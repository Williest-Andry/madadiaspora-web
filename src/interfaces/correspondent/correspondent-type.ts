import { GenericParams, ImageType } from "../global";

interface Identity {
  civility: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
}

interface Contact {
  tel?: string[];
  otherEmail?: string[];
  isPublic: boolean;
}

export interface Correspondent {
  continent: string;
  country: string;
  city: string;
  identity: Identity;
  contact: Contact;
  image: ImageType;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface CorrespondantParams extends GenericParams {
  search?: string;
  country?: string[];
  continent?: string[];
}
