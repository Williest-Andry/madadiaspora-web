import Image from "next/image";
import { MapPin } from "lucide-react";
import { Opportunity } from "@/interfaces/opportunity/opportunity-types";
import { getImageUrl } from "@/lib/get-image-url";
import RubricCTAButton from "@/components/rubric-cta-button";
import { toFrenchText } from "@/lib/mapper/opportunity-type-mapper";

type OpportunityCard = {
  data: Opportunity;
};

export default function OpportunityCard({ data }: OpportunityCard) {
  const { address, cover, type, info } = data;

  return (
    <div className="relative flex flex-col gap-0 rounded-[32px] border-[1px] p-[12px] max-sm:h-[600px]">
      <div className="relative h-[593px] w-full rounded-t-[29px] pt-[12px]">
        <Image
          src={getImageUrl(cover.url)}
          alt={cover.name}
          fill
          className="rounded-[29px] object-cover"
        />

        {address.country && (
          <div className="bg-foreground absolute top-[24px] left-[24px] flex h-[34px] items-center gap-[8px] rounded-[17px] p-[10px]">
            <MapPin color="var(--secondary)" />
            <p className="text-p-xs font-sans font-semibold">
              {address.country}
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-[10px] rounded-b-[32px] px-[16px] pt-[19px] pb-[17px]">
        <p className="text-p-sm text-secondary font-[700] uppercase">
          {toFrenchText(type)}
        </p>
        <p className="text-title-sm text-popover line-clamp-2 w-[75%] font-[600] font-semibold">
          {info.title}
        </p>
      </div>

      <RubricCTAButton
        title="Voir l'opportunité"
        className="bg-popover hover:bg-popover mt-[20px] ml-[16px] w-[200px] opacity-80 hover:opacity-100"
      />
    </div>
  );
}
