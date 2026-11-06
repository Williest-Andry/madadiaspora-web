"use client";

import { DataPagination } from "@/components/data-pagination";
import { useActuality } from "@/hooks/news/use-news";
import { usePageParam } from "@/hooks/use-page-param";
import { Actuality } from "@/interfaces/news/news-types";
import { ActualityCard } from "./actuality-card";

const PAGE_SIZE = 6;

// "15 Mai 2025" (mois avec majuscule)
function formatDateFr(value: Date | string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
    .formatToParts(date)
    .map((part) =>
      part.type === "month"
        ? part.value.charAt(0).toUpperCase() + part.value.slice(1)
        : part.value
    )
    .join("");
}

function toCardProps(item: Actuality) {
  const { address, info, cover, createdAt, id } = item;

  const lieu = [address?.state, address?.city].filter(Boolean).join(" / ");

  return {
    lieu: lieu || address?.country || "",
    date: formatDateFr(createdAt),
    titre: info?.title ?? "",
    resume: info?.summary ?? "",
    image: cover?.url,
    // À adapter à ta route de détail
    href: `/details/${id}?type=actuality`,
  };
}

export function ActualityListSection() {
  const { page } = usePageParam();

  const { actuality, meta, isLoading, isError, isFetching } = useActuality({
    page,
    limit: PAGE_SIZE,
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2">
        {Array.from({ length: PAGE_SIZE }).map((_, i) => (
          <div
            key={i}
            className="aspect-[494/770] w-full animate-pulse rounded-[32px] bg-neutral-200"
          />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <p className="px-20 text-center text-sm text-destructive">
        Impossible de charger les actualités. Veuillez réessayer plus tard.
      </p>
    );
  }

  if (actuality.length === 0) {
    return (
      <p className="px-20 text-center text-sm text-muted-foreground">
        Aucune actualité disponible pour le moment.
      </p>
    );
  }

  return (
    <section className="flex flex-col gap-[10px] pb-20">
      <div
        className="grid grid-cols-1 gap-[10px] transition-opacity data-[fetching=true]:opacity-60 md:grid-cols-2"
        data-fetching={isFetching}
      >
        {actuality.map((item) => (
          <ActualityCard key={item.id} {...toCardProps(item)} />
        ))}
      </div>

      <DataPagination meta={meta} />
    </section>
  );
}