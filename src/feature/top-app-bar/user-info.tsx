import Image from "next/image";

export default function UserInfo() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-[8px]">
        <p className="text-layout-black text-rubric-text-md font-[500]">
          {"Fitiavana B."}
        </p>
        <div className="relative h-[24px] w-[24px] rounded-full">
          <Image
            src={"/top-verified.svg"}
            alt="verified icon"
            fill
            className="rounded-full object-contain"
          />
        </div>
      </div>
      <p className="text-rubric-text-sm text-layout-muted">Diaspora canada</p>
    </div>
  );
}
