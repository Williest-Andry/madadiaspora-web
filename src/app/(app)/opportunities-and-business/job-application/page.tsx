"use client";

import CustomMainTitle from "@/features/opportunities-and-business/custom-main-title";
import { BASE_PATHNAME } from "../investment/page";
import { useOpportunities } from "@/hooks/opportunity/use-opportunity";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { usePageParam } from "@/hooks/use-page-param";
import JobApplicationCard from "@/features/opportunities-and-business/job-application/job-application-card";
import PersonCardLoader from "@/components/person-card-loader";
import GenericErrorSection from "@/components/generic-error-section";
import FiltersSection from "@/features/opportunities-and-business/filters-section";
import { DataPagination } from "@/components/data-pagination";
import EmptyResult from "@/components/empty-result";
import OpportunitiesNavigation from "@/features/opportunities-and-business/opportunities-navigation";

const LIMIT = 6;

export default function JobApplicationPage() {
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
      type: "REQUEST_JOB",
    });

  const handleChangeCountry = (newCountries: string[]) => {
    resetPage();
    setCountries(newCountries);
  };

  return (
    <div className="flex flex-col gap-[39px]">
      <CustomMainTitle
        leftLabel="Offres d’emploi"
        leftLink={`${BASE_PATHNAME}/job-offer`}
        rightLabel="Demandes d’emploi"
        rightLink={`${BASE_PATHNAME}/job-application`}
        defaultActive="Demandes d’emploi"
        firstTitle="Offres d’emploi"
        firstDescription="Publiez ou consultez des offres d'emploi, qu'il s'agisse de missions temporaires ou de postes à long terme, à Madagascar ou à l'international."
        secondTitle="Demandes d’emploi"
        secondDescription="Publiez ou consultez des offres d'emploi, qu'il s'agisse de missions temporaires ou de postes à long terme, à Madagascar ou à l'international."
      />

      <OpportunitiesNavigation />

      <FiltersSection
        title=" Nos candidatures disponibles"
        onChangeCountries={handleChangeCountry}
        sortDateValue={sortCreated}
        onChangeSortDate={setSortCreated}
        categoryValue={categories}
        onChangeCategory={setCategories}
      />

      {isLoading && (
        <section className="3xl:grid-cols-3 grid w-full grid-cols-1 justify-items-center gap-[20px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-2">
          {new Array(LIMIT).fill(0).map((l, index) => (
            <PersonCardLoader key={index} />
          ))}
        </section>
      )}

      {isError && (
        <GenericErrorSection
          isFetching={isFetching}
          message="Impossible de charger les données de demandes d'emploi"
          refetch={refetch}
          backgroundColor="foreground"
          className="h-screen"
        />
      )}

      {opportunities.length > 0 && (
        <section className="bg-foreground flex w-full flex-col items-center justify-center gap-10">
          <div className="3xl:grid-cols-3 grid w-full grid-cols-1 justify-items-center gap-[20px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-2">
            {opportunities.map((opportunity) => (
              <JobApplicationCard data={opportunity} key={opportunity.id} />
            ))}
          </div>
          <DataPagination meta={meta} />
        </section>
      )}

      {opportunities.length === 0 &&
        isError === false &&
        isLoading === false && (
          <EmptyResult message="Aucun résultat pour les demandes d'emploi en ce moment, merci !" />
        )}
    </div>
  );
}
