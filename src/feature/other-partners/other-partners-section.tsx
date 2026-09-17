import Image from "next/image";
import { usePartners } from "@/hooks/partners/use-partners";
import OtherPartnersCarousel from "./other-partners-carousel";

export default function OtherPartnersSection() {
  const { partners, error, isLoading } = usePartners({ isOfficial: false });

  return (
    <section className="my-[185px] flex flex-col items-center justify-center gap-[60px] overflow-hidden xl:gap-[100px] 2xl:gap-[171px]">
      <article className="3xl:w-[1656px] 3xl:gap-34.75 flex flex-col items-center justify-between gap-10 max-2xl:w-[90%] xl:flex-row xl:gap-10">
        <article className="flex w-full flex-col items-center sm:w-126.25 xl:items-start 2xl:w-[819.5px]">
          <figure className="mb-6.75 flex gap-2.25">
            <div className="relative h-5 w-5">
              <Image
                src={"/yellow-globe.png"}
                alt="little yellow globe image"
                fill
              />
            </div>
            <span className="text-[14px] leading-5 font-semibold uppercase">
              {"Nos partenaires"}
            </span>
          </figure>

          <figure className="text-title-sm sm:text-title-md 3xl:text-title-xl mb-4.25 w-full text-center leading-[110%] font-bold xl:w-186.25 xl:text-left">
            <h2>{"Un réseau de"} </h2>
            <h2 className="text-secondary">{"partenaires engagés"}</h2>
          </figure>
        </article>
        <p className="text-p-sm sm:text-p-md md:text-p-md 3xl:text-p-xl 3xl:w-203 w-[90%] text-center leading-8 xl:text-start 2xl:w-120">
          {
            "Découvrez les partenaires qui nous accompagnent dans nos actions et participent au rayonnement de la diaspora à travers différentes collaborations."
          }
        </p>
      </article>

      <figure className="flex overflow-hidden">
        <OtherPartnersCarousel
          partners={[...partners, ...partners, ...partners]}
          isInfinite
        />
      </figure>
    </section>
  );
}
