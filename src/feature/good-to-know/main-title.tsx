import DiscoverySection from "./discovery-section";

export function MainTitle() {
  return (
    <section className="bg-primary flex flex-col gap-[53px] overflow-x-auto rounded-[54px] sm:max-xl:pl-4 p-[30px]">
      <div className="text-foreground flex flex-col gap-[17px] text-center">
        <p className="text-title-sm xs:text-title-md lg:text-title-xl font-[700]">
          {"Bon à "}
          <span className="text-secondary">{"savoir"}</span>
        </p>
        <p className="text-p-sm xs:text-p-md lg:text-p-xl font-[400] opacity-[0.6]">
          {" Découvrez nos informations pratiques et thématiques."}
        </p>
      </div>

      <DiscoverySection />
    </section>
  );
}
