import Image from "next/image";
import ContactForm from "./contact-form";
import ApprouvedText from "./approuved-text";
import SocialMediaCard from "./social-media-card";
import { CONTACT } from "@/constant/contact/data";
import ContactCard from "./contact-card";
import MapSection from "./map-section";

export default function ContactSection() {
  const APPROUVED_TEXT = [
    "Assistance personnalisée",
    "Réponse rapide",
    "Accompagnement de la communauté",
  ];

  const SOCIAL_MEDIA_IMAGE = [
    { image: "/facebook.png", link: "#" },
    { image: "/instagram.png", link: "#" },
    { image: "/linkedin.png", link: "#" },
  ];

  return (
    <section className="bg-foreground text-popover flex flex-col items-center justify-center pt-[150px] pb-[57px] xl:pt-[198px]">
      <article className="flex flex-col items-center justify-center gap-[50px] xl:flex-row 2xl:gap-[165px]">
        <article className="3xl:w-[678px] flex w-[60%] flex-col items-center gap-[47px] max-xl:w-[80%] xl:w-[378px] xl:items-start xl:gap-[27px]">
          <figure className="mb-6.75 flex gap-2.25">
            <div className="relative h-5 w-5">
              <Image
                src={"/yellow-globe.png"}
                alt="little yellow globe image"
                fill
              />
            </div>
            <span className="text-[14px] leading-5 font-semibold uppercase">
              {"Contactez-nous"}
            </span>
          </figure>

          <article className="flex flex-col gap-[32px]">
            <div className="text-title-sm sm:text-title-md 3xl:text-title-xl flex w-full flex-col text-center leading-[110%] font-bold xl:text-left">
              <h2>
                {"Nous sommes"}{" "}
                <span className="text-secondary">{"à votre écoute"}</span>
              </h2>
            </div>
            <p className="text-p-sm 3xl:text-title-sm sm:text-p-md text-center leading-[32px] xl:text-left">
              {
                "Une question, une suggestion ou besoin d'informations ? Notre équipe est disponible pour vous accompagner et répondre à vos demandes."
              }
            </p>
          </article>

          <article className="flex flex-col gap-[18px]">
            {APPROUVED_TEXT.map((text, index) => (
              <ApprouvedText text={text} key={index} />
            ))}
          </article>

          <article>
            <SocialMediaCard socialMediaImages={SOCIAL_MEDIA_IMAGE} />
          </article>
        </article>

        <ContactForm />
      </article>

      <article className="mt-[27px] flex w-[88%] flex-col items-center gap-[20px] md:flex-row md:items-start">
        {CONTACT.map((contact, index) => (
          <ContactCard data={contact} key={index} />
        ))}
      </article>

      <MapSection />
    </section>
  );
}
