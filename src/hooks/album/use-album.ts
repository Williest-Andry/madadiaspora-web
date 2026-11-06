import { AlbumParams, AlbumType } from "@/interfaces/album/album-types";
import { albumServices } from "@/services/album/album-services";
import { useQuery } from "@tanstack/react-query";

export function useAblum(params?: AlbumParams) {
  const query = useQuery({
    queryKey: ["album", params],
    queryFn: () => albumServices.getAll(params),
    retry: false,
  });

  return { ...query, album: query.data?.data ?? [], meta: query.data?.meta };
}

export function useAblumDetails(id: string, categoryUrl: AlbumType) {
  const query = useQuery({
    queryKey: ["album", id],
    queryFn: () => albumServices.getOne(id, categoryUrl),
  });

  return { ...query, album: query.data };
}
