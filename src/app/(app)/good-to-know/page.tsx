"use client";

import GenericErrorSection from "@/components/generic-error-section";
import { MultiSelect } from "@/components/multi-select";
import GoodToKnowCard from "@/feature/good-to-know/good-to-know-card";
import GoodToKnowSkeleton from "@/feature/good-to-know/good-to-know-loader";
import { MainTitle } from "@/feature/good-to-know/main-title";
import { useGoodToKnow } from "@/hooks/good-to-know/use-good-to-know";
import { getCountryOptions } from "@/lib/countries";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const COUNTRIES = getCountryOptions();

export default function GoodToKnowPage() {
  const [countrySelected, setCountrySelected] = useState<string[]>([]);

  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "";

  const { goodToKnow, isLoading, isError, isFetching, refetch } = useGoodToKnow(
    {
      page: 1,
      limit: 5,
      country: countrySelected,
      search: search,
    }
  );

  return (
    <div className="flex flex-col gap-[48px]">
      <MainTitle />

      <MultiSelect
        options={COUNTRIES}
        onValueChange={setCountrySelected}
        placeholder="Pays"
        variant="secondary"
        maxCount={1}
        className="max-sm:text-p-sm! bg-bg-gray text-primary h-[71px] w-[230px]! rounded-[40px] border-2 border-[#EBEBEB] p-[15px] sm:rounded-tl-[4px] sm:rounded-tr-[48px] sm:rounded-br-[48px] sm:rounded-bl-[4px] lg:h-[51px] lg:w-[355px]!"
      />

      {isLoading &&
        new Array(5)
          .fill(0)
          .map((l, index) => <GoodToKnowSkeleton key={index} />)}

      {isError && (
        <GenericErrorSection
          isFetching={isFetching}
          message="Impossible de charger les données de la page Bon à Savoir"
          refetch={refetch}
          backgroundColor="foreground"
          className="h-screen"
        />
      )}

      {goodToKnow.length > 0 ? (
        <div className="flex flex-col gap-[48px]">
          {goodToKnow.map((g, index) => (
            <GoodToKnowCard data={g} key={index} />
          ))}
        </div>
      ) : (
        <div className="flex h-screen items-start justify-center">
          <p className="text-muted-foreground text-p-md font-extralight italic">
            {"Aucun résultat"}
          </p>
        </div>
      )}
    </div>
  );
}
