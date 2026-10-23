"use client";

import { MultiSelect } from "@/components/multi-select";
import { getCountryOptions } from "@/lib/countries";

type FiltersSectionProps = {
  title: string;
  onChangeCountries: (newValue: string[]) => void;
};

const COUNTRIES = getCountryOptions();

export default function FiltersSection({
  title,
  onChangeCountries,
}: FiltersSectionProps) {
  return (
    <section className="flex flex-col gap-[36px] px-10">
      <h2 className="text-title-md font-[700]">{title}</h2>

      <div>
        <MultiSelect
          options={COUNTRIES}
          onValueChange={onChangeCountries}
          placeholder="Sélectionner un pays"
          variant="secondary"
          maxCount={1}
          className="max-sm:text-p-sm! bg-bg-gray text-primary h-[71px] w-[230px]! rounded-[40px] border-2 border-[#EBEBEB] p-[15px] lg:h-[51px] lg:w-[355px]!"
        />
      </div>
    </section>
  );
}
