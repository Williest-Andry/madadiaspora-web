import Image from "next/image";
import FourImagesCard from "./four-images-card";

export default function OtherPartnersSection() {
  return (
    <section className="my-[185px] flex flex-col items-center justify-center gap-[60px] xl:flex-row xl:gap-[10px] 2xl:gap-[171px]">
      <article className="3xl:w-[678px] flex w-[378px] flex-col items-center max-xl:w-full xl:items-start">
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

        <article className="flex flex-col gap-[32px] max-xl:w-[80%]">
          <div className="text-title-sm sm:text-title-md 3xl:text-title-xl flex flex-col text-center leading-[110%] font-bold xl:text-left">
            <h2>{"Un réseau de"} </h2>
            <h2 className="text-secondary">{"partenaires engagés"}</h2>
          </div>
          <p className="3xl:text-p-xl text-p-sm sm:text-p-md text-center leading-[32px] xl:text-left">
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
