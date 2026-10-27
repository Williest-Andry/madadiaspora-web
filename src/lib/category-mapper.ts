import { MultiSelectOption } from "@/components/multi-select";
import { Category } from "@/interfaces/category/category-types";

export function toMultiSelectOption(data: Category): MultiSelectOption {
  return {
    label: data.fr.title,
    value: data.id,
  };
}
