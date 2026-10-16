import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Meta } from "@/interfaces/global";
import { getPageWindow } from "@/lib/pagination";
import { cn } from "@/lib/utils";

interface DataPaginationProps {
  meta?: Meta;
  basePath: string;
}

export function DataPagination({ meta, basePath }: DataPaginationProps) {
  const page = meta?.page ?? 1;
  const limit = meta?.limit ?? 10;
  const total = meta?.total ?? 0;
  const totalPages = Math.ceil(total / limit);

  if (totalPages <= 1) return null;

  const { start, end, pages, hasPrevWindow, hasNextWindow } = getPageWindow(
    page,
    totalPages
  );

  const hrefFor = (p: number) => `${basePath}?page=${p}`;
  const isFirst = page <= 1;
  const isLast = page >= totalPages;
  const disabledClass = "pointer-events-none opacity-50";

  return (
    <Pagination className="bg-foreground text-primary">
      <PaginationContent className="flex gap-[21px]">
        <PaginationItem>
          <PaginationPrevious
            href={hrefFor(Math.max(page - 1, 1))}
            aria-disabled={isFirst}
            tabIndex={isFirst ? -1 : undefined}
            className={cn(
              isFirst && disabledClass,
              "hover:text-primary",
              "text-p-md font-sans font-[500]"
            )}
            text="Précédent"
          />
        </PaginationItem>

        {hasPrevWindow && (
          <PaginationItem>
            <PaginationLink
              href={hrefFor(start - 1)}
              aria-label={`Aller à la page ${start - 1}`}
            >
              <PaginationEllipsis />
            </PaginationLink>
          </PaginationItem>
        )}

        {pages.map((p) => (
          <PaginationItem key={p}>
            <PaginationLink
              href={hrefFor(p)}
              isActive={p === page}
              className={
                p === page
                  ? "bg-secondary hover:text-primary! text-p-md rounded-[173.71px] px-[52.64px] py-[35.09px] font-sans font-[500]"
                  : "hover:text-primary! text-p-md font-sans font-[500]"
              }
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* {hasNextWindow && (
          <PaginationItem>
            <PaginationLink
              href={hrefFor(end + 1)}
              aria-label={`Aller à la page ${end + 1}`}
            >
              <PaginationEllipsis />
            </PaginationLink>
          </PaginationItem>
        )} */}

        <PaginationItem>
          <PaginationNext
            href={hrefFor(Math.min(page + 1, totalPages))}
            aria-disabled={isLast}
            tabIndex={isLast ? -1 : undefined}
            className={cn(
              isLast && disabledClass,
              "hover:text-primary",
              "text-p-md font-sans font-[500]"
            )}
            text="Suivant"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
