import { INFO_DATA } from "@/constant/about-info/data";
import Image from "next/image";
import InfoCard from "./info-card";
import CustomTitleSection from "@/components/custom-title-section";

export default function InfoSection() {
  return (
    <section className="mt-30 flex w-full flex-col items-center justify-between gap-22.25 xl:mt-62.5 xl:w-250 2xl:w-364 min-[109.375rem]:w-[1656px]">
      <article className="3xl:gap-34 2xl:max-3xl:justify-center flex w-full flex-col items-center justify-between gap-10 xl:flex-row xl:gap-0">
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

          <figure className="text-title-sm 3xl:text-title-xl sm:text-title-md mb-2 w-full text-center leading-[110%] font-bold xl:w-176.25 xl:text-left">
            <h2 className="text-popover">Quelques points</h2>
            <h2 className="text-secondary">{"importants à savoir !"}</h2>
          </figure>
        </article>
        <p className="text-popover text-p-sm sm:text-p-md 3xl:w-203 3xl:text-p-xl w-[90%] text-center leading-8 sm:w-140 lg:w-200 xl:text-justify 2xl:w-120">{`MadaDiaspora met à votre disposition un espace sécurisé où les membres peuvent échanger, développer leur réseau et partager des opportunités dans un cadre de confiance.`}</p>
      </article>

      <article className="grid grid-cols-1 gap-4.75 lg:grid-cols-2 min-[109.375rem]:grid-cols-4">
        {INFO_DATA.map((info, index) => (
          <InfoCard data={info} key={index} />
        ))}
      </article>
    </section>
  );
}
