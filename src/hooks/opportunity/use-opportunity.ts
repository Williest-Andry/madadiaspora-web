import { OpportunityParams } from "@/interfaces/opportunity/opportunity-types";
import { opportunityServices } from "@/services/opportunity/opportunity-services";
import { useQuery } from "@tanstack/react-query";

export function useOpportunities(params?: OpportunityParams) {
  const query = useQuery({
    queryKey: ["opportunities", params],
    queryFn: () => opportunityServices.getAll(params),
  });

  return {
    ...query,
    opportunities: query.data?.data ?? [],
    meta: query.data?.meta,
  };
}
