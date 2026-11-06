import { DetailsData, DetailsType } from "@/interfaces/details/types";
import { Actuality } from "@/interfaces/news/news-types";
import { Project } from "@/interfaces/project/project-types";
import { useActualityById } from "../news/use-news";
import { useProjectById } from "../project/use-project";

function mapProject(project: Project): DetailsData {
  return {
    title: project.info.title,
    descriptionHtml: project.info.description,
    coverUrl: project.cover?.url,
    city: project.address?.city,
    country: project.address?.country,
    phones: project.contact?.isPublic ? project.contact.tel : [],
    emails: project.contact?.isPublic ? project.contact.otherEmail : [],
    startDate: project.startDate,
    endDate: project.endDate,
  };
}

function mapActuality(actuality: Actuality): DetailsData {
  return {
    title: actuality.info.title,
    descriptionHtml: actuality.info.description,
    coverUrl: actuality.cover?.url,
    city: actuality.address?.city,
    country: actuality.address?.country,
    phones: [],
    emails: [],
    // Une actualité n'a pas de période : on affiche sa date de publication
    startDate: actuality.createdAt,
  };
}

export function useDetails(type: DetailsType, id: string) {
  // Tous les hooks sont appelés à chaque rendu ;
  // seul celui du type courant reçoit un id (donc seul lui fait une requête).
  
  switch (type) {
    case "project":
      const project = useProjectById(type === "project" ? id : undefined);
      return {
        data: project.project ? mapProject(project.project) : undefined,
        isLoading: project.isLoading,
        isError: project.isError,
      };
      case "actuality":
      const actuality = useActualityById(type === "actuality" ? id : undefined);
      return {
        data: actuality.actuality ? mapActuality(actuality.actuality) : undefined,
        isLoading: actuality.isLoading,
        isError: actuality.isError,
      };
  }
}