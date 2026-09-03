import Image from "next/image";

export default function AboutImagesFigure() {
  return (
    <figure className="relative h-90 w-90 sm:h-133 sm:w-138 2xl:h-183 2xl:w-188.5">
      <Image src={"/about-baobab.png"} alt="baobab image" fill />

      <figure className="absolute top-1 left-50 sm:top-4 sm:left-77 2xl:top-7 2xl:left-103.25">
        <div className="relative h-40 w-42 sm:h-56 sm:w-59 2xl:h-76.5 2xl:w-79">
          <Image
            src={"/baobab.jpg"}
            alt="baobab image"
            fill
            className="rounded-[40px] sm:rounded-[50px]"
          />
        </div>
      </figure>

      <figure className="absolute top-49 -left-2 sm:top-73 sm:left-8 2xl:top-99.5 2xl:left-11.25">
        <div className="relative h-42 w-42 sm:h-53 sm:w-54 2xl:h-73 2xl:w-74.5">
          <Image
            src={"/maki.jpg"}
            alt="maki image"
            fill
            className="rounded-[40px] sm:rounded-[56px]"
          />
        </div>
      </figure>
    </figure>
  );
}
