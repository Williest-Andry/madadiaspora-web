import { Album, AlbumParams, AlbumType } from "@/interfaces/album/album-types";
import { genericGetList, genericGetOne } from "../common";

const ALBUM_URL = "/fr/album";

export const albumServices = {
  getAll: (params?: AlbumParams) =>
    genericGetList<Album, AlbumParams>(ALBUM_URL, params),

  getOne: (id: string, categoryUrl: AlbumType) => {
    const url = `/fr/${categoryUrl}`;
    return genericGetOne<Album>(id, url);
  },
};
