import Image from "next/image";

export default function PreviewInfoCard() {
  return (
    <article className="flex flex-col gap-[15px] rounded-[8px] border-2 p-4 xl:py-6  lg:max-xl:w-[70%] max-xl:items-center xl:px-10">
      <p className="text-p-xl text-layout-black font-[500]">{"Bon à savoir"}</p>

      <div className="flex flex-col gap-[26px] lg:gap-[16px]">
        {new Array(3).fill(0).map((l, index) => (
          <div key={index} className="flex items-center max-xl:justify-center gap-[16px]">
            <div className="relative w-[50px] h-[50px] lg:w-[55px] lg:h-[48px] xl:h-[52px] xl:w-[52px] rounded-full">
              <Image
                src={"/mock-preview.jpg"}
                alt="mock"
                fill
                className="rounded-full object-fill"
              />
            </div>

            <div className="flex flex-col gap-[4px]">
              <p className="text-rubric-text-xs text-layout-muted font-[300] font-light">
                {"Lundi 12 Janvier"}
              </p>
              <p className="text-rubric-text-sm text-popover font-[500] line-clamp-2">
                {"Recherche de financement"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
