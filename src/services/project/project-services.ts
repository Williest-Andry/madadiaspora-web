import { Project, ProjectParams } from "@/interfaces/project/project-types";
import { genericGetList } from "../common";

const PROJET_URL = "/fr/Project";

export const projectServices = {
  getAll: (params?: ProjectParams) =>
    genericGetList<Project, ProjectParams>(PROJET_URL, params),
};
