import RubricCTAButton from "@/components/rubric-cta-button";
import { Badge } from "@/components/ui/badge";
import { Opportunity } from "@/interfaces/opportunity/opportunity-types";
import { formatDateFr } from "@/lib/date-format";
import { getImageOrFallback } from "@/lib/get-image-url";
import { MapPin } from "lucide-react";
import Image from "next/image";

type JobOfferCardProps = {
  data: Opportunity;
};

export default function JobOfferCard({ data }: JobOfferCardProps) {
  const { cover, info, contact, address, createdAt, endDate } = data;

  const jobOfferImage = getImageOrFallback(cover);

  return (
    <article className="xs:p-[20px] flex gap-[27px] border-[1px] p-2">
      <div className="xs:h-[93px] xs:w-[93px] relative h-[80px] w-[80px] rounded-[4px]">
        <Image
          src={jobOfferImage.image}
          alt={jobOfferImage.alt}
          fill
          className="rounded-[4px] object-cover"
        />
      </div>

      <div className="max-xs:w-[75%] xs:flex-1 flex flex-col gap-[15px]">
        <div className="flex flex-col gap-[6px]">
          <h2 className="text-p-md sm:text-title-sm text-popover line-clamp-1 w-full font-sans font-[600] sm:w-[70%]">
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

        <div className="font-poppins text-p-xs sm:text-p-sm flex flex-col font-[400]">
          <p className="text-layout-muted">
            Diffusion : {formatDateFr(createdAt.toString())}
          </p>
          <p className="text-secondary">
            Date limite : {formatDateFr(endDate.toString())}
          </p>
        </div>

        <RubricCTAButton
          title="Postulé"
          href="#"
          className="bg-popover/80 hover:bg-popover"
        />
      </div>
    </article>
  );
}
