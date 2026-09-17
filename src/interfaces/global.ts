export type ApiResponse<T> = {
  success: string;
  data: T;
  message: string;
};

export type ImageExtension = ".jpeg";
export type ContentType =
  "image/jpeg" | "application/json" | "multipart/form-data";
