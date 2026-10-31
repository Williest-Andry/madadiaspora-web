import Image from "next/image";

export default function RightAboutImage() {
  return (
    <figure className="xs:w-90 relative h-90 w-80 sm:h-133 sm:w-138 2xl:h-[615px] 2xl:w-[634px]">
      <Image
        src={"/platform-womens-with-kid-reverse.png"}
        alt="baobab image"
        fill
      />

      <figure className="xs:left-[0px] absolute top-2 -left-[5px] sm:top-4 sm:left-[15px] 2xl:top-[24px] 2xl:left-[22px]">
        <div className="xs:w-42 relative h-40 w-38 sm:h-56 sm:w-59 2xl:h-[257px] 2xl:w-[265px]">
          <Image
            src={"/platform-beach.png"}
            alt="baobab image"
            fill
            className="rounded-[40px] sm:rounded-[50px]"
          />
        </div>
      </figure>

      <figure className="xs:left-[192px] absolute top-49 left-[173px] sm:top-73 sm:left-[300px] 2xl:top-[333px] 2xl:left-[343px]">
        <div className="xs:w-42 relative h-42 w-38 sm:h-53 sm:w-54 2xl:h-[245px] 2xl:w-[250px]">
          <Image
            src={"/platform-mg-latern.png"}
            alt="maki image"
            fill
            className="rounded-[40px] sm:rounded-[56px]"
          />
        </div>
      </figure>
    </figure>
  );
}
