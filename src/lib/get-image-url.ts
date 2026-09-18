export function getImageUrl(url: string) {
  return `${process.env.NEXT_PUBLIC_IMAGE_URL}${url}`;
}
