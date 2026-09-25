import CustomMainTitleSection from "@/components/custom-main-title-section";
import ToggleGroupDemo from "@/components/shadcn-space/toggle-group/toggle-group-01";
import ContactDetailsAndMap from "@/feature/contact/contact-details-and-map";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <section className="flex w-full flex-col items-center justify-center">
        <CustomMainTitleSection
          className="w-[90%]!"
          primaryTitle="Contact & "
          secondaryTitle="correspondants"
          description="Contactez l’équipe MadaDiaspora ou trouvez un correspondant proche de chez vous."
        />

        <div className="mb-[36px]">
          <ToggleGroupDemo
            leftLabel="Nous contacter"
            leftLink="/contact"
            rightLabel="Nos correspondants"
            rightLink="/contact/correspondents"
          />
        </div>
      </section>

      <ContactDetailsAndMap />
    </div>
  );
}
