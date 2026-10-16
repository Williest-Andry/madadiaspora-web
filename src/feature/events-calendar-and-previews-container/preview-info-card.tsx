import Image from "next/image";

export default function PreviewInfoCard() {
  return (
    <article className="flex flex-col gap-[15px] rounded-[8px] border-2 p-4 max-xl:items-center lg:max-xl:w-[70%] xl:px-10 xl:py-6">
      <p className="text-p-xl text-layout-black font-[500]">{"Bon à savoir"}</p>

      <div className="flex flex-col gap-[26px] lg:gap-[16px]">
        {new Array(3).fill(0).map((l, index) => (
          <div
            key={index}
            className="flex items-center gap-[16px] max-xl:justify-center"
          >
            <div className="relative h-[50px] w-[50px] rounded-full lg:h-[48px] lg:w-[55px] xl:h-[52px] xl:w-[52px]">
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
              <p className="text-rubric-text-sm text-popover line-clamp-2 font-[500]">
                {"Recherche de financement"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
