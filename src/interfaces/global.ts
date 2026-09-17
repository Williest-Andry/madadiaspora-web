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

export type ImageExtension = ".jpeg";
export type ContentType =
  "image/jpeg" | "application/json" | "multipart/form-data";
