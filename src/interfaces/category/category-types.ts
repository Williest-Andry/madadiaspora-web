import { GenericParams } from "../global";

interface LanguageInfo {
  title: string;
  summary: string;
  description: string;
  others: string[];
}

export interface Category {
  fr: LanguageInfo;
  en: LanguageInfo;
  id: string;
  createdAt: Date;
  isDeleted: boolean;
}

export interface CategoryParams extends GenericParams {}
