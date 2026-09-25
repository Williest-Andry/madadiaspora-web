import Image from "next/image";
import { Badge } from "./ui/badge";
import { BriefcaseBusiness, MapPin } from "lucide-react";

export default function PersonCard() {
  return (
    <article className="text-primary xs:w-[399.25px] flex w-[95%] flex-col gap-2 rounded-[32px] border-[1px] border-[#F1F2F4] p-[8px]">
      <figure className="xs:w-[381.25px] xs:h-[400px] relative h-[300px] w-full rounded-[24px]">
        <Image
          src={"/mock-correspondent.jpg"}
          alt="mock image"
          fill
          className="rounded-[24px] object-cover"
        />
        <Badge className="bg-foreground text-text-badge absolute top-[12px] left-[12px] h-[24px] rounded-[8px] px-[8px] py-[4px]">
          Top rated
        </Badge>
      </figure>

      <article className="flex flex-col gap-[8px]">
        <h3 className="text-p-md leading-[28px] font-bold tracking-[0px]">
          Olsenie RASOANIVO
        </h3>

        <div className="flex gap-[8px]">
          <BriefcaseBusiness />
          <p className="text-p-sm text-text-badge leading-[18px] font-bold tracking-[0px]">
            Gestionnnaire de projet{" "}
            <span className="text-text-card font-normal">chez</span> ECOSTAR
            ENERGY
          </p>
        </div>

        <div className="flex gap-[8px]">
          <MapPin />
          <p className="text-p-sm leading-[24px] tracking-[0px]">
            Borg El Arab, <span className="font-bold">Égypte</span>
          </p>
        </div>

        <div className="bg-bg-gray max-xs:gap-4 xs:flex-row flex flex-col justify-between rounded-t-[8px] rounded-b-[24px] p-[16px]">
          <div className="flex flex-col">
            <p className="text-p-xs text-text-card leading-[16px] tracking-[0px]">
              E-mail
            </p>
            <p className="text-p-sm text-text-bagde leading-[18px] tracking-[0px]">
              poetyrebely@gmail.com
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-p-xs text-text-card leading-[16px] tracking-[0px]">
              Téléphone
            </p>
            <p className="text-p-sm text-text-bagde leading-[18px] tracking-[0px]">
              +261322290889
            </p>
          </div>
        </div>
      </article>
    </article>
  );
}
