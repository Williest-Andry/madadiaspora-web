import {
  SERVICES_DATA_ROW_1,
  SERVICES_DATA_ROW_2,
} from "@/constant/services/data";
import Image from "next/image";
import ServiceCard from "./service-card";

export default function ServicesSection() {
  return (
    <section className="mt-31 mb-38.75 flex flex-col items-center justify-between">
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
              {"Nos services"}
            </span>
          </figure>

          <figure className="text-title-sm sm:text-title-md 3xl:text-title-xl mb-4.25 w-full text-center leading-[110%] font-bold xl:w-186.25 xl:text-left">
            <h2>
              Explorez <span className="text-secondary">Nos Rubriques</span>
            </h2>
            <h2>{"Phares !"}</h2>
          </figure>
        </article>
        <p className="text-p-sm sm:text-p-md md:text-p-md 3xl:text-p-xl 3xl:w-203 w-[90%] text-center leading-8 xl:text-start 2xl:w-120">{`Découvrez les principales rubriques de MadaDiaspora et accédez rapidement aux informations, services et opportunités qui répondent à vos besoins.`}</p>
      </article>

      <figure className="mt-11 grid grid-cols-1 gap-5 xl:grid-cols-3">
        {SERVICES_DATA_ROW_1.map((service, index) => (
          <ServiceCard data={service} key={index} />
        ))}
      </figure>

      <div className="3xl:w-[1656px] max-2xl:w-[90%] 2xl:w-[1400px]">
        <h2 className="text-title-sm sm:text-title-md 3xl:text-title-xl mt-11 mb-4.25 w-full leading-[110%] font-bold xl:w-186.25 xl:text-left">
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
