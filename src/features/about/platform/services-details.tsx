import CustomTitleSection from "@/components/custom-title-section";
import {
  SERVICES_PLATFORM_DATA_ROW_1,
  SERVICES_PLATFORM_DATA_ROW_2,
  SERVICES_PLATFORM_DATA_ROW_3,
} from "@/constants/about-info/platform/data";
import ServiceCard from "@/features/services/service-card";

export default function ServicesDetails() {
  return (
    <section className="mt-31 mb-38.75 flex flex-col items-center justify-between">
      <CustomTitleSection
        span="DÉCOUVREZ LA PLATEFORME"
        primaryTitle="Explorez"
        secondaryTitle="Nos Rubriques "
        paragraph="Notre plateforme propose plusieurs outils pour permettre aux Malagasy du monde de se retrouver, de s’informer, de partager et de développer leurs initiatives."
      />

      <figure className="mt-[88px] grid grid-cols-1 gap-5 xl:grid-cols-3">
        {SERVICES_PLATFORM_DATA_ROW_1.map((service, index) => (
          <ServiceCard data={service} key={index} buttonLabel="Consultez" />
        ))}
      </figure>

      <figure className="mt-11 grid grid-cols-1 gap-5 xl:grid-cols-3">
        {SERVICES_PLATFORM_DATA_ROW_2.map((service, index) => (
          <ServiceCard data={service} key={index} buttonLabel="Consultez" />
        ))}
      </figure>

      <figure className="mt-11 grid grid-cols-1 gap-5 xl:grid-cols-3">
        {SERVICES_PLATFORM_DATA_ROW_3.map((service, index) => (
          <ServiceCard data={service} key={index} buttonLabel="Consultez" />
        ))}
      </figure>
    </section>
  );
}
