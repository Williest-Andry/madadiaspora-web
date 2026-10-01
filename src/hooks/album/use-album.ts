import { AlbumParams } from "@/interfaces/album/album-types";
import { albumServices } from "@/services/album/album-services";
import { useQuery } from "@tanstack/react-query";

export function useAblum(params?: AlbumParams) {
  const query = useQuery({
    queryKey: ["album", params],
    queryFn: () => albumServices.getAll(params),
    retry: false,
  });

  return { ...query, album: query.data?.data ?? [] };
}
