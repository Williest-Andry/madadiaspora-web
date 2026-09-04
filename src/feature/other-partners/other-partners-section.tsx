import Image from "next/image";
import FourImagesCard from "./four-images-card";

export default function OtherPartnersSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-[60px] xl:flex-row xl:gap-[10px] 2xl:gap-[171px]">
      <article className="flex w-[378px] flex-col items-center xl:items-start min-[109.375rem]:w-[678px]">
        <figure className="mb-6.75 flex gap-2.25">
          <div className="relative h-5 w-5">
            <Image
              src={"/yellow-globe.png"}
              alt="little yellow globe image"
              fill
            />
          </div>
          <span className="text-[14px] leading-5 font-semibold uppercase">
            {"Nos partenaires"}
          </span>
        </figure>

        <article className="flex flex-col gap-[32px]">
          <div className="flex flex-col text-center text-[24px] leading-[110%] font-bold sm:text-[34px] xl:text-left min-[109.375rem]:text-[64px]">
            <h2>{"Un réseau de"} </h2>
            <h2 className="text-secondary">{"partenaires engagés"}</h2>
          </div>
          <p className="text-center text-[14px] leading-[32px] sm:text-[18px] xl:text-left min-[109.375rem]:text-[28px]">
            {
              "Découvrez les partenaires qui nous accompagnent dans nos actions et participent au rayonnement de la diaspora à travers différentes collaborations."
            }
          </p>
        </article>
      </article>

      <FourImagesCard
        leftFirstImage="/partner-fanamby.png"
        rightFirstImage="/partner-gasikarts.png"
        leftSecondImage="/partner-chebel.png"
        rightSecondImage="/partner-paositra.png"
      />
    </section>
  );
}
