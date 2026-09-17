import { ApiResponse } from "@/interfaces/global";
import { catchError, prodApi } from "@/lib/axios";
import { AxiosResponse } from "axios";

export async function genericGetList<T>(
  url: string
): Promise<{ data: T[] } | undefined> {
  try {
    const response: AxiosResponse<ApiResponse<T[]>> = await prodApi.get(url);

    return {
      data: response.data.data,
    };
  } catch (e) {
    catchError(e);
  }
}
