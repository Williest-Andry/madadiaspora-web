"use client";

import { DataPagination } from "@/components/data-pagination";
import EmptyResult from "@/components/empty-result";
import GenericErrorSection from "@/components/generic-error-section";
import SearchBarWithCountry from "@/components/search-bar-with-country";
import ToggleGroupDemo from "@/components/shadcn-space/toggle-group/toggle-group-01";
import CorrespondentCard from "@/features/correspondent/correspondent-card";
import CorrespondentCardLoader from "@/features/correspondent/correspondent-card-loader";
import OtherPartnersSection from "@/features/other-partners/other-partners-section";
import { useCorrespondents } from "@/hooks/correspondent/use-correspondent";
import { usePageParam } from "@/hooks/use-page-param";
import { getCountryOptions } from "@/lib/countries";
import { useState } from "react";

const COUNTRIES = getCountryOptions();

const LIMIT = 8;

export default function CorrespondentsPage() {
  const { page, resetPage } = usePageParam();

  const [countrySelected, setCountrySelected] = useState<string[]>([]);

  const [searchFilter, setSearchFilter] = useState("");

  const { correspondents, meta, isError, isLoading, refetch, isFetching } =
    useCorrespondents({
      limit: LIMIT,
      page: page,
      country: countrySelected,
      search: searchFilter,
    });

  const handleChangeCountry = (newValue: string[]) => {
    resetPage();
    setCountrySelected(newValue);
  };

  return (
    <div className="flex w-full flex-col">
      <section className="mb-[60.5px] flex w-full flex-col max-sm:items-center max-sm:justify-center">
        <article className="mt-[30px] mb-[110px] flex w-full flex-col items-center justify-center gap-[17px] lg:mt-[77px]">
          <h1 className="max-xs:w-[70%] text-title-sm sm:text-title-md lg:text-title-xl text-center leading-[110%] font-bold tracking-normal">
            {"Nos"} <span className="text-secondary">{"correspondants"}</span>{" "}
            {"à travers le"}&nbsp;
            <span className="text-secondary">{"monde"}</span>
          </h1>
          <p className="text-muted-foreground text-p-sm sm:text-p-md lg:text-p-xl w-[60%] text-center leading-[32px] tracking-normal">
            {
              "Retrouvez un correspondant Madadiaspora présent dans votre pays ou votre région."
            }
          </p>
        </article>

        <div className="flex flex-col items-center justify-between max-2xl:gap-10 sm:px-[122px] 2xl:flex-row">
          <ToggleGroupDemo
            leftLabel="Nous contacter"
            leftLink="/contact"
            rightLabel="Nos correspondants"
            rightLink="/contact/correspondents"
            defaultActive="Nos correspondants"
          />

          <SearchBarWithCountry
            searchValue={searchFilter}
            onChangeSearch={(newValue) => setSearchFilter(newValue)}
            countryValue={COUNTRIES}
            onChangeCountry={handleChangeCountry}
          />
        </div>
      </section>

      {isLoading && (
        <section className="bg-foreground flex w-full flex-col items-center justify-center py-30">
          <div className="grid-2xl:w-[1657px] grid-2xl:grid-cols-4 grid-xl:w-[1280px] grid-xl:grid-cols-3 mb-10 grid w-full grid-cols-1 justify-items-center gap-[20px] lg:w-[850px] lg:grid-cols-2">
            {Array(LIMIT)
              .fill(0)
              .map((e, index) => (
                <CorrespondentCardLoader key={index} />
              ))}
          </div>
        </section>
      )}

      {isError && (
        <section className="bg-foreground flex w-full flex-col items-center justify-center py-30">
          <GenericErrorSection
            message="Impossible de charger les correspondants"
            refetch={refetch}
            className="h-[800px] w-full"
            isFetching={isFetching}
            backgroundColor="foreground"
          />
        </section>
      )}

      {correspondents.length > 0 && (
        <section className="bg-foreground flex w-full flex-col items-center justify-center py-30">
          <div className="grid-2xl:w-[1657px] grid-2xl:grid-cols-4 grid-xl:w-[1280px] grid-xl:grid-cols-3 mb-10 grid w-full grid-cols-1 justify-items-center gap-[20px] lg:w-[850px] lg:grid-cols-2">
            {correspondents.map((correspondent) => (
              <CorrespondentCard data={correspondent} key={correspondent.id} />
            ))}
          </div>

          <DataPagination meta={meta} />
        </section>
      )}

      {isLoading === false &&
        isError === false &&
        correspondents.length < 1 && (
          <EmptyResult
            message={"Aucun résultat pour le moment, merci !"}
            className="bg-foreground flex items-center"
          />
        )}

      <OtherPartnersSection />
    </div>
  );
}
