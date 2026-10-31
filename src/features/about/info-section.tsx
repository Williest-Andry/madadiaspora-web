import { INFO_DATA } from "@/constant/about-info/data";
import InfoCard from "./info-card";
import CustomTitleSection from "@/components/custom-title-section";

export default function InfoSection() {
  return (
    <section className="mt-30 flex w-full flex-col items-center justify-between gap-22.25 xl:mt-62.5 xl:w-250 2xl:w-364 min-[109.375rem]:w-[1656px]">
      <CustomTitleSection
        span="Informations utiles"
        primaryTitle="Quelques points"
        secondaryTitle="importants à savoir !"
        textColor="primary"
        titleBlock
        paragraph="Madadiaspora met à votre disposition un espace sécurisé où les membres peuvent échanger, développer leur réseau et partager des opportunités dans un cadre de confiance."
      />

      <article className="grid grid-cols-1 gap-4.75 lg:grid-cols-2 min-[109.375rem]:grid-cols-4">
        {INFO_DATA.map((info, index) => (
          <InfoCard data={info} key={index} />
        ))}
      </article>
    </section>
  );
}
