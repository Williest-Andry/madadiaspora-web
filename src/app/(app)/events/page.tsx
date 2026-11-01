"use client";

import { DataPagination } from "@/components/data-pagination";
import EmptyResult from "@/components/empty-result";
import GenericErrorSection from "@/components/generic-error-section";
import RubricCustomMainTitle from "@/components/rubric-custom-main-title";
import EventCard from "@/features/event/event-card";
import EventCardLoader from "@/features/event/event-card-loader";
import FiltersSection from "@/features/opportunities-and-business/filters-section";
import { useEvents } from "@/hooks/event/use-event";
import { usePageParam } from "@/hooks/use-page-param";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const LIMIT = 6;

export default function EventsPage() {
  const [sortCreated, setSortCreated] = useState(false);

  const [countries, setCountries] = useState<string[]>();

  const [categories, setCategories] = useState<string[]>([]);

  const { page, resetPage } = usePageParam();

  const search = useSearchParams().get("search") ?? "";

  const { events, meta, isLoading, isError, refetch, isFetching } = useEvents({
    limit: LIMIT,
    page: page,
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
    <div className="bg-foreground flex flex-col gap-[54px]">
      <RubricCustomMainTitle
        title="Événements"
        description="Les rendez-vous qui réunissent Madagascar et sa diaspora."
        leftLabel="Calendrier"
        leftLink="#"
        rightLabel="Événements"
        rightLink="#"
        defaultActive="Événements"
      />

      <FiltersSection
        title="Évènements"
        onChangeCountries={handleChangeCountry}
        sortDateValue={sortCreated}
        onChangeSortDate={setSortCreated}
        categoryValue={categories}
        onChangeCategory={setCategories}
      />

      {isError && (
        <GenericErrorSection
          isFetching={isFetching}
          message="Impossible de charger les évènements"
          refetch={refetch}
          backgroundColor="foreground"
          className="h-screen"
        />
      )}

      {isLoading &&
        new Array(LIMIT)
          .fill(0)
          .map((l, index) => <EventCardLoader key={index} />)}

      {events.length > 0 && (
        <div className="flex flex-col gap-[32px]">
          {events.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
          <DataPagination meta={meta} />
        </div>
      )}

      {events.length === 0 && isError === false && isLoading === false && (
        <EmptyResult />
      )}
    </div>
  );
}
