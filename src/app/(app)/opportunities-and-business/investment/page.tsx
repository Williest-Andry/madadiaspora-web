import CustomMainTitle from "@/feature/opportunities-and-business/custom-main-title";

export const BASE_PATHNAME = "/opportunities-and-business";

export default function InvestmentPage() {
  return (
    <div>
      <CustomMainTitle
        leftLabel="Investissements"
        leftLink={`${BASE_PATHNAME}/investment`}
        rightLabel="Partenariat"
        rightLink={`${BASE_PATHNAME}/partnership`}
        defaultActive="Investissements"
        firstTitle="Investissements"
        firstDescription="Publiez ou consultez des offres d'emploi, qu'il s'agisse de missions temporaires ou de postes à long terme, à Madagascar ou à l'international."
        secondTitle="Partenariat"
        secondDescription="Recherchez ou proposez des biens et services, favorisant ainsi la coopération entre les membres de la diaspora et les acteurs locaux."
      />
    </div>
  );
}
