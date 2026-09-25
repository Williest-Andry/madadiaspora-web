import ChronologicalHistorySection from "./chronological-history-section";
import CustomDetailsArticle from "./custom-details-article";

export default function HistorySection() {
  return (
    <section className="mt-[144px] mb-20 flex flex-col items-start justify-center gap-30 xl:flex-row min-xl:px-[132px]">
      <article className="w-full xl:w-[50%]">
        <CustomDetailsArticle
          span="NOTRE HISTOIRE"
          primaryTitle="De Media Consulting à"
          secondaryTitle="Phenix Agency"
          firstParagraph="Une évolution portée par l’expérience, l’innovation et la volonté de répondre aux nouvelles attentes d’un monde toujours plus connecté."
          secondParagraph="L’innovation au service de la communication et de l’événementiel."
        />
      </article>

      <section className="w-full xl:w-[50%]">
        <ChronologicalHistorySection />
      </section>
    </section>
  );
}
