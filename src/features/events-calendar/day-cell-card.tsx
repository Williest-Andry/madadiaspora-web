import { ImageType } from "@/interfaces/global";
import { getImageOrFallback } from "@/lib/get-image-url";
import Image from "next/image";

type DayCellCardProps = {
  image: ImageType;
  title: string;
};

export default function DayCellCard({ image, title }: DayCellCardProps) {
  const eventImage = getImageOrFallback(image);

  return (
    <div className="flex w-full items-center gap-[4.52px] rounded-[4px] bg-[#F5FBFF] py-[1.13px] pr-[10.18px] pl-[1.13px] hover:bg-[#cce8fb]">
      <div className="relative h-[50px] w-[50px]">
        <Image
          src={eventImage.image}
          alt={eventImage.alt}
          fill
          className="rounded-[4px] object-cover"
        />
      </div>

      <p className="text-primary line-clamp-2 flex-1 font-[700]">{title}</p>
    </div>
  );
}
