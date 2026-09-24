import { ExpertiseData } from "@/constant/about-info/who-are-we/type";
import { ServicesData } from "@/constant/services/type";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  data: ServicesData | ExpertiseData;
  buttonLabel?: string;
  className?: string;
};

export default function ServiceCard({
  data,
  buttonLabel = "Voir plus",
  className,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "3xl:h-148.75 3xl:w-134.75 xs:w-97.25 relative h-100 w-78 rounded-[38px]",
        className
      )}
    >
      <figure className="relative h-full w-full">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="rounded-[38px] object-cover"
        />
      </figure>

      <article className="bg-secondary-foreground/90 3xl:top-99.75 3xl:w-129.25 absolute top-49.75 right-2.75 left-2.75 flex h-46.25 flex-col gap-2 rounded-[29px] p-3.5">
        <div className="flex flex-col gap-3">
          <h3 className="3xl:text-title-sm text-p-md leading-7 font-bold uppercase">
            {data.title}
          </h3>
          <p className="max-xs:text-p-sm text-p-md max-xs:h-12 line-clamp-2 h-9.5 leading-[100%]">
            {data.description}
          </p>
        </div>

        <Link
          href={"#"}
          className="bg-foreground/20 mt-6.25 flex h-12 w-[99%] items-center justify-between rounded-[14px] px-5 py-1"
        >
          <p className="max-xs:text-p-sm">{buttonLabel}</p>
          <MoveRight />
        </Link>
      </article>
    </article>
  );
}
