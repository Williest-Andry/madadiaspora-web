import { ApiResponse } from "@/interfaces/global";
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

export async function genericCreate<T, TResponse>(
  url: string,
  body: T
): Promise<TResponse | undefined> {
  try {
    const response: AxiosResponse<TResponse> = await prodApi.post(url, body);

    return response.data;
  } catch (e) {
    catchError(e);
  }
}
