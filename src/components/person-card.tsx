import { Badge } from "./ui/badge";
import { BriefcaseBusiness, MapPin } from "lucide-react";
import { Directory } from "@/interfaces/directory/directory-type";
import OptionalProfileImage from "./optional-profile-image";
import OptionalContactSection from "./optional-contact-section";

type PersonCardProps = {
  directory: Directory;
};

export default function PersonCard({ directory }: PersonCardProps) {
  const { identity, professional, address, contact, profile } = directory;

  return (
    <article className="text-primary xs:w-[308px] flex w-[95%] flex-col gap-2 rounded-[32px] border-[1px] border-[#F1F2F4] p-[8px]">
      <figure className="xs:w-[99%] xs:h-[350px] relative h-[300px] w-full rounded-[24px]">
        <OptionalProfileImage
          profile={profile}
          firstName={identity.firstName}
          lastName={identity.lastName}
        />
        {professional.sector && (
          <Badge className="bg-foreground text-text-badge absolute top-[12px] left-[12px] max-w-[90%] rounded-[8px] px-[8px] py-[4px]">
            <span className="truncate">{professional.sector}</span>
          </Badge>
        )}
      </figure>

      <article className="flex flex-col gap-[8px]">
        <h3 className="text-p-md line-clamp-2 flex h-[48px] items-center font-bold tracking-[0px]">
          {identity.firstName} {identity.lastName}
        </h3>

        <div className="flex h-[45px] items-center gap-[8px]">
          <BriefcaseBusiness size={30} />
          <p className="text-p-sm text-text-badge line-clamp-2 flex-1 font-bold tracking-[0px]">
            {professional.title}{" "}
            <span className="text-text-card font-normal">chez </span>
            {professional.establishment}
          </p>
        </div>

        <div className="flex items-center gap-[8px]">
          <MapPin size={30} />
          <p className="text-p-sm flex-1 truncate leading-[24px] tracking-[0px]">
            {address.city}, <span className="font-bold">{address.country}</span>
          </p>
        </div>

        <div className="bg-bg-gray max-xs:gap-4 flex w-full flex-col justify-between gap-6 overflow-hidden rounded-t-[8px] rounded-b-[24px] p-[16px]">
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
