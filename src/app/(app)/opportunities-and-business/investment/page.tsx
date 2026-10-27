"use client";

import { DataPagination } from "@/components/data-pagination";
import EmptyResult from "@/components/empty-result";
import GenericErrorSection from "@/components/generic-error-section";
import CustomMainTitle from "@/feature/opportunities-and-business/custom-main-title";
import FiltersSection from "@/feature/opportunities-and-business/filters-section";
import OpportunityCard from "@/feature/opportunities-and-business/investment-partnership/opportunity-card";
import OpportunityCardLoader from "@/feature/opportunities-and-business/investment-partnership/opportunity-card-loader";
import { useOpportunities } from "@/hooks/opportunity/use-opportunity";
import { usePageParam } from "@/hooks/use-page-param";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export const BASE_PATHNAME = "/opportunities-and-business";

const LIMIT = 5;

export default function InvestmentPage() {
  const [sortCreated, setSortCreated] = useState(false);

  const [countries, setCountries] = useState<string[]>();

  const [categories, setCategories] = useState<string[]>([]);

  const { page, resetPage } = usePageParam();

  const queryParams = useSearchParams();
  const search = queryParams.get("search") ?? "";

  const { opportunities, meta, isLoading, isError, isFetching, refetch } =
    useOpportunities({
      page: page,
      limit: LIMIT,
      search: search,
      country: countries,
      sortCreated: sortCreated,
      category: categories,
    });

  const handleChangeCountry = (newCountries: string[]) => {
    resetPage();
    setCountries(newCountries);
  };

  return (
    <div className="flex flex-col gap-[39px]">
      <CustomMainTitle
        leftLabel="Investissements"
        leftLink={`${BASE_PATHNAME}/investment`}
        rightLabel="Partenariat"
        rightLink={`${BASE_PATHNAME}/partnership`}
        defaultActive="Investissements"
        firstTitle="Investissements"
        firstDescription="Publiez ou consultez des offres d'emploi, qu'il s'agisse de missions temporaires ou de postes à long terme, à Madagascar ou à l'international."
        secondTitle="Partenariat"
        secondDescription="Recherchez ou proposez des biens et services, favorisant ainsi la coopération entre les membres de la diaspora et les acteurs locaux."
      />

      <FiltersSection
        title="Opportunités à saisir"
        onChangeCountries={handleChangeCountry}
        sortDateValue={sortCreated}
        onChangeSortDate={setSortCreated}
        categoryValue={categories}
        onChangeCategory={setCategories}
      />

      {isLoading &&
        new Array(LIMIT)
          .fill(0)
          .map((l, index) => <OpportunityCardLoader key={index} />)}

      {isError && (
        <GenericErrorSection
          isFetching={isFetching}
          message="Impossible de charger les données de la page Investissement"
          refetch={refetch}
          backgroundColor="foreground"
          className="h-screen"
        />
      )}

      {opportunities.length > 0 && (
        <div className="flex flex-col gap-[70px]">
          {opportunities.map((opportunity) => (
            <OpportunityCard data={opportunity} key={opportunity.id} />
          ))}
          <DataPagination meta={meta} />
        </div>
      )}

      {opportunities.length === 0 &&
        isError === false &&
        isLoading === false && <EmptyResult />}
    </div>
  );
}
