import { GoodToKnowParams } from "@/interfaces/good-to-know/good-to-know-type";
import { goodToKnowServices } from "@/services/good-to-know/good-to-know-services";
import { useQuery } from "@tanstack/react-query";

export function useGoodToKnow(params?: GoodToKnowParams) {
  const query = useQuery({
    queryKey: ["good-to-know", params],
    queryFn: () => goodToKnowServices.getAll(params),
    retry: 0,
  });

  return { ...query, goodToKnow: query.data?.data ?? [] };
}
