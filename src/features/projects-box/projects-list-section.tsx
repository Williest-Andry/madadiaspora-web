"use client";

import { DataPagination } from "@/components/data-pagination";
import { usePageParam } from "@/hooks/use-page-param";
import { Project } from "@/interfaces/project/project-types";
import { BoxCardProjet } from "./box-card";
import { useProjects } from "@/hooks/project/use-project";
import { id } from "date-fns/locale";

const PAGE_SIZE = 6;

function toCardProps(project: Project) {
  const { address, contact, info, cover } = project;

  const lieu = [address?.city, address?.state].filter(Boolean).join(", ");

  return {
    id: project.id,
    lieu: lieu || address?.country || "",
    // L'API ne fournit pas de catégorie pour le moment
    type: "Projet",
    titre: info?.title ?? "",
    // On n'affiche les contacts que s'ils sont publics
    contact: contact?.isPublic ? contact.tel?.[0] : undefined,
    mail: contact?.isPublic ? contact.otherEmail?.[0] : undefined,
    image: cover?.url,
  };
}

export function ProjectsListSection() {
  const { page } = usePageParam();

  const { projects, meta, isLoading, isError, isFetching } = useProjects({
    page,
    limit: PAGE_SIZE,
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 px-20 md:grid-cols-2">
        {Array.from({ length: PAGE_SIZE }).map((_, i) => (
          <div
            key={i}
            className="aspect-[494/573] w-full animate-pulse rounded-[32px] bg-neutral-200"
          />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <p className="px-20 text-center text-sm text-destructive">
        Impossible de charger les projets. Veuillez réessayer plus tard.
      </p>
    );
  }

  if (projects.length === 0) {
    return (
      <p className="px-20 text-center text-sm text-muted-foreground">
        Aucun projet disponible pour le moment.
      </p>
    );
  }

  return (
    <section className="flex flex-col gap-[10px] pb-20">
      <div
        className="grid grid-cols-1 gap-[10px] transition-opacity data-[fetching=true]:opacity-60 md:grid-cols-2"
        data-fetching={isFetching}
      >
        {projects.map((project) => (
          <BoxCardProjet
            key={project.id}
            className="max-w-none"
            {...toCardProps(project)}
          />
        ))}
      </div>

      <DataPagination meta={meta} />
    </section>
  );
}