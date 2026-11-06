import { Suspense } from "react";

import RubricCustomMainTitle from "@/components/rubric-custom-main-title";
import { HowItWorksSection } from "@/features/projects-box/how-it-works-section";
import { ProjectsListSection } from "@/features/projects-box/projects-list-section";

export default function ProjectBoxPage() {
  return (
    <div className="bg-foreground flex flex-col gap-[54px]">
      <RubricCustomMainTitle
        title="Boîte à "
        secondaryTitle="projets"
        className="p-20!"
        description="Découvrez les projets qui contribuent au développement de Madagascar et de sa diaspora."
      />
      <HowItWorksSection />
      <Suspense fallback={null}>
        <ProjectsListSection />
      </Suspense>
    </div>
  );
}