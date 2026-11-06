import { Project, ProjectParams } from "@/interfaces/project/project-types";
import { genericGetList, genericGetOne } from "../common";

const PROJET_URL = "/fr/Project";

export const projectServices = {
  getAll: (params?: ProjectParams) =>
    genericGetList<Project, ProjectParams>(PROJET_URL, params),

  getById: (id: string) => genericGetOne<Project>(PROJET_URL, id),
};