export interface Meta {
  page?: number;
  limit?: number;
  total?: number;
}

export interface ApiResponse<T> {
  success: string;
  data: T;
  message: string;
  meta?: Meta;
}

export interface GenericParams {
  page?: number;
  limit?: number;
}

export interface ImageType {
  url: string;
  name: string;
  extension: ImageExtension;
  contentType?: ContentType;
  size?: number;
}

export interface AddressType {
  street?: string;
  city?: string;
  country: string;
  state?: string;
  postalCode?: string;
}

export interface ContactType {
  tel: string[];
  otherEmail: string[];
  isPublic: boolean;
}

export interface Info {
  title: string;
  summary: string;
  description: string;
}

export type ImageExtension = ".jpeg";
export type ContentType =
  "image/jpeg" | "application/json" | "multipart/form-data";
