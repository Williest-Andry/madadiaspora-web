import { ImageType } from "@/interfaces/global";

export function getImageUrl(url: string) {
  return `${process.env.NEXT_PUBLIC_IMAGE_URL}${url}`;
}

export const FALLBACK_IMAGE = "/fallback-image.jpeg";

export function getImageOrFallback(album: ImageType) {
  return album?.url && album?.name
    ? {
        image: getImageUrl(album.url),
        alt: album.name,
      }
    : {
        image: FALLBACK_IMAGE,
        alt: "Image indisponible",
      };
}
