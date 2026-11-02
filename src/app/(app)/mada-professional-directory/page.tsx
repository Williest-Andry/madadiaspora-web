"use client";

import { DataPagination } from "@/components/data-pagination";
import EmptyResult from "@/components/empty-result";
import GenericErrorSection from "@/components/generic-error-section";
import PersonCard from "@/components/person-card";
import PersonCardLoader from "@/components/person-card-loader";
import RubricCustomMainTitle from "@/components/rubric-custom-main-title";
import { useDirectories } from "@/hooks/directory/use-directory";
import { usePageParam } from "@/hooks/use-page-param";
import { useSearchParams } from "next/navigation";

const LIMIT = 9;

export default function DirectoryPage() {
  const { page } = usePageParam();

  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "";

  const { directories, meta, isLoading, refetch, isFetching, isError } =
    useDirectories({
      limit: LIMIT,
      page: page,
      country: ["Madagascar"],
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
          leftLink="/mada-professional-directory"
          rightLabel="Diaspora"
          rightLink="/directory"
          defaultActive="Professionnel Madagascar"
        />
      </section>

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
        <section className="bg-foreground flex w-full flex-col items-center justify-center gap-10">
          <div className="3xl:grid-cols-3 grid w-full grid-cols-1 justify-items-center gap-[20px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-2">
            {directories.map((directory) => (
              <PersonCard directory={directory} key={directory.id} />
            ))}
          </div>
          <DataPagination meta={meta} />
        </section>
      )}

      {directories.length === 0 && isLoading == false && isError == false && (
        <EmptyResult message="Aucun résultat par le moment, merci !" />
      )}
    </div>
  );
}
