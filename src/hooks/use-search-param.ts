"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DEBOUNCE_MS = 400;

export function useSearchParam() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const urlValue = searchParams.get("search") ?? "";
  const [value, setValue] = useState(urlValue);

  useEffect(() => {
    setValue(urlValue);
  }, [urlValue]);

  useEffect(() => {
    if (value === urlValue) return;

    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      const realValue = value.trim();

      if (realValue) params.set("search", realValue);
      else params.delete("search");

      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    }, DEBOUNCE_MS);

    return () => clearTimeout(timeout);
  }, [value, urlValue, pathname, router, searchParams]);

  return { value, setValue };
}
