"use client";

import { DataPagination } from "@/components/data-pagination";
import EmptyResult from "@/components/empty-result";
import GenericErrorSection from "@/components/generic-error-section";
import { MultiSelect } from "@/components/multi-select";
import GoodToKnowCard from "@/features/good-to-know/good-to-know-card";
import GoodToKnowSkeleton from "@/features/good-to-know/good-to-know-loader";
import { MainTitle } from "@/features/good-to-know/main-title";
import { useGoodToKnow } from "@/hooks/good-to-know/use-good-to-know";
import { usePageParam } from "@/hooks/use-page-param";
import { getCountryOptions } from "@/lib/countries";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const COUNTRIES = getCountryOptions();
const LIMIT = 5;

export default function GoodToKnowPage() {
  const [countrySelected, setCountrySelected] = useState<string[]>([]);

  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "";

  const { page, resetPage } = usePageParam();

  const handleCountryChange = (countries: string[]) => {
    setCountrySelected(countries);
    resetPage();
  };

  const { goodToKnow, isLoading, isError, isFetching, refetch, meta } =
    useGoodToKnow({
      page: page,
      limit: LIMIT,
      country: countrySelected,
      search: search,
    });

  return (
    <div className="flex flex-col gap-[48px]">
      <MainTitle />

      <MultiSelect
        options={COUNTRIES}
        onValueChange={handleCountryChange}
        placeholder="Sélectionner un pays"
        variant="secondary"
        maxCount={1}
        className="max-sm:text-p-sm! bg-bg-gray text-primary h-[71px] w-[230px]! rounded-[40px] border-2 border-[#EBEBEB] p-[15px] lg:h-[51px] lg:w-[355px]!"
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

      {goodToKnow.length > 0 && (
        <div className="flex flex-col gap-[48px]">
          {goodToKnow.map((g, index) => (
            <GoodToKnowCard data={g} key={index} />
          ))}
        </div>
      )}

      {goodToKnow.length === 0 && isLoading == false && isError == false && (
        <EmptyResult />
      )}

      {meta && <DataPagination meta={meta} />}
    </div>
  );
}
