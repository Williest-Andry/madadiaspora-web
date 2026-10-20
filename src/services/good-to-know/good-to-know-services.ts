import {
  GoodToKnow,
  GoodToKnowParams,
} from "@/interfaces/good-to-know/good-to-know-type";
import { genericGetList } from "../common";

const GOOD_TO_KNOW_URL = "fr/Tip";

export const goodToKnowServices = {
  getAll: (params?: GoodToKnowParams) =>
    genericGetList<GoodToKnow, GoodToKnowParams>(GOOD_TO_KNOW_URL, params),
};
