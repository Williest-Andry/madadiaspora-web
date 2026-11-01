import { EXPERTISE_DATA } from "@/constants/about-info/who-are-we/data";
import CustomDetailsArticle from "./custom-details-article";
import QuestionsCard from "./questions-card";
import ExpertiseCard from "./expertise-card";

export default function OurExpertiseSection() {
  return (
    <section className="bg-foreground flex w-full flex-col items-center justify-center pt-30 pb-30 max-xl:gap-20 xl:flex-row xl:items-start">
      <div className="flex w-full flex-col gap-[50px] max-xl:items-center sm:w-[40%] xl:sticky xl:top-30 xl:gap-[166px]">
        <CustomDetailsArticle
          span="NOTRE SAVOIR-FAIRE"
          primaryTitle="Les expériences de"
          secondaryTitle="Media Consulting"
          firstParagraph="Au fil des années, Media Consulting a développé une solide expérience dans l’organisation de concerts, de salons, de rencontres économiques et d’événements institutionnels à Madagascar et à l’international."
          textColor="primary"
          className="3xl:max-[110.063rem]:w-[530px]! 3xl:w-[679px]! w-full! min-[1476px]:w-[579px]! sm:w-[479px]!"
        />

        <QuestionsCard />
      </div>

      <div className="grid grid-cols-1 gap-[28px] lg:grid-cols-2 xl:grid-cols-1">
        {EXPERTISE_DATA.map((expertise, index) => (
          <ExpertiseCard
            className="3xl:h-148.75 3xl:w-[818px] xs:w-97.25 h-100 w-78 rounded-[38px]"
            key={index}
            data={expertise}
            buttonLabel={expertise.actionLabel}
          />
        ))}
      </div>
    </section>
  );
}
