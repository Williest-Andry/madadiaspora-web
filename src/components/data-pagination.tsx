"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePageParam } from "@/hooks/use-page-param";
import { Meta } from "@/interfaces/global";
import { getPageWindow } from "@/lib/pagination";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface DataPaginationProps {
  meta?: Meta;
}

const DESKTOP_QUERY = "(min-width: 1536px)";

export function DataPagination({ meta }: DataPaginationProps) {
  const [showNavigationText, setShowNavigationText] = useState(true);
  const { page, setPage } = usePageParam();

  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_QUERY);
    setShowNavigationText(mql.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setShowNavigationText(e.matches);
    };
    mql.addEventListener("change", handleChange);

    return () => mql.removeEventListener("change", handleChange);
  }, []);

  const limit = meta?.limit ?? 10;
  const total = meta?.total ?? 0;
  const totalPages = Math.ceil(total / limit);

  if (totalPages <= 1) return null;

  const { start, end, pages, hasPrevWindow, hasNextWindow } = getPageWindow(
    page,
    totalPages
  );

  const isFirst = page <= 1;
  const isLast = page >= totalPages;
  const disabledClass = "pointer-events-none opacity-50";
  const clickableClass = "cursor-pointer";

  return (
    <Pagination className="bg-foreground text-primary flex">
      <PaginationContent className="flex gap-0 2xl:gap-[21px]">
        <PaginationItem>
          <PaginationPrevious
            aria-disabled={isFirst}
            tabIndex={isFirst ? -1 : undefined}
            className={cn(
              clickableClass,
              isFirst && disabledClass,
              "hover:text-primary",
              "text-p-xs 2xl:text-p-md font-sans font-[500]"
            )}
            text={showNavigationText ? "Précédent" : ""}
            onClick={() => !isFirst && setPage(page - 1)}
          />
        </PaginationItem>

        {hasPrevWindow && (
          <PaginationItem>
            <PaginationLink
              aria-label={`Aller à la page ${start - 1}`}
              className={clickableClass}
              onClick={() => setPage(start - 1)}
            >
              <PaginationEllipsis />
            </PaginationLink>
          </PaginationItem>
        )}

        {pages.map((p) => (
          <PaginationItem key={p}>
            <PaginationLink
              isActive={p === page}
              className={cn(
                clickableClass,
                p === page
                  ? "bg-secondary hover:text-primary! text-p-sm 2xl:text-p-md rounded-[173.71px] px-6 py-6 font-sans font-[500] 2xl:px-[52.64px] 2xl:py-[35.09px]"
                  : "hover:text-primary! text-p-sm 2xl:text-p-md font-sans font-[500]"
              )}
              onClick={() => setPage(p)}
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}

        {hasNextWindow && (
          <PaginationItem>
            <PaginationLink
              aria-label={`Aller à la page ${end + 1}`}
              className={clickableClass}
              onClick={() => setPage(end + 1)}
            >
              <PaginationEllipsis />
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            aria-disabled={isLast}
            tabIndex={isLast ? -1 : undefined}
            className={cn(
              clickableClass,
              isLast && disabledClass,
              "hover:text-primary",
              "text-p-xs 2xl:text-p-md font-sans font-[500]"
            )}
            text={showNavigationText ? "Suivant" : ""}
            onClick={() => !isLast && setPage(page + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
