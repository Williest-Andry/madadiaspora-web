import Image from "next/image";
import CTAButton from "@/components/cta-button";

export default function AlbumCenter() {
  return (
    <figure className="flex flex-col items-center justify-center">
      <CTAButton
        title="Voir plus"
        className="text-foreground bg-popover hover:bg-popover mb-[60px] h-14.5 w-47.25 justify-between p-1 pl-5"
      />

      <figure className="flex gap-[20px]">
        <div className="relative h-[412px] w-[280px] rounded-[48px] min-[109.375rem]:h-[512.5px] min-[109.375rem]:w-[399px]">
          <Image
            src={"/album-road.jpg"}
            alt="road image"
            fill
            className="rounded-[48px] object-cover"
          />
        </div>

        <div className="relative h-[412px] w-[280px] rounded-[48px] min-[109.375rem]:h-[512.5px] min-[109.375rem]:w-[399px]">
          <Image
            src={"/album-sea.jpg"}
            alt="sea image"
            fill
            className="rounded-[48px] object-cover"
          />
        </div>
      </figure>

      <div className="relative mt-[20px] h-[412px] w-[518px] rounded-[48px] min-[109.375rem]:h-[512.5px] min-[109.375rem]:w-[818px]">
        <Image
          src={"/album-sunset.jpg"}
          alt="sunset image"
          fill
          className="rounded-[48px] object-cover"
        />
      </div>
    </figure>
  );
}
