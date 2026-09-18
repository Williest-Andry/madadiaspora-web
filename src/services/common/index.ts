import { ApiResponse, GenericParams } from "@/interfaces/global";
import { catchError, prodApi } from "@/lib/axios";
import { AxiosRequestConfig, AxiosResponse } from "axios";

export async function genericGetList<T, TParams = AxiosRequestConfig["params"]>(
  url: string,
  params?: TParams
): Promise<{ data: T[] } | undefined> {
  try {
    const response: AxiosResponse<ApiResponse<T[]>> = await prodApi.get(url, {
      params: params,
    });

    return {
      data: response.data.data,
    };
  } catch (e) {
    catchError(e);
  }
}
