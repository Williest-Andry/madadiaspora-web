import { GenericParams } from "@/interfaces/global";
import { actualityServices, newsServices } from "@/services/news/news-services";
import { useQuery } from "@tanstack/react-query";

export function useNews() {
  const query = useQuery({
    queryKey: ["news"],
    queryFn: () => newsServices.getAll(),
    retry: false,
  });

  return { ...query, news: query.data?.data ?? [] };
}

export function useActuality(params?: GenericParams) {
  const query = useQuery({
    queryKey: ["actuality", params],
    queryFn: () => actualityServices.getAll(params),
    retry: false,
  });

  return {
    ...query,
    actuality: query.data?.data ?? [],
    meta: query.data?.meta,
  };
}

export function useActualityById(id?: string) {
  const query = useQuery({
    queryKey: ["actuality", "detail", id],
    queryFn: () => actualityServices.getById(id as string),
    enabled: !!id,
    retry: false,
  });

  return { ...query, actuality: query.data };
}