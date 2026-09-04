import Image from "next/image";

export default function AlbumLeft() {
  return (
    <figure className="flex flex-col gap-[20px]">
      <div className="relative h-[354px] w-[299px] rounded-[48px] min-[109.375rem]:h-[454px] min-[109.375rem]:w-[399px]">
        <Image
          src={"/maki.jpg"}
          alt="maki image"
          fill
          className="rounded-[48px] object-cover"
        />
      </div>

      <div className="relative h-[600px] w-[299px] rounded-[48px] min-[109.375rem]:h-[700px] min-[109.375rem]:w-[399px]">
        <Image
          src={"/album-baoba-taxi.jpg"}
          alt="baoba and taxi image"
          fill
          className="rounded-[48px] object-cover"
        />
      </div>
    </figure>
  );
}
