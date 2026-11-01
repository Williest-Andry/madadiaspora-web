"use client";

import { DataPagination } from "@/components/data-pagination";
import GenericErrorSection from "@/components/generic-error-section";
import PersonCard from "@/components/person-card";
import PersonCardLoader from "@/components/person-card-loader";
import SearchBarWithCountry from "@/components/search-bar-with-country";
import ToggleGroupDemo from "@/components/shadcn-space/toggle-group/toggle-group-01";
import OtherPartnersSection from "@/features/other-partners/other-partners-section";
import { useCorrespondents } from "@/hooks/correspondent/use-correspondent";
import { Meta } from "@/interfaces/global";
import { getCountryOptions } from "@/lib/countries";
import { useState } from "react";

const COUNTRIES = getCountryOptions();

const MOCK_META: Meta = {
  limit: 10,
  page: 1,
  total: 50,
};

export default function CorrespondentsPage() {
  const { correspondents, data, error, isLoading, refetch, isFetching } =
    useCorrespondents();

  const [searchFilters, setSearchFilters] = useState("");

  const [countrySelected, setCountrySelected] = useState<string[]>([]);

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
            rightLink="/contact/correspondants"
            defaultActive="Nos correspondants"
          />

          <SearchBarWithCountry
            value={searchFilters}
            onChange={(newValue) => setSearchFilters(newValue)}
            countryValue={COUNTRIES}
            onChangeCountry={(newValue) => setCountrySelected(newValue)}
          />
        </div>
      </section>

      {isLoading && (
        <section className="bg-foreground flex w-full flex-col items-center justify-center py-30">
          <div className="grid-2xl:w-[1657px] grid-2xl:grid-cols-4 grid-xl:w-[1280px] grid-xl:grid-cols-3 mb-10 grid w-full grid-cols-1 justify-items-center gap-[20px] lg:w-[850px] lg:grid-cols-2">
            {Array(8)
              .fill(0)
              .map((e, index) => (
                <PersonCardLoader key={index} />
              ))}
          </div>
        </section>
      )}

      {/* {correspondents.length > 0 && (
        <section className="bg-foreground flex w-full flex-col items-center justify-center py-30">
          <div className="grid-2xl:w-[1657px] grid-2xl:grid-cols-4 grid-xl:w-[1280px] grid-xl:grid-cols-3 mb-10 grid w-full grid-cols-1 justify-items-center gap-[20px] lg:w-[850px] lg:grid-cols-2">
            {"À REMPLACER PAR LES VRAIES DONNÉES"}
          </div>

          <DataPagination meta={MOCK_META} />
        </section>
      )} */}

      {error && (
        <section className="bg-foreground flex w-full flex-col items-center justify-center py-30">
          <GenericErrorSection
            message="Impossible de charger les autres partenaires"
            refetch={refetch}
            className="h-[800px] w-full"
            isFetching={isFetching}
            backgroundColor="foreground"
          />
        </section>
      )}

      {"À REMPLACER PAR LES VRAIES DONNÉES"}

      <OtherPartnersSection />
    </div>
  );
}
