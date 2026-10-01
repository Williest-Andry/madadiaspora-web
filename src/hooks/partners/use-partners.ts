import { PartnerParams } from "@/interfaces/partners/partners-types";
import { partnersServices } from "@/services/partners/partners-services";
import { useQuery } from "@tanstack/react-query";

export function usePartners(params?: PartnerParams) {
  const query = useQuery({
    queryKey: ["partners", params],
    queryFn: () => partnersServices.getAll(params),
    retry: false,
  });

  return { ...query, partners: query.data?.data ?? [] };
}
