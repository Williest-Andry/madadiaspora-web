import { Partner, PartnerParams } from "@/interfaces/partners/partners-types";
import { genericGetList } from "../common";

const PARTNERS_URL = "/partner";

export const partnersServices = {
  getAll: (params?: PartnerParams) =>
    genericGetList<Partner, PartnerParams>(PARTNERS_URL, params),
};
