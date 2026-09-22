import { newsServices } from "@/services/news/news-services";
import { useQuery } from "@tanstack/react-query";

export function useNews() {
  const query = useQuery({
    queryKey: ["news"],
    queryFn: () => newsServices.getAll(),
  });

  return { ...query, news: query.data?.data ?? [] };
}
