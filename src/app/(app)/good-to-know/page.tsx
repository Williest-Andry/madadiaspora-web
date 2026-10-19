"use client";

import GoodToKnowCard from "@/feature/good-to-know/good-to-know-card";
import { MainTitle } from "@/feature/good-to-know/main-title";
import { useGoodToKnow } from "@/hooks/good-to-know/use-good-to-know";

export default function GoodToKnowPage() {
  const { goodToKnow } = useGoodToKnow({ page: 1, limit: 10 });

  return (
    <div className="flex flex-col gap-[48px]">
      <MainTitle />

      <div className="flex flex-col gap-[48px]">
        {goodToKnow.map((g, index) => (
          <GoodToKnowCard data={g} key={index} />
        ))}
      </div>
    </div>
  );
}
