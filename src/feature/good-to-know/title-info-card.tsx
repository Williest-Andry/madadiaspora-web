import Image from "next/image";

type TitleInfoCardProps = {
  image: string;
  title: string;
  description: string;
};

export default function TitleInfoCard({
  image,
  title,
  description,
}: TitleInfoCardProps) {
  return (
    <article className="xs:w-[195px] relative flex h-[357px] w-full flex-col items-center justify-end rounded-[12px] border-[1px] border-[#ECFAFE1A]/10 p-[20px]">
      <Image
        src={image}
        alt={image}
        fill
        className="z-9 rounded-[12px] object-cover opacity-[28%]"
      />

      <div className="text-foreground z-10 flex flex-col gap-[8px]">
        <p className="text-title-sm font-[700]">{title}</p>
        <p className="text-p-md line-clamp-3 font-[400]">{description}</p>
      </div>
    </article>
  );
}
