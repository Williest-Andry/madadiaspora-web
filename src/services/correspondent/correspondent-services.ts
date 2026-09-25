import { Correspondent } from "@/interfaces/correspondent/correspondent-type";
import { genericGetList } from "../common";

const CORRESPONDENT_URL = "/correspondant";

export const correspondentServices = {
  getAll: () => genericGetList<Correspondent>(CORRESPONDENT_URL),
};
