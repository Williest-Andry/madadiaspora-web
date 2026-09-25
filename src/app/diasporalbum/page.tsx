"use client";

import CustomMainTitleSection from "@/components/custom-main-title-section";
import ToggleGroupDemo from "@/components/shadcn-space/toggle-group/toggle-group-01";
import AlbumCarouselMobile from "@/feature/diasporalbum/album-carousel-mobile";
import AlbumSection from "@/feature/diasporalbum/album-section";
import OtherPartnersSection from "@/feature/other-partners/other-partners-section";
import { useAblum } from "@/hooks/album/use-album";
import { AlbumParams } from "@/interfaces/album/album-types";

export default function DiasporAlbumPage() {
  const params: AlbumParams = {
    limit: 10,
    page: 1,
  };

  const { album, error, isLoading } = useAblum(params);

  if (error)
    return <p className="text-title-xl text-center uppercase">ERREUR</p>;
  if (isLoading)
    return (
      <p className="text-title-xl text-center uppercase">Chargement ...</p>
    );

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

      <section className="bg-foreground flex items-center justify-center overflow-hidden pt-50 pb-50">
        <AlbumSection album={album} showCTAButton={false} />

        <AlbumCarouselMobile album={album} />
      </section>

      <OtherPartnersSection />
    </div>
  );
}
