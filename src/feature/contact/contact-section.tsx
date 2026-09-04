import Image from "next/image";
import ContactForm from "./contact-form";
import ApprouvedText from "./approuved-text";
import SocialMediaCard from "./social-media-card";

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
    <section className="bg-foreground text-popover flex flex-col items-center justify-center pt-[150px] xl:pt-[198px]">
      <article className="flex flex-col items-center justify-center gap-[50px] xl:flex-row 2xl:gap-[165px]">
        <article className="flex w-[60%] flex-col items-center gap-[47px] xl:w-[378px] xl:items-start xl:gap-[27px] min-[106.25rem]:w-[678px]">
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
            <div className="flex w-full flex-col text-center text-[24px] leading-[110%] font-bold sm:text-[34px] xl:text-left min-[106.25rem]:text-[64px]">
              <h2>
                {"Nous sommes"}{" "}
                <span className="text-secondary">{"à votre écoute"}</span>
              </h2>
            </div>
            <p className="text-center text-[14px] leading-[32px] sm:text-[18px] xl:text-left min-[106.25rem]:text-[24px]">
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
    </section>
  );
}
