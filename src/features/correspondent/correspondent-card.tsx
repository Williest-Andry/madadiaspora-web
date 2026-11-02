import { MapPin } from "lucide-react";
import { Correspondent } from "@/interfaces/correspondent/correspondent-type";
import OptionalProfileImage from "@/components/optional-profile-image";
import { Badge } from "@/components/ui/badge";
import OptionalContactSection from "@/components/optional-contact-section";

type CorrespondentCardProps = {
  data: Correspondent;
};

export default function CorrespondentCard({ data }: CorrespondentCardProps) {
  const { identity, continent, country, city, contact, image } = data;
  return (
    <article className="text-primary xs:w-[399.25px] flex w-[95%] flex-col gap-2 rounded-[32px] border-[1px] border-[#F1F2F4] p-[8px]">
      <figure className="xs:w-[99%] xs:h-[350px] relative h-[300px] w-full rounded-[24px]">
        <OptionalProfileImage
          profile={image}
          firstName={identity.firstName}
          lastName={identity.lastName}
        />

        {continent && (
          <Badge className="bg-foreground text-text-badge absolute top-[12px] left-[12px] max-w-[90%] rounded-[8px] px-[8px] py-[4px]">
            <span className="truncate">{continent}</span>
          </Badge>
        )}
      </figure>

      <article className="flex flex-col gap-[8px]">
        <h3 className="text-p-md line-clamp-2 flex h-[48px] items-center font-bold tracking-[0px]">
          {identity.firstName} {identity.lastName}
        </h3>

        <div className="flex items-center gap-[8px]">
          <MapPin size={30} />
          <p className="text-p-sm flex-1 truncate leading-[24px] tracking-[0px]">
            {city}, <span className="font-bold">{country}</span>
          </p>
        </div>

        <div className="bg-bg-gray max-xs:gap-4 flex w-full flex-col justify-between gap-6 rounded-t-[8px] rounded-b-[24px] p-[16px]">
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
