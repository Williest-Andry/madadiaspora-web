import { ServicesData } from "@/constant/services/type";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  data: ServicesData;
};

export default function ServiceCard({ data }: ServiceCardProps) {
  return (
    <article className="relative h-100 w-97.25 rounded-[38px] min-[1700px]:h-148.75 min-[1700px]:w-134.75">
      <figure className="relative h-full w-full">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="rounded-[38px] object-cover"
        />
      </figure>

      <article className="bg-secondary-foreground/90 absolute top-49.75 right-2.75 left-2.75 flex h-46.25 flex-col gap-2 rounded-[29px] p-3.5 min-[1700px]:top-99.75 min-[1700px]:w-129.25">
        <div className="flex flex-col gap-3">
          <h3 className="text-[20px] leading-7 font-bold uppercase min-[1700px]:text-[26px]">
            {data.title}
          </h3>
          <p className="line-clamp-2 h-9.5 text-[18px] leading-[100%]">
            {data.description}
          </p>
        </div>

        <Link
          href={"#"}
          className="bg-foreground/20 mt-6.25 flex h-12 w-[99%] items-center justify-between rounded-[14px] px-5 py-1"
        >
          <p>Voir plus</p>
          <MoveRight />
        </Link>
      </article>
    </article>
  );
}
