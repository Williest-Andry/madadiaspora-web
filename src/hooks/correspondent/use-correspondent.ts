import { CorrespondantParams } from "@/interfaces/correspondent/correspondent-type";
import { correspondentServices } from "@/services/correspondent/correspondent-services";
import { useQuery } from "@tanstack/react-query";

export function useCorrespondents(params?: CorrespondantParams) {
  const query = useQuery({
    queryKey: ["correspondents", params],
    queryFn: () => correspondentServices.getAll(params),
    retry: false,
  });

  return {
    ...query,
    correspondents: query.data?.data ?? [],
    meta: query.data?.meta,
  };
}
