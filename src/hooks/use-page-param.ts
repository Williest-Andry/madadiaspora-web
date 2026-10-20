"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function usePageParam() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const page = Math.max(Math.floor(Number(searchParams.get("page"))) || 1, 1);

  const setPage = useCallback(
    (newPage: number, mode: "push" | "replace" = "push") => {
      const params = new URLSearchParams(searchParams.toString());

      if (newPage <= 1) params.delete("page");
      else params.set("page", String(newPage));

      const query = params.toString();
      router[mode](query ? `${pathname}?${query}` : pathname);
    },
    [router, pathname, searchParams]
  );

  const resetPage = useCallback(() => {
    if (page !== 1) setPage(1, "replace");
  }, [page, setPage]);

  return { page, setPage, resetPage };
}
