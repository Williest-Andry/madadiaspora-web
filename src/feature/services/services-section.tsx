import {
  SERVICES_DATA_ROW_1,
  SERVICES_DATA_ROW_2,
} from "@/constant/services/data";
import Image from "next/image";
import ServiceCard from "./service-card";

export default function ServicesSection() {
  return (
    <section className="mt-31 mb-38.75 flex flex-col items-center justify-between">
      <article className="flex flex-col items-center justify-between gap-10 xl:flex-row xl:gap-10 min-[109.375rem]:w-[1656px] min-[109.375rem]:gap-34.75">
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
              {"Nos services"}
            </span>
          </figure>

          <figure className="mb-4.25 w-full text-center text-[34px] leading-[110%] font-bold sm:text-[44px] xl:w-186.25 xl:text-left min-[109.375rem]:text-[64px]">
            <h2>
              Explorez <span className="text-secondary">Nos Rubriques</span>
            </h2>
            <h2>{"Phares !"}</h2>
          </figure>
        </article>
        <p className="w-90 text-center text-[18px] leading-8 sm:w-140 sm:text-[17px] md:text-[18px] lg:w-120 xl:text-start 2xl:w-120 min-[109.375rem]:w-203 min-[109.375rem]:text-[28px]">{`Découvrez les principales rubriques de MadaDiaspora et accédez rapidement aux informations, services et opportunités qui répondent à vos besoins.`}</p>
      </article>

      <figure className="mt-11 grid grid-cols-1 gap-5 xl:grid-cols-3">
        {SERVICES_DATA_ROW_1.map((service, index) => (
          <ServiceCard data={service} key={index} />
        ))}
      </figure>

      <div className="w-full xl:pl-33">
        <h2 className="mt-11 mb-4.25 w-full text-center text-[34px] leading-[110%] font-bold sm:text-[44px] xl:w-186.25 xl:text-left min-[109.375rem]:text-[64px]">
          Et Bien <span className="text-secondary">Plus Encore !</span>
        </h2>
      </div>

      <figure className="mt-11 grid grid-cols-1 gap-5 xl:grid-cols-3">
        {SERVICES_DATA_ROW_2.map((service, index) => (
          <ServiceCard data={service} key={index} />
        ))}
      </figure>
    </section>
  );
}
