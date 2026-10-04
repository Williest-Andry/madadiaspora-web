import Link from "next/link";
import {
  ABOUT_LINK,
  DIRECTORY_LINK,
  RUBRIK_LINK,
} from "@/constant/navbar/navbar-data";
import CollapsibleLink from "./collapsible-link";

export default function SideMenuLink() {
  return (
    <div className="z-1000 flex flex-col gap-6 pl-2 text-xl font-bold">
      <Link href={"/"}>Accueil</Link>
      <Link href={"#"}>Contact</Link>
      <CollapsibleLink data={ABOUT_LINK} triggerTitle={"À propos"} />
      <CollapsibleLink data={DIRECTORY_LINK} triggerTitle={"Annuaire"} />
      <CollapsibleLink data={RUBRIK_LINK} triggerTitle={"Rubrique"} />
    </div>
  );
}
