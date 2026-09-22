import axios, { isAxiosError } from "axios";

export const prodApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PROD_API_URL,
});

export const catchError = (error: unknown) => {
  if (isAxiosError(error)) throw new Error(error.message);

  throw new Error("Unexpected error");
};
