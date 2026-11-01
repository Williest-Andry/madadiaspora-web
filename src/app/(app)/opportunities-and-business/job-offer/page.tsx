"use client";

import CustomMainTitle from "@/features/opportunities-and-business/custom-main-title";
import { BASE_PATHNAME } from "../investment/page";
import FiltersSection from "@/features/opportunities-and-business/filters-section";
import { useState } from "react";
import { usePageParam } from "@/hooks/use-page-param";
import { useOpportunities } from "@/hooks/opportunity/use-opportunity";
import { useSearchParams } from "next/navigation";
import { DataPagination } from "@/components/data-pagination";
import JobOfferCard from "@/features/opportunities-and-business/job-offer/job-offer-card";
import GenericErrorSection from "@/components/generic-error-section";
import JobOfferCardLoader from "@/features/opportunities-and-business/job-offer/job-offer-card-loader";
import EmptyResult from "@/components/empty-result";
import OpportunitiesNavigation from "@/features/opportunities-and-business/opportunities-navigation";

const LIMIT = 5;

export default function JobOfferPage() {
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
      type: "OFFER_JOB",
    });

  const handleChangeCountry = (newCountries: string[]) => {
    resetPage();
    setCountries(newCountries);
  };

  return (
    <div className="flex flex-col items-center gap-[39px]">
      <CustomMainTitle
        leftLabel="Offres d’emploi"
        leftLink={`${BASE_PATHNAME}/job-offer`}
        rightLabel="Demandes d’emploi"
        rightLink={`${BASE_PATHNAME}/job-application`}
        defaultActive="Offres d’emploi"
        firstTitle="Offres d’emploi"
        firstDescription="Publiez ou consultez des offres d'emploi, qu'il s'agisse de missions temporaires ou de postes à long terme, à Madagascar ou à l'international."
        secondTitle="Demandes d’emploi"
        secondDescription="Publiez ou consultez des offres d'emploi, qu'il s'agisse de missions temporaires ou de postes à long terme, à Madagascar ou à l'international."
      />

      <OpportunitiesNavigation />

      <FiltersSection
        title="Toutes nos offres d’emploi"
        onChangeCountries={handleChangeCountry}
        sortDateValue={sortCreated}
        onChangeSortDate={setSortCreated}
        categoryValue={categories}
        onChangeCategory={setCategories}
      />

      {isLoading &&
        new Array(LIMIT)
          .fill(0)
          .map((l, index) => <JobOfferCardLoader key={index} />)}

      {isError && (
        <GenericErrorSection
          isFetching={isFetching}
          message="Impossible de charger les données d'offres d'emploi"
          refetch={refetch}
          backgroundColor="foreground"
          className="h-screen"
        />
      )}

      {opportunities.length > 0 && (
        <div className="flex flex-col items-center gap-[70px]">
          {opportunities.map((opportunity) => (
            <JobOfferCard data={opportunity} key={opportunity.id} />
          ))}
          <DataPagination meta={meta} />
        </div>
      )}

      {opportunities.length === 0 &&
        isError === false &&
        isLoading === false && (
          <EmptyResult message="Aucun résultat pour les offres d'emploi en ce moment, merci !" />
        )}
    </div>
  );
}
