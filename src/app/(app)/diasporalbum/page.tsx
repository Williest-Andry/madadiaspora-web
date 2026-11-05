"use client";

import GenericErrorSection from "@/components/generic-error-section";
import { useAblum } from "@/hooks/album/use-album";
import RubricCustomMainTitle from "@/components/rubric-custom-main-title";
import AlbumCardLoader from "@/features/diasporalbum/app/album-card-loader";
import AlbumCardLightBox from "@/features/diasporalbum/app/album-card-lightbox";
import { DataPagination } from "@/components/data-pagination";
import { usePageParam } from "@/hooks/use-page-param";

const LIMIT = 10;

export default function DiasporAlbumPage() {
  const { page } = usePageParam();

  const { album, error, isLoading, refetch, isFetching, meta } = useAblum({
    limit: LIMIT,
    page: page,
  });

  return (
    <div className="flex h-full w-full flex-col gap-10">
      <section className="flex flex-col max-sm:items-center max-sm:justify-center">
        <RubricCustomMainTitle
          title="Diaspor’"
          secondaryTitle="Album"
          description="Découvrez la diaspora malagasy à travers des photos et des vidéos qui racontent ses rencontres, ses événements et ses moments de partage."
          leftLabel="Photo"
          leftLink="#"
          rightLabel="Vidéo"
          rightLink="#"
          defaultActive="Photo"
        />
      </section>

      {album.length > 0 && (
        <section className="mb-10 flex h-full w-full flex-wrap items-center justify-center gap-10">
          {album.map((cover) => (
            <AlbumCardLightBox data={cover} key={cover.id} />
          ))}

          <DataPagination meta={meta} />
        </section>
      )}

      {isLoading && (
        <div className="flex h-full w-full flex-wrap items-center justify-center gap-10">
          {new Array(LIMIT).fill(0).map((l, index) => (
            <AlbumCardLoader key={index} />
          ))}
        </div>
      )}

      {error && (
        <GenericErrorSection
          message="Impossible de charger les photos de la Diaspor'album"
          refetch={refetch}
          isFetching={isFetching}
          className="h-screen"
          backgroundColor="foreground"
        />
      )}
    </div>
  );
}
