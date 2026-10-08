import {
  SERVICES_DATA_ROW_1,
  SERVICES_DATA_ROW_2,
} from "@/constant/services/data";
import ServiceCard from "./service-card";
import CustomTitleSection from "@/components/custom-title-section";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";

export default function ServicesSection() {
  return (
    <section className="mt-31 mb-38.75 flex flex-col items-center justify-between">
      <CustomTitleSection
        span="Nos services"
        primaryTitle="Explorez"
        secondaryTitle="Nos Rubriques"
        tertiaryTitle="Phares !"
        paragraph="Découvrez les principales rubriques de Madadiaspora et accédez rapidement aux informations, services et opportunités qui répondent à vos besoins."
      />

      <figure className="mt-11 grid grid-cols-1 gap-5 xl:grid-cols-3">
        {SERVICES_DATA_ROW_1.map((service, index) => (
          <ServiceCard data={service} key={index} />
        ))}
      </figure>

      <div className="3xl:w-[1656px] mt-11 max-2xl:w-[90%] 2xl:w-[1400px]">
        <DiaTextReveal
          text={"Et Bien "}
          className="text-title-sm sm:text-title-md 3xl:text-title-xl mb-4.25 w-full text-center leading-[110%] font-bold xl:w-186.25 xl:text-left"
          colors={["#043d4d"]}
          startOnView
        />
        <DiaTextReveal
          text={"Plus Encore !"}
          className="text-title-sm sm:text-title-md 3xl:text-title-xl mb-4.25 w-full text-center leading-[110%] font-bold xl:w-186.25 xl:text-left"
          colors={["#fbb03c"]}
          textColor="var(--secondary)"
          startOnView
        />
      </div>

      <figure className="mt-11 grid grid-cols-1 gap-5 xl:grid-cols-3">
        {SERVICES_DATA_ROW_2.map((service, index) => (
          <ServiceCard data={service} key={index} />
        ))}
      </figure>
    </section>
  );
}
