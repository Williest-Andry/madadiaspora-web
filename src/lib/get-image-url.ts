import { ImageType } from "@/interfaces/global";

export function getImageUrl(url: string) {
  return `${process.env.NEXT_PUBLIC_IMAGE_URL}${url}`;
}

export const FALLBACK_IMAGE = "/fallback-image.jpeg";

export function getImageOrFallback(image: ImageType) {
  return image?.url && image?.name
    ? {
        image: getImageUrl(image.url),
        alt: image.name,
      }
    : {
        image: FALLBACK_IMAGE,
        alt: "Image indisponible",
      };
}
