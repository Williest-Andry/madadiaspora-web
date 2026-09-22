import Image from "next/image";
import AlbumSection from "./album-section";
import AlbumCarouselMobile from "./album-carousel-mobile";
import MobileCTAButton from "@/components/mobile-cta-button";
import { useAblum } from "@/hooks/album/use-album";
import { AlbumParams } from "@/interfaces/album/album-types";

export default function DiasporalbumSection() {
  const params: AlbumParams = {
    limit: 10,
    page: 1,
  };

  const { album, error, isLoading } = useAblum(params);

  if (error) return <p>ERREUR</p>;
  if (isLoading) return <p>Chargement ...</p>;

  return (
    <section className="bg-foreground text-popover flex flex-col items-center justify-center gap-[30px] overflow-hidden pt-[162px] pb-[197px]">
      <article className="flex w-full flex-col items-center justify-between gap-[17px] lg:w-[958px]">
        <article className="flex w-full flex-col items-center sm:w-126.25 2xl:w-[819.5px]">
          <figure className="mb-6.75 flex gap-2.25">
            <div className="relative h-5 w-5">
              <Image
                src={"/yellow-globe.png"}
                alt="little yellow globe image"
                fill
              />
            </div>
            <span className="text-[14px] leading-5 font-semibold uppercase">
              {"Diaspor'Album"}
            </span>
          </figure>

          <figure className="text-title-sm sm:text-title-md 3xl:text-title-xl mb-4.25 w-full text-center leading-[110%] font-bold xl:w-186.25">
            <h2>
              Moments{" "}
              <span className="text-secondary">
                {"précieux de la communauté"}
              </span>
            </h2>
          </figure>
        </article>
        <p className="text-p-sm md:text-p-md 3xl:text-p-xl w-[90%] text-center leading-8 sm:text-[17px]">{`Découvrez en images les événements, rencontres et instants marquants qui rassemblent notre communauté. Revivez et partagez les souvenirs qui renforcent les liens de la diaspora.`}</p>
      </article>

      <AlbumSection album={album} />

      <MobileCTAButton className="mb-[60px] flex xl:hidden" />

      <AlbumCarouselMobile album={album} />
    </section>
  );
}
