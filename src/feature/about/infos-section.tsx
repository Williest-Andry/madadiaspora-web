import { INFOS_DATA } from "@/constant/about-infos/data";
import Image from "next/image";
import InfosCard from "./infos-card";

export default function InfosSection() {
  return (
    <section className="mt-30 flex w-full flex-col items-center justify-between gap-22.25 xl:mt-62.5 xl:w-250 2xl:w-364 min-[109.375rem]:w-[1656px]">
      <article className="flex w-full flex-col items-center justify-between gap-10 xl:flex-row xl:gap-0 min-[109.375rem]:gap-34.75">
        <article className="flex w-full flex-col items-center sm:w-126.25 xl:items-start 2xl:w-176.25">
          <figure className="mb-6.75 flex gap-2.25">
            <div className="relative h-5 w-5">
              <Image
                src={"/yellow-globe.png"}
                alt="little yellow globe image"
                fill
              />
            </div>
            <span className="text-popover text-[14px] leading-5 font-semibold uppercase">
              {"Informations utiles"}
            </span>
          </figure>

          <figure className="mb-4.25 w-full text-center text-[34px] leading-[110%] font-bold sm:text-[44px] xl:w-176.25 xl:text-left min-[109.375rem]:text-[64px]">
            <h2 className="text-popover">Quelques points</h2>
            <h2 className="text-secondary">{"importants à savoir !"}</h2>
          </figure>
        </article>
        <p className="text-popover w-90 text-center text-[18px] leading-8 sm:w-140 sm:text-[17px] md:text-[18px] lg:w-200 xl:text-justify 2xl:w-120 min-[109.375rem]:w-[812px] min-[109.375rem]:text-[28px]">{`MadaDiaspora met à votre disposition un espace sécurisé où les membres peuvent échanger, développer leur réseau et partager des opportunités dans un cadre de confiance.`}</p>
      </article>

      <article className="grid grid-cols-1 gap-4.75 lg:grid-cols-2 min-[109.375rem]:grid-cols-4">
        {INFOS_DATA.map((info, index) => (
          <InfosCard data={info} key={index} />
        ))}
      </article>
    </section>
  );
}
