"use client";

import PersonCard from "@/components/person-card";
import SearchBarWithCountry from "@/components/search-bar-with-country";
import ToggleGroupDemo from "@/components/shadcn-space/toggle-group/toggle-group-01";
import OtherPartnersSection from "@/feature/other-partners/other-partners-section";
import { useCorrespondents } from "@/hooks/correspondent/use-correspondent";

export default function CorrespondentsPage() {
  const { correspondents, error, isLoading } = useCorrespondents();

  return (
    <div className="flex w-full flex-col">
      <section className="mb-[60.5px] flex w-full flex-col">
        <article className="mt-[30px] mb-[110px] flex w-full flex-col items-center justify-center gap-[17px] lg:mt-[77px]">
          <h1 className="max-xs:w-[70%] text-title-sm sm:text-title-md lg:text-title-xl text-center leading-[110%] font-bold tracking-normal">
            {"Nos"} <span className="text-secondary">{"correspondants"}</span>{" "}
            {"à travers le"}
            <span className="text-secondary">{"monde"}</span>
          </h1>
          <p className="text-muted-foreground text-p-sm sm:text-p-md lg:text-p-xl w-[60%] text-center leading-[32px] tracking-normal">
            {
              "Retrouvez un correspondant MadaDiaspora présent dans votre pays ou votre région."
            }
          </p>
        </article>

        <div className="flex justify-between">
          <ToggleGroupDemo
            leftLabel="Nous contacter"
            leftLink="/contact"
            rightLabel="Nos correspondants"
            rightLink="/contact/correspondants"
            defaultActive="Nos correspondants"
          />

          {/* <SearchBarWithCountry /> */}
        </div>
      </section>

      <section className="bg-foreground flex w-full items-center justify-center py-30">
        <div className="grid-2xl:w-[1657px] grid-2xl:grid-cols-4 grid-xl:w-[1280px] grid-xl:grid-cols-3 grid w-full grid-cols-1 justify-items-center gap-[20px] lg:w-[850px] lg:grid-cols-2">
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
        </div>
      </section>

      <OtherPartnersSection />
    </div>
  );
}
