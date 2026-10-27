import { CategoryParams } from "@/interfaces/category/category-types";
import { categoryServices } from "@/services/category/category-services";
import { useQuery } from "@tanstack/react-query";

export function useCategories(params?: CategoryParams) {
  const query = useQuery({
    queryKey: ["categories", params],
    queryFn: () => categoryServices.getAll(params),
  });

  return { ...query, categories: query.data?.data ?? [] };
}
