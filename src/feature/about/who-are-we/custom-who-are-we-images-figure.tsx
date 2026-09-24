import Image from "next/image";

export default function CustomWhoAreWeImagesFigure() {
  return (
    <figure className="xs:w-90 relative h-90 w-80 sm:h-133 sm:w-138 2xl:h-183 2xl:w-188.5">
      <Image src={"/who-phoenix.png"} alt="baobab image" fill />

      <figure className="xs:left-50 absolute top-1 left-43 sm:top-4 sm:left-77 2xl:top-7 2xl:left-103.25">
        <div className="xs:w-42 relative h-40 w-38 sm:h-56 sm:w-59 2xl:h-76.5 2xl:w-79">
          <Image
            src={"/who-phoenix-2.png"}
            alt="baobab image"
            fill
            className="rounded-[40px] sm:rounded-[50px]"
          />
        </div>
      </figure>

      <figure className="xs:-left-2 absolute top-49 -left-1 rounded-[78px] sm:top-73 sm:left-8 2xl:top-99.5 2xl:left-11.25">
        <div className="bg-primary xs:w-42 relative flex h-42 w-38 flex-col items-center justify-center rounded-[48px] sm:h-53 sm:w-54 sm:rounded-[58px] 2xl:h-73 2xl:w-74.5 2xl:rounded-[78px]">
          <p className="3xl:text-[140px] text-title-sm sm:text-title-md 2xl:text-title-xl text-justify font-bold">
            25
          </p>
          <p className="text-p-sm sm:text-p-md text-justify leading-[50.72px] 2xl:text-[21.38px]">
            Phoenix Agency
          </p>
        </div>
      </figure>
    </figure>
  );
}
