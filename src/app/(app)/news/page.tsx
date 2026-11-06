import { Suspense } from "react";

import RubricCustomMainTitle from "@/components/rubric-custom-main-title";
import { ActualityListSection } from "@/features/actuality/actuality-list-section";

export default function ActualityPage() {
  return (
    <div className="bg-foreground flex flex-col gap-[54px]">
      <RubricCustomMainTitle
        title="Actualités & Dépêches "
        secondaryTitle="de la Diaspora"
        className="p-14!"
        description="Veille stratégique, initiatives citoyennes, réussites économiques et analyses de fond au service de Madagascar et de sa diaspora dans le monde."
      />
      <Suspense fallback={null}>
        <ActualityListSection />
      </Suspense>
    </div>
  );
}