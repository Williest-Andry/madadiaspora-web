export const DETAILS_TYPES = ["project", "actuality"] as const;

export type DetailsType = (typeof DETAILS_TYPES)[number];

export function isDetailsType(value?: string): value is DetailsType {
  return DETAILS_TYPES.includes(value as DetailsType);
}

export interface DetailsData {
  title: string;
  descriptionHtml: string;
  coverUrl?: string;
  city?: string;
  country?: string;
  phones: string[];
  emails: string[];
  startDate?: string;
  endDate?: string;
}