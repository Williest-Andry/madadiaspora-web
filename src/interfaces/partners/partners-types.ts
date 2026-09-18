import { GenericParams, ImageType } from "../global";

export interface Partner {
  id: string;
  name: string;
  logo: ImageType;
  redirectUrl: string;
  isOfficial: boolean;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface PartnerParams extends GenericParams {
  isOfficial: boolean;
}
