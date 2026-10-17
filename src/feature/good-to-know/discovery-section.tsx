import DiscoveryCard from "@/components/discovery-card";
import TitleInfoCard from "./title-info-card";

const INFO_DATA = [
  {
    image: "/good-tourism.jpg",
    title: "Tourisme",
    description: "Découvrez les lieux et expériences à ne pas manquer.",
  },
  {
    image: "/good-gastronomy.jpg",
    title: "Gastronomie",
    description: "Savourez les saveurs et traditions culinaires malagasy.",
  },
  {
    image: "/good-vegetables.png",
    title: "Santé & bien-être",
    description: "Conseils et informations pour prendre soin de soi.",
  },
];

export default function DiscoverySection() {
  return (
    <section className="flex w-full justify-center gap-[16px] max-[111.25rem]:items-center xl:max-[111.25rem]:flex-col">
      <DiscoveryCard
        title="Explorez nos rubriques"
        description="Retrouvez des informations et conseils autour de Madagascar, de sa culture et de la vie quotidienne."
        buttonLabel="En savoir plus"
        className="xl:max-[111.25rem]:rounded-[38px]"
      />

      <div className="flex gap-[16px]">
        {INFO_DATA.map((info, index) => (
          <TitleInfoCard
            key={index}
            image={info.image}
            title={info.title}
            description={info.description}
          />
        ))}
      </div>
    </section>
  );
}
