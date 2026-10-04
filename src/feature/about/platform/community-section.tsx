import MobileCTAButton from "@/components/mobile-cta-button";
import Image from "next/image";
import RightAboutImage from "./right-about-image";

export default function CommunitySection() {
  return (
    <section className="bg-foreground flex flex-col items-center justify-center pt-30 pb-[100px] max-xl:gap-20 xl:flex-row xl:gap-[230px]">
      <article
        className={`3xl:w-204 flex w-full flex-col items-center gap-15 max-sm:gap-8 md:w-150 xl:items-start xl:gap-[19px]`}
      >
        <article className="flex flex-col items-center max-md:w-[90vw] md:max-xl:w-[70vw] xl:items-start">
          <figure className="mb-6.75 flex gap-2.25">
            <div className="relative h-5 w-5">
              <Image
                src={"/yellow-globe.png"}
                alt="little yellow globe image"
                fill
              />
            </div>
            <span className="text-popover text-[14px] leading-5 font-semibold">
              {"REJOIGNEZ LA COMMUNAUTÉ"}
            </span>
          </figure>

          <figure className="text-title-sm 3xl:text-title-xl sm:text-title-md mb-10 flex flex-col leading-[110%] font-bold">
            <h2 className="text-popover">{"Ensemble, faisons "}</h2>
            <h2 className="text-popover">
              {"vivre le"}{" "}
              <span className="text-secondary">{"Fihavanana"}</span>
            </h2>
          </figure>

          <p className="text-popover 3xl:text-p-xl text-p-sm sm:text-p-md w-[85%] text-center leading-8 max-sm:w-full xl:text-justify">
            {
              "Rejoignez-nous, engagez-vous et faisons ensemble de Madadiaspora un espace de solidarité, de partage et de connexion entre les Malagasy du monde."
            }
          </p>
        </article>

        <MobileCTAButton label="S'inscrire" />
      </article>

      <RightAboutImage />
    </section>
  );
}
