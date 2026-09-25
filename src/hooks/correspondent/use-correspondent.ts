import { correspondentServices } from "@/services/correspondent/correspondent-services";
import { useQuery } from "@tanstack/react-query";

export function useCorrespondents() {
  const query = useQuery({
    queryKey: ["correspondents"],
    queryFn: () => correspondentServices.getAll(),
  });

  return { ...query, correspondents: query.data?.data ?? [] };
}
