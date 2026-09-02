import Image from "next/image";

type CustomCarouselItemProps = {
  image: string;
  title: string;
  description: string;
  country: string;
};

export default function CustomCarouselItem({
  image,
  title,
  description,
  country,
}: CustomCarouselItemProps) {
  return (
    <figure className="relative h-72.5 w-64.25 rounded-[27px]">
      <Image src={image} alt={country} fill className="rounded-[27px]" />

      <article className="font-outfit bg-secondary-foreground/60 absolute top-45 right-2.5 bottom-2.5 left-2.5 flex h-25 w-59 flex-col gap-1 rounded-[17px] p-3 opacity-[4px]">
        <div className="flex justify-between">
          <h2 className="text-[16px] font-bold uppercase">{title}</h2>
          <p className="rounded-[5px] border-[0.5px] px-2 py-1.25 text-[8px] font-light">
            {country}
          </p>
        </div>

        <p className="text-[12px]">{description}</p>
      </article>
    </figure>
  );
}
