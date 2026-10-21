"use client";

import { DataPagination } from "@/components/data-pagination";
import EmptyResult from "@/components/empty-result";
import GenericErrorSection from "@/components/generic-error-section";
import { MultiSelect } from "@/components/multi-select";
import PersonCard from "@/components/person-card";
import PersonCardLoader from "@/components/person-card-loader";
import RubricCustomMainTitle from "@/components/rubric-custom-main-title";
import { useDirectories } from "@/hooks/directory/use-directory";
import { usePageParam } from "@/hooks/use-page-param";
import { getCountryOptions } from "@/lib/countries";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const COUNTRIES = getCountryOptions();

const LIMIT = 9;

export default function DirectoryPage() {
  const { page, resetPage } = usePageParam();

  const [countries, setCountries] = useState<string[]>();

  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "";

  const handleCountryChange = (countries: string[]) => {
    setCountries(countries);
    resetPage();
  };

  const { directories, meta, isLoading, refetch, isFetching, isError } =
    useDirectories({
      limit: LIMIT,
      page: page,
      notCountry: ["Madagascar"],
      country: countries,
      search: search,
    });

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <section className="mb-[60.5px] flex flex-col max-sm:items-center max-sm:justify-center">
        <RubricCustomMainTitle
          title="Annuaire de"
          secondaryTitle="la Diaspora"
          description="Trouvez les talents malagasy partout dans le monde Explorez les profils de professionnels, d’entreprises et d’associations issus de la diaspora malagasy."
          leftLabel="Professionnel Madagascar"
          leftLink="#"
          rightLabel="Diaspora"
          rightLink="/directory"
          defaultActive="Diaspora"
        />
      </section>

      <MultiSelect
        options={COUNTRIES}
        onValueChange={handleCountryChange}
        placeholder="Sélectionner un pays"
        variant="secondary"
        maxCount={1}
        className="max-sm:text-p-sm! bg-bg-gray text-primary h-[71px] w-[230px]! rounded-[40px] border-2 border-[#EBEBEB] p-[15px] lg:h-[51px] lg:w-[355px]!"
      />

      {isLoading && (
        <section className="bg-foreground flex w-full flex-col items-center justify-center gap-10 py-30">
          <div className="3xl:grid-cols-3 grid w-full grid-cols-1 justify-items-center gap-[20px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-2">
            {Array(LIMIT)
              .fill(0)
              .map((e, index) => (
                <PersonCardLoader key={index} />
              ))}
          </div>
        </section>
      )}

      {isError && (
        <section className="bg-foreground flex w-full flex-col items-center justify-center py-30">
          <GenericErrorSection
            message="Impossible de charger l'annuaire"
            refetch={refetch}
            className="h-[800px] w-full"
            isFetching={isFetching}
            backgroundColor="foreground"
          />
        </section>
      )}

      {directories.length > 0 && isLoading === false && (
        <section className="bg-foreground flex w-full flex-col items-center justify-center gap-10 py-30">
          <div className="3xl:grid-cols-3 grid w-full grid-cols-1 justify-items-center gap-[20px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-2">
            {directories.map((directory) => (
              <PersonCard directory={directory} key={directory.id} />
            ))}
          </div>
          <DataPagination meta={meta} />
        </section>
      )}

      {directories.length === 0 && isLoading == false && isError == false && (
        <EmptyResult />
      )}
    </div>
  );
}
