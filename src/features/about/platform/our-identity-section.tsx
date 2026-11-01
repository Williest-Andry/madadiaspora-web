import CustomAboutSection from "@/components/custom-about-section";
import InfoCard from "../info-card";
import { ABOUT_PLATFORM_DATA } from "@/constants/about-info/platform/data";

export default function OurIdentitySection() {
  return (
    <section className="bg-foreground mt-10 flex w-full flex-col items-center justify-center gap-[92px] pb-20">
      <CustomAboutSection
        mainImage={"/platform-womens-with-kid.png"}
        leftImage={"/platform-beach.png"}
        rightImage={"/platform-mg-latern.png"}
        span="NOTRE IDENTITÉ"
        primaryTitle="Pourquoi "
        secondaryTitle="Madadiaspora ?"
        paragraph="La culture malagasy repose sur le principe du Fihavanana, qui incarne l'entraide, la solidarité et le respect mutuel. Cependant, ce lien peut être mis à l'épreuve par les défis quotidiens. La valeur du 'Fihavanana' a le potentiel de favoriser le développement individuel et national, à condition d'être bien exploitée. C'est dans ce contexte que le site web Madadiaspora a été créé par Phenix Agency. Cette plateforme numérique a pour vocation de restaurer cet esprit de solidarité, en offrant un espace où les malagasy à l’étranger et la communauté malagasy de par le monde peuvent se connecter, se retrouver, échanger, partager et se soutenir."
        gapParagraphButton={10}
      />

      <article className="grid grid-cols-1 gap-4.75 lg:grid-cols-2 min-[109.375rem]:grid-cols-3">
        {ABOUT_PLATFORM_DATA.map((info, index) => (
          <InfoCard
            data={info}
            key={index}
            className="xs:w-96.25 xs:h-[330px] h-[300px] w-76 sm:h-[260px] sm:w-[539px] lg:max-xl:w-[479px] min-xl:h-[258px]"
          />
        ))}
      </article>
    </section>
  );
}
