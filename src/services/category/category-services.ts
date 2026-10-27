import { Category, CategoryParams } from "@/interfaces/category/category-types";
import { genericGetList } from "../common";

const CATEGORY_URL = "/fr/Category";

export const categoryServices = {
  getAll: (params?: CategoryParams) =>
    genericGetList<Category, CategoryParams>(CATEGORY_URL, params),
};
