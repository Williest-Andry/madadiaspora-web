"use client";

import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { MultiSelect, MultiSelectOption } from "./multi-select";
import { useSearchParam } from "@/hooks/use-search-param";

type SearchBarWithCountryProps = {
  searchValue: string;
  onChangeSearch: (newValue: string) => void;
  countryValue: MultiSelectOption[];
  onChangeCountry: (newValue: string[]) => void;
};

export default function SearchBarWithCountry({
  searchValue,
  onChangeSearch,
  countryValue,
  onChangeCountry,
}: SearchBarWithCountryProps) {
  const { value, setValue } = useSearchParam();
  const [search, setSearch] = useState(value);
  const [countrySelected, setCountrySelected] = useState<string[]>([]);

  return (
    <div className="bg-foreground flex h-[200px] items-center justify-center gap-[18px] rounded-[40px] p-[4px] sm:h-[83px] sm:rounded-[60px] lg:h-[63px]">
      <div className="flex flex-col gap-1 sm:flex-row">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Nom, métier, compétence"
          className="max-sm:text-p-sm bg-bg-gray text-primary 3xl:w-[529px] h-[71px] w-[229px] rounded-[40px] p-[15px] sm:rounded-tl-[48px] sm:rounded-tr-[4px] sm:rounded-br-[4px] sm:rounded-bl-[48px] lg:h-[51px] lg:w-[329px]"
        />
        <MultiSelect
          options={countryValue}
          onValueChange={setCountrySelected}
          placeholder="Pays"
          variant="secondary"
          maxCount={1}
          className="max-sm:text-p-sm! bg-bg-gray text-primary h-[71px] w-[230px]! rounded-[40px] border-2 border-[#EBEBEB] p-[15px] sm:rounded-tl-[4px] sm:rounded-tr-[48px] sm:rounded-br-[48px] sm:rounded-bl-[4px] lg:h-[51px] lg:w-[355px]!"
        />
      </div>

      <Button
        className={
          "bg-secondary xs:w-[84px] xs:h-[71px] flex h-[61px] w-[64px] items-center justify-center rounded-[99px] px-[30px] py-[20px] lg:h-[51px]"
        }
        onClick={() => {
          setValue(search);
          onChangeSearch(search);
          onChangeCountry(countrySelected);
        }}
      >
        <Search />
      </Button>
    </div>
  );
}
