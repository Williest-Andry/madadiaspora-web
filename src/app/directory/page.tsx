import CustomMainTitleSection from "@/components/custom-main-title-section";
import CustomTitleSection from "@/components/custom-title-section";
import PersonCard from "@/components/person-card";
import ToggleGroupDemo from "@/components/shadcn-space/toggle-group/toggle-group-01";
import { DIRECTORY_DISCOVERY_DATA } from "@/constant/directory/data";
import OtherPartnersSection from "@/feature/other-partners/other-partners-section";
import ServiceCard from "@/feature/services/service-card";

export default function DirectoryPage() {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <section className="mb-[60.5px] flex flex-col max-sm:items-center max-sm:justify-center">
        <CustomMainTitleSection
          primaryTitle="Annuaire de"
          secondaryTitle="la Diaspora"
          description="Trouvez les talents malagasy partout dans le monde Explorez les profils de professionnels, d’entreprises et d’associations issus de la diaspora malagasy."
        />

        <div className="flex sm:px-[132px]">
          <ToggleGroupDemo
            leftLabel="Professionnel Madagascar"
            leftLink="#"
            rightLabel="Diaspora"
            rightLink="/directory"
            defaultActive="Diaspora"
          />
        </div>
      </section>

      <section className="bg-foreground flex w-full items-center justify-center py-30">
        <div className="grid-2xl:w-[1657px] grid-2xl:grid-cols-4 grid-xl:w-[1280px] grid-xl:grid-cols-3 grid w-full grid-cols-1 justify-items-center gap-[20px] lg:w-[850px] lg:grid-cols-2">
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
        </div>
      </section>

      <section className="mt-[130px] mb-[130px] flex flex-col items-center justify-between">
        <CustomTitleSection
          primaryTitle="Découvrir"
          secondaryTitle="davantage"
          paragraph="Découvrez les principales rubriques de MadaDiaspora et accédez rapidement aux informations, services et opportunités qui répondent à vos besoins."
        />

        <figure className="mt-[88px] grid grid-cols-1 gap-5 xl:grid-cols-3">
          {DIRECTORY_DISCOVERY_DATA.map((service, index) => (
            <ServiceCard data={service} key={index} buttonLabel="Consultez" />
          ))}
        </figure>
      </section>

      <section className="w-full">
        <OtherPartnersSection backgroundColor="foreground" />
      </section>
    </div>
  );
}
