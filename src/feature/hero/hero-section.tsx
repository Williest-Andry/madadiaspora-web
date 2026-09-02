import CustomButton from "@/components/cta-button";
import WorldGlobe from "@/components/world-globe";

export default function HeroSection() {
  return (
    <main className="relative flex h-[calc(100vh-93px)] flex-col-reverse items-center overflow-x-hidden pl-33 xl:flex-row">
      <article className="flex flex-col items-center gap-6 text-center xl:items-start xl:text-left">
        <div className="flex flex-col text-[34px] leading-[110%] font-bold xl:text-[64px]">
          <h1 className="text-secondary">{"Malagasy,"}</h1>
          <p>{"et fier(e) de l'être !"}</p>
        </div>

        <div className="flex w-151.25 flex-col">
          <p className="text-[18px] leading-9 font-bold xl:text-[38px]">
            {"La première plateforme"}
          </p>
          <p className="text-[18px] leading-8 xl:text-[28px]">
            {"dédiée à la diaspora malagasy à travers le monde !"}
          </p>
        </div>

        <CustomButton title="Inscrivez-vous dans l'annuaire" />
      </article>

      <figure className="h-full flex-1">
        <WorldGlobe />
      </figure>
    </main>
  );
}
