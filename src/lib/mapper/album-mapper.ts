import { getImageOrFallback } from "../get-image-url";
import { ImageType } from "@/interfaces/global";
import { SlideImage } from "yet-another-react-lightbox";

export function mapToSlideImage(
  image: ImageType,
  title: string,
  summary: string
): SlideImage {
  const realImage = getImageOrFallback(image);

  return {
    src: realImage.image,
    alt: realImage.alt,
    title: title,
    description: summary,
  };
}
