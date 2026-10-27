import { useCategories } from "@/hooks/category/use-category";
import { MultiSelect } from "./multi-select";
import { toMultiSelectOption } from "@/lib/category-mapper";

type CategoryMultiSelectProps = {
  value: string[];
  onChange: (newValues: string[]) => void;
};

export default function CategoryMultiSelect({
  value,
  onChange,
}: CategoryMultiSelectProps) {
  const { categories } = useCategories();

  return (
    <MultiSelect
      value={value}
      onValueChange={onChange}
      options={categories.map(toMultiSelectOption)}
      placeholder="Sélectionner un secteur"
      variant="secondary"
      maxCount={1}
      className="max-sm:text-p-sm! bg-bg-gray text-primary h-[71px] w-[230px]! rounded-[40px] border-2 border-[#EBEBEB] p-[15px] lg:h-[51px] lg:w-[355px]!"
    />
  );
}
