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

export function useActuality() {
  const query = useQuery({
    queryKey: ["actuality"],
    queryFn: () => actualityServices.getAll(),
    retry: false,
  });

  return { ...query, actuality: query.data?.data ?? [] };
}
