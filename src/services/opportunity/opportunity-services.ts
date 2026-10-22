import {
  Opportunity,
  OpportunityParams,
} from "@/interfaces/opportunity/opportunity-types";
import { genericGetList } from "../common";

const OPPORTUNITY_URL = "/fr/Opportunity";

export const opportunityServices = {
  getAll: (params?: OpportunityParams) =>
    genericGetList<Opportunity, OpportunityParams>(OPPORTUNITY_URL, params),
};
