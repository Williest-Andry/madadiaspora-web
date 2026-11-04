"use client";

import CustomMainTitleSection from "@/components/custom-main-title-section";
import GenericErrorSection from "@/components/generic-error-section";
import ToggleGroupDemo from "@/components/shadcn-space/toggle-group/toggle-group-01";
import AlbumCarouselMobile from "@/features/diasporalbum/album-carousel-mobile";
import AlbumSection from "@/features/diasporalbum/album-section";
import DiasporalbumLoader from "@/features/diasporalbum/diasporalbum-loader";
import OtherPartnersSection from "@/features/other-partners/other-partners-section";
import { useAblum } from "@/hooks/album/use-album";
import { AlbumParams } from "@/interfaces/album/album-types";

export default function DiasporAlbumPage() {
  const params: AlbumParams = {
    limit: 10,
    page: 1,
  };

  const { album, error, isLoading, refetch, isFetching } = useAblum(params);

  return (
    <div className="flex w-full flex-col">
      <section className="mb-[65px] flex flex-col max-sm:items-center max-sm:justify-center">
        <CustomMainTitleSection
          primaryTitle="Diaspor’"
          secondaryTitle="Album"
          description="Découvrez la diaspora malagasy à travers des photos et des vidéos qui racontent ses rencontres, ses événements et ses moments de partage."
        />

        <div className="flex flex-col sm:flex-row sm:px-[132px]">
          <ToggleGroupDemo
            leftLabel="Photos"
            leftLink="#"
            rightLabel="Vidéos"
            rightLink="#"
          />
        </div>
      </section>

      {album.length > 0 && (
        <section className="bg-foreground flex items-center justify-center overflow-hidden pt-50 pb-50">
          <AlbumSection album={album} showCTAButton={false} />

          <AlbumCarouselMobile album={album} />
        </section>
      )}

      {isLoading && <DiasporalbumLoader showText={false} />}

      {error && (
        <GenericErrorSection
          message="Impossible de charger les photos de la Diaspor'album"
          refetch={refetch}
          isFetching={isFetching}
          className="h-[800px]"
          backgroundColor="foreground"
        />
      )}

      <OtherPartnersSection />
    </div>
  );
}
