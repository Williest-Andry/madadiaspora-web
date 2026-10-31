import OptionalContactSection from "@/components/optional-contact-section";
import OptionalProfileImage from "@/components/optional-profile-image";
import { Badge } from "@/components/ui/badge";
import { Opportunity } from "@/interfaces/opportunity/opportunity-types";
import { BriefcaseBusiness, MapPin } from "lucide-react";

type JobApplicationCardProps = {
  data: Opportunity;
};

export default function JobApplicationCard({ data }: JobApplicationCardProps) {
  const { cover, info, address, contact } = data;

  return (
    <article className="text-primary xs:w-[308px] flex w-[95%] flex-col gap-2 rounded-[32px] border-[1px] border-[#F1F2F4] p-[8px]">
      <figure className="xs:w-[99%] xs:h-[350px] relative h-[300px] w-full rounded-[24px]">
        <OptionalProfileImage
          profile={cover}
          firstName={info.title}
          lastName={info.title}
        />

        <Badge className="bg-foreground text-text-badge absolute top-[12px] left-[12px] max-w-[90%] rounded-[8px] px-[8px] py-[4px]">
          Disponible
        </Badge>
      </figure>

      <article className="flex flex-col gap-[8px]">
        <h3 className="text-p-md flex h-[48px] items-center truncate font-bold tracking-[0px]">
          {info.title}
        </h3>

        <div className="flex items-center gap-[8px]">
          <BriefcaseBusiness size={30} />
          <p className="text-p-sm text-text-badge line-clamp-2 flex-1 font-bold tracking-[0px]">
            {info.title}{" "}
          </p>
        </div>

        <div className="flex items-center gap-[8px]">
          {address.city || address.country ? (
            <>
              <MapPin size={30} />
              <p className="text-p-sm flex-1 truncate leading-[24px] tracking-[0px]">
                {`${address.city ? address.city + ", " : ""}`}
                <span className="font-bold">{address.country}</span>
              </p>
            </>
          ) : (
            <>
              <MapPin size={30} />
              <p className="text-p-sm flex-1 truncate leading-[24px] tracking-[0px]">
                {"Non mentionnée"}
              </p>
            </>
          )}
        </div>

        <div className="bg-bg-gray max-xs:gap-4 flex w-full flex-col justify-between gap-6 overflow-x-hidden rounded-t-[8px] rounded-b-[24px] p-[16px]">
          <OptionalContactSection
            contacts={contact.otherEmail}
            title="E-mail(s)"
          />

          <OptionalContactSection contacts={contact.tel} title="Téléphone(s)" />
        </div>
      </article>
    </article>
  );
}
