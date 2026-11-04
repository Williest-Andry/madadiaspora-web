"use client";

import GenericErrorSection from "@/components/generic-error-section";
import { useAblum } from "@/hooks/album/use-album";
import { AlbumParams } from "@/interfaces/album/album-types";
import RubricCustomMainTitle from "@/components/rubric-custom-main-title";
import AlbumCard from "@/features/diasporalbum/app/album-card";
import AlbumCardLoader from "@/features/diasporalbum/app/album-card-loader";

const LIMIT = 10;

export default function DiasporAlbumPage() {
  const params: AlbumParams = {
    limit: LIMIT,
    page: 1,
  };

  const { album, error, isLoading, refetch, isFetching } = useAblum(params);

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
        <section className="flex h-full w-full flex-col items-center justify-center gap-10">
          {album.map((cover) => (
            <AlbumCard data={cover} />
          ))}
        </section>
      )}

      {isLoading && (
        <div className="flex h-full w-full flex-col items-center justify-center gap-10">
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
