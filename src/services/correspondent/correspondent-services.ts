import {
  CorrespondantParams,
  Correspondent,
} from "@/interfaces/correspondent/correspondent-type";
import { genericGetList } from "../common";

const CORRESPONDENT_URL = "/correspondant";

export const correspondentServices = {
  getAll: (params?: CorrespondantParams) =>
    genericGetList<Correspondent, CorrespondantParams>(
      CORRESPONDENT_URL,
      params
    ),
};
