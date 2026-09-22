import { Album } from "@/interfaces/album/album-types";

export function getImageUrl(url: string) {
  return `${process.env.NEXT_PUBLIC_IMAGE_URL}${url}`;
}

export const FALLBACK_IMAGE = "/fallback-image.jpeg";

export function getAlbumFallback(album: Album) {
  return album?.cover
    ? {
        image: getImageUrl(album.cover.url),
        alt: album.cover.name,
      }
    : {
        image: FALLBACK_IMAGE,
        alt: "Image indisponible",
      };
}
