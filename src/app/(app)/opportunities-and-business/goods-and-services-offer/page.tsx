"use client";

import CustomMainTitle from "@/features/opportunities-and-business/custom-main-title";
import { BASE_PATHNAME } from "../investment/page";
import OpportunitiesNavigation from "@/features/opportunities-and-business/opportunities-navigation";
import { useOpportunities } from "@/hooks/opportunity/use-opportunity";
import { DataPagination } from "@/components/data-pagination";
import GoodsAndServicesOfferCard from "@/features/opportunities-and-business/goods-and-services-offer/goods-and-services-offer-card";
import { usePageParam } from "@/hooks/use-page-param";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import FiltersSection from "@/features/opportunities-and-business/filters-section";
import GoodsAndServicesOfferLoader from "@/features/opportunities-and-business/goods-and-services-offer/goods-and-services-offer-loader";
import GenericErrorSection from "@/components/generic-error-section";
import EmptyResult from "@/components/empty-result";

const LIMIT = 5;

export default function GoodsAndServicesOfferPage() {
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
      type: "OFFER_SERVICE",
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
        defaultActive="Offres de bien et service"
        firstTitle="Offres de bien et service"
        firstDescription="Recherchez ou proposez des biens et services, favorisant ainsi la coopération entre les membres de la diaspora et les acteurs locaux."
        secondTitle="Demandes de bien et service"
        secondDescription="Recherchez ou proposez des biens et services, favorisant ainsi la coopération entre les membres de la diaspora et les acteurs locaux."
      />

      <OpportunitiesNavigation />

      <FiltersSection
        title="Toutes nos offres de biens et services"
        onChangeCountries={handleChangeCountry}
        sortDateValue={sortCreated}
        onChangeSortDate={setSortCreated}
        categoryValue={categories}
        onChangeCategory={setCategories}
      />

      {isLoading &&
        new Array(LIMIT)
          .fill(0)
          .map((l, index) => <GoodsAndServicesOfferLoader key={index} />)}

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
            <GoodsAndServicesOfferCard
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
          <EmptyResult message="Aucun résultat pour les offres de bien et de service en ce moment, merci !" />
        )}
    </div>
  );
}
