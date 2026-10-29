"use client";

import CustomMainTitle from "@/feature/opportunities-and-business/custom-main-title";
import { BASE_PATHNAME } from "../investment/page";
import FiltersSection from "@/feature/opportunities-and-business/filters-section";
import { useState } from "react";
import { usePageParam } from "@/hooks/use-page-param";
import { useOpportunities } from "@/hooks/opportunity/use-opportunity";
import { useSearchParams } from "next/navigation";
import { DataPagination } from "@/components/data-pagination";
import JobOfferCard from "@/feature/opportunities-and-business/job-offer/job-offer-card";
import GenericErrorSection from "@/components/generic-error-section";
import JobOfferCardLoader from "@/feature/opportunities-and-business/job-offer/job-offer-card-loader";
import EmptyResult from "@/components/empty-result";
import OpportunitiesNavigation from "@/feature/opportunities-and-business/opportunities-navigation";
import GoodsAndServicesDemandCard from "@/feature/opportunities-and-business/goods-and-services-demand/goods-and-services-demand-card";
import GoodsAndServicesDemandLoader from "@/feature/opportunities-and-business/goods-and-services-demand/goods-and-services-demand-loader";

const LIMIT = 5;

export default function GoodsAndServicesDemandPage() {
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
      type: "REQUEST_SERVICE",
    });

  const handleChangeCountry = (newCountries: string[]) => {
    resetPage();
    setCountries(newCountries);
  };

  return (
    <div className="flex flex-col items-center gap-[39px]">
      <CustomMainTitle
        leftLabel="Offres de bien et service"
        leftLink={`${BASE_PATHNAME}/goods-and-services-offer`}
        rightLabel="Demandes de bien et service"
        rightLink={`${BASE_PATHNAME}/goods-and-services-demand`}
        defaultActive="Demandes de bien et service"
        firstTitle="Offres de bien et service"
        firstDescription="Recherchez ou proposez des biens et services, favorisant ainsi la coopération entre les membres de la diaspora et les acteurs locaux."
        secondTitle="Demandes de bien et service"
        secondDescription="Recherchez ou proposez des biens et services, favorisant ainsi la coopération entre les membres de la diaspora et les acteurs locaux."
      />

      <OpportunitiesNavigation />

      <FiltersSection
        title="Toutes nos offres de bien et service"
        onChangeCountries={handleChangeCountry}
        sortDateValue={sortCreated}
        onChangeSortDate={setSortCreated}
        categoryValue={categories}
        onChangeCategory={setCategories}
      />

      {isLoading &&
        new Array(LIMIT)
          .fill(0)
          .map((l, index) => <GoodsAndServicesDemandLoader key={index} />)}

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
            <GoodsAndServicesDemandCard
              data={opportunity}
              key={opportunity.id}
            />
          ))}
          <DataPagination meta={meta} />
        </div>
      )}

      {opportunities.length === 0 &&
        isError === false &&
        isLoading === false && (
          <EmptyResult message="Aucun résultat pour les offres de bien et service en ce moment, merci !" />
        )}
    </div>
  );
}
