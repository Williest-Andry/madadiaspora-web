import CommunitySection from "@/feature/about/platform/community-section";
import OurIdentitySection from "@/feature/about/platform/our-identity-section";
import ServicesDetails from "@/feature/about/platform/services-details";

export default function PlatformPage() {
  return (
    <div>
      <article className="mt-[77px] mb-[110px] flex w-full flex-col items-center justify-center gap-[17px]">
        <h1 className="max-xs:w-[70%] text-title-sm sm:text-title-md lg:text-title-xl text-center leading-[110%] font-bold tracking-normal">
          {"À propos de "}{" "}
          <span className="text-secondary">{"MadaDiaspora"}</span>
        </h1>
        <p className="text-muted-foreground text-p-sm sm:text-p-md lg:text-p-xl w-[57%] text-center leading-[32px] tracking-normal">
          {
            "Découvrez la vision, la mission et les valeurs qui font de MadaDiaspora un lien entre les Malagasy du monde et Madagascar."
          }
        </p>
      </article>

      <OurIdentitySection />

      <ServicesDetails />

      <CommunitySection />
    </div>
  );
}
