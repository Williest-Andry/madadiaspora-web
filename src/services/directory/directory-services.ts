import {
  Directory,
  DirectoryParams,
} from "@/interfaces/directory/directory-type";
import { genericGetList } from "../common";

const DIRECTORY_URL = "/Registry";

export const directoryServices = {
  getAll: (params?: DirectoryParams) =>
    genericGetList<Directory, DirectoryParams>(DIRECTORY_URL, params),
};
