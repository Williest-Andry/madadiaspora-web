"use client";

import CategoryMultiSelect from "@/components/category-multi-select";
import { MultiSelect } from "@/components/multi-select";
import SortCreatedDateSelector from "@/components/sort-created-date-selector";
import { getCountryOptions } from "@/lib/countries";

type FiltersSectionProps = {
  title: string;
  onChangeCountries: (newValue: string[]) => void;
  sortDateValue: boolean;
  onChangeSortDate: (newValue: boolean) => void;
  categoryValue: string[];
  onChangeCategory: (newValue: string[]) => void;
};

const COUNTRIES = getCountryOptions();

export default function FiltersSection({
  title,
  onChangeCountries,
  sortDateValue,
  onChangeSortDate,
  categoryValue,
  onChangeCategory,
}: FiltersSectionProps) {
  return (
    <section className="flex flex-col gap-[36px] px-10">
      <h2 className="text-title-md font-[700]">{title}</h2>

      <div className="flex flex-wrap items-center gap-10">
        <MultiSelect
          options={COUNTRIES}
          onValueChange={onChangeCountries}
          placeholder="Sélectionner un pays"
          variant="secondary"
          maxCount={1}
          className="max-sm:text-p-sm! bg-bg-gray text-primary h-[71px] w-[230px]! rounded-[40px] border-2 border-[#EBEBEB] p-[15px] lg:h-[51px] lg:w-[355px]!"
        />

        <CategoryMultiSelect
          value={categoryValue}
          onChange={onChangeCategory}
        />

        <SortCreatedDateSelector
          value={sortDateValue}
          onChange={onChangeSortDate}
        />
      </div>
    </section>
  );
}
