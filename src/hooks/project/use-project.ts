import { ProjectParams } from "@/interfaces/project/project-types";
import { projectServices } from "@/services/project/project-services";
import { useQuery } from "@tanstack/react-query";

export function useProjects(params?: ProjectParams) {
  const query = useQuery({
    queryKey: ["projects", params],
    queryFn: () => projectServices.getAll(params),
  });

  return {
    ...query,
    projects: query.data?.data ?? [],
    meta: query.data?.meta,
  };
}
