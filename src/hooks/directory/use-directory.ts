import { DirectoryParams } from "@/interfaces/directory/directory-type";
import { directoryServices } from "@/services/directory/directory-services";
import { useQuery } from "@tanstack/react-query";

export function useDirectories(params?: DirectoryParams) {
  const query = useQuery({
    queryKey: ["directories", params],
    queryFn: () => directoryServices.getAll(params),
  });

  return {
    ...query,
    directories: query.data?.data ?? [],
    meta: query.data?.meta,
  };
}
