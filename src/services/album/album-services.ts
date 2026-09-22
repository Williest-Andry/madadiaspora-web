import { Album, AlbumParams } from "@/interfaces/album/album-types";
import { genericGetList } from "../common";

const ALBUM_URL = "/fr/album";

export const albumServices = {
  getAll: (params?: AlbumParams) =>
    genericGetList<Album, AlbumParams>(ALBUM_URL, params),
};
