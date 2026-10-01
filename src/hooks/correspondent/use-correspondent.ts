import { correspondentServices } from "@/services/correspondent/correspondent-services";
import { useQuery } from "@tanstack/react-query";

export function useCorrespondents() {
  const query = useQuery({
    queryKey: ["correspondents"],
    queryFn: () => correspondentServices.getAll(),
    retry: false,
  });

  return { ...query, correspondents: query.data?.data ?? [] };
}
