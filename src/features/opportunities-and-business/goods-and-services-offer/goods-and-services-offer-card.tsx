import RubricCTAButton from "@/components/rubric-cta-button";
import { Badge } from "@/components/ui/badge";
import { Opportunity } from "@/interfaces/opportunity/opportunity-types";
import { formatDateFr } from "@/lib/date-format";
import { getImageOrFallback } from "@/lib/get-image-url";
import { MapPin } from "lucide-react";
import Image from "next/image";

type GoodsAndServicesOfferCardProps = {
  data: Opportunity;
};

export default function GoodsAndServicesOfferCard({
  data,
}: GoodsAndServicesOfferCardProps) {
  const { cover, info, contact, address } = data;

  const jobOfferImage = getImageOrFallback(cover);

  return (
    <article className="xs:w-[90%] xs:p-[10px] flex w-full flex-col gap-[27px] border-[1px] p-2 sm:flex-row xl:flex-col xl:max-2xl:items-center 2xl:flex-row">
      <div className="relative h-[320px] w-full rounded-[14px] sm:h-[360px] sm:w-[360px] xl:max-2xl:w-full">
        <Image
          src={jobOfferImage.image}
          alt={jobOfferImage.alt}
          fill
          className="rounded-[14px] object-cover"
        />
      </div>

      <div className="max-xs:w-[75%] xs:flex-1 flex flex-col gap-[15px]">
        <div className="flex flex-col gap-[6px]">
          <h2 className="text-p-md sm:text-title-sm text-popover line-clamp-1 w-full font-sans font-[600] sm:w-full">
            {info.title}
          </h2>
          <p className="text-p-sm sm:text-p-md text-muted-job-offer truncate font-sans font-[300]">
            {contact.otherEmail[0]}
          </p>
        </div>

        <div className="flex gap-[12px]">
          {(address.city || address.country) && (
            <Badge
              variant={"outline"}
              className="text-p-md text-muted-job-offer/50 flex h-[51px] gap-[14px] px-[28px] py-[14px]"
            >
              <>
                <MapPin />
                {`${address.city ? address.city + "," : ""}`} {address.country}
              </>
            </Badge>
          )}
        </div>

        <p className="text-p-sm sm:text-p-md text-muted-job-offer line-clamp-2 font-sans font-[300] font-light">
          {info.summary}
        </p>

        <RubricCTAButton
          title="Voir plus"
          href="#"
          className="bg-popover/80 hover:bg-popover mt-10"
        />
      </div>
    </article>
  );
}
