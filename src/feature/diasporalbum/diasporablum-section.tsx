import Image from "next/image";
import AlbumSection from "./album-section";
import AlbumCarouselMobile from "./album-carousel-mobile";
import CTAButton from "@/components/cta-button";

export default function DiasporalbumSection() {
  return (
    <section className="bg-foreground text-popover flex flex-col items-center justify-center gap-[30px] overflow-hidden pt-[162px] pb-[197px]">
      <article className="flex w-[330px] flex-col items-center justify-between gap-[17px] lg:w-[958px]">
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

          <figure className="mb-4.25 w-full text-center text-[34px] leading-[110%] font-bold sm:text-[44px] xl:w-186.25 min-[109.375rem]:text-[64px]">
            <h2>
              Moments{" "}
              <span className="text-secondary">
                {"précieux de la communauté"}
              </span>
            </h2>
          </figure>
        </article>
        <p className="w-full text-center text-[18px] leading-8 sm:text-[17px] md:text-[18px] min-[109.375rem]:text-[28px]">{`Découvrez en images les événements, rencontres et instants marquants qui rassemblent notre communauté. Revivez et partagez les souvenirs qui renforcent les liens de la diaspora.`}</p>
      </article>

      <AlbumSection />

      <CTAButton
        title="Voir plus"
        className="text-foreground bg-popover hover:bg-popover mb-[60px] flex h-14.5 w-47.25 justify-between p-1 pl-5 xl:hidden"
      />

      <AlbumCarouselMobile />
    </section>
  );
}
