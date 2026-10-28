"use client";

import { useGoodToKnow } from "@/hooks/good-to-know/use-good-to-know";
import { useActuality } from "@/hooks/news/use-news";
import { usePathname } from "next/navigation";
import PreviewInfoCard from "./preview-info-card";
import {
  mapEntityToPreview,
  mapEvent,
  Preview,
} from "@/lib/entity-preview-mapper";
import { useOpportunities } from "@/hooks/opportunity/use-opportunity";
import { useProjects } from "@/hooks/project/use-project";
import { useEvents } from "@/hooks/event/use-event";

export type PreviewData = {
  label: string;
  path:
    | "/good-to-know"
    | "/news"
    | "/projects-box"
    | "/events"
    | "/opportunities-business";
  data: Preview[];
  isLoading: boolean;
  isError: boolean;
  isRefetching: boolean;
  refetch: () => void;
};

const OPTIMIZED_PARAMS = {
  limit: 3,
  page: 1,
};

export default function PreviewsContainer() {
  const {
    goodToKnow,
    isLoading: goodToKnowLoading,
    isError: goodToKnowError,
    isRefetching: goodToKnowRefetching,
    refetch: goodToKnowRefecth,
  } = useGoodToKnow(OPTIMIZED_PARAMS);
  const {
    actuality,
    isLoading: actualityLoading,
    isError: actualityError,
    isRefetching: actualityRefetching,
    refetch: actualityRefetch,
  } = useActuality(OPTIMIZED_PARAMS);
  const {
    opportunities,
    isLoading: opportunitiesLoading,
    isError: opportunitiesError,
    isRefetching: opportunitiesRefetching,
    refetch: opportunitiesRefetch,
  } = useOpportunities(OPTIMIZED_PARAMS);
  const {
    projects,
    isLoading: projectsLoading,
    isError: projectsError,
    isRefetching: projectsRefetching,
    refetch: projectsRefetch,
  } = useProjects(OPTIMIZED_PARAMS);
  const {
    events,
    isLoading: eventsLoading,
    isError: eventsError,
    isRefetching: eventsRefetching,
    refetch: eventsRefetch,
  } = useEvents(OPTIMIZED_PARAMS);

  const pathName = usePathname();

  const previewsData: PreviewData[] = [
    {
      label: "Opportunités & Business",
      path: "/opportunities-business",
      data: opportunities.map(mapEntityToPreview),
      isLoading: opportunitiesLoading,
      isError: opportunitiesError,
      isRefetching: opportunitiesRefetching,
      refetch: opportunitiesRefetch,
    },
    {
      label: "Boîte à projets",
      path: "/projects-box",
      data: projects.map(mapEntityToPreview),
      isLoading: projectsLoading,
      isError: projectsError,
      isRefetching: projectsRefetching,
      refetch: projectsRefetch,
    },
    {
      label: "Bon à savoir",
      path: "/good-to-know",
      data: goodToKnow.map(mapEntityToPreview),
      isLoading: goodToKnowLoading,
      isError: goodToKnowError,
      isRefetching: goodToKnowRefetching,
      refetch: goodToKnowRefecth,
    },
    {
      label: "Évènements",
      path: "/events",
      data: events.map(mapEvent),
      isLoading: eventsLoading,
      isError: eventsError,
      isRefetching: eventsRefetching,
      refetch: eventsRefetch,
    },
    {
      label: "Actualités",
      path: "/news",
      data: actuality.map(mapEntityToPreview),
      isLoading: actualityLoading,
      isError: actualityError,
      isRefetching: actualityRefetching,
      refetch: actualityRefetch,
    },
  ];

  const previews = previewsData.filter(
    (preview) => !preview.path.includes(pathName)
  );

  return (
    <div className="grid grid-cols-1 gap-[30px] max-xl:justify-items-center md:grid-cols-2 xl:grid-cols-1">
      {previews.map((preview, index) => (
        <PreviewInfoCard key={index} data={preview} />
      ))}
    </div>
  );
}
