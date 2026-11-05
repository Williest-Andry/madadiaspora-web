import { OpportunityType } from "@/interfaces/opportunity/opportunity-types";

export function toFrenchText(type: OpportunityType): string {
  switch (type) {
    case "INVESTMENT":
      return "Investissement";
    case "OFFER_JOB":
      return "Offre d'emploi";
    case "OFFER_SERVICE":
      return "Offre de service";
    case "PARTNERSHIP":
      return "Partenariat";
    case "REQUEST_JOB":
      return "Demande d'emploi";
    case "REQUEST_SERVICE":
      return "Demande de service";
    default:
      return "";
  }
}
