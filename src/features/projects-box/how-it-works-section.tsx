import AnswerItWorkCard from "./answer-It-work-card";
import WhoItWorkCard from "./how-it-work-card";

const STEPS = [
  {
    number: "01",
    title: "Appel à projets",
    description:
      "Phenix Agency lance des appels à projets à destination des associations communautaires, ONG et coopératives.",
  },
  {
    number: "02",
    title: "Cellule de consultants",
    description:
      "Cette équipe analyse et évalue les propositions présentées par les porteurs de projets. Elle veille au respect des critères définis.",
  },
  {
    number: "03",
    title: "Le comité mixte",
    description:
      "Cette équipe est constituée de représentants de Phenix Agency, de la diaspora et des porteurs de projet. Il a pour rôle de valider les projets retenus.",
  },
  {
    number: "04",
    title: "Cahier des charges",
    description:
      "Ce document signé par le Porteur du projet et la diaspora est une feuille de route définissant les conditions de réalisation du projet.",
  },
  {
    number: "05",
    title: "Interface",
    description:
      "Phenix Agency favorise une meilleure compréhension des enjeux et des attentes des différentes parties prenantes.",
  },
  {
    number: "06",
    title: "Intermediaire",
    description:
      "Phenix Agency facilite les échanges, encourage le dialogue et aide à établir des partenariats constructifs entre les parties.",
  },
];

export function HowItWorksSection() {
  return (
    <div className="grid grid-cols-2 4xl:grid-cols-4 gap-[10px]">
      <WhoItWorkCard className="not-2xl:col-span-2 2xl:row-span-2 rounded-t-[24px] 2xl:rounded-r-[8px] rounded-b-[8px]" />

      {STEPS.map((step, index) => {
        let specificClassName = "";

        // Règle pour l'élément 2 (index 1) -> 02
        if (index+1 === 1) {
          specificClassName = "2xl:rounded-tr-[24px]";
        }
        
        // Règle pour l'élément 3 (index 2) -> 03
        if (index === 2) {
          specificClassName = "4xl:rounded-tr-[24px]";
        }

        // Règle pour l'élément 5 (index 4) -> 05
        if (index === 4) {
          specificClassName = "not-2xl:rounded-bl-[24px] 2xl:rounded-bl-[24px]"; 
          // Ajustez selon si c'est uniquement not-2xl ou global selon votre grille
        }

        // Règle pour l'élément 6 (index 5) -> 06
        if (index === 5) {
          specificClassName = "not-2xl:rounded-br-[24px] 2xl:rounded-br-[24px] 4xl:rounded-br-[24px]";
        }

        return (
          <AnswerItWorkCard
            key={step.number}
            {...step}
            className={specificClassName}
          />
        );
      })}
    </div>
  );
}