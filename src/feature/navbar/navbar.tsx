import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import MenuLink from "./menu-link";
import {
  ABOUT_LINK,
  RUBRIK_LINK,
  DIRECTORY_LINK,
} from "@/constant/navbar/navbar-data";
import BrandLogo from "./brand-logo";
import SideDrawer from "./side-drawer";
import AuthButton from "./auth-button";

export default function NavBar() {
  return (
    <nav className="bg-primary/80 sticky top-0 z-10 flex items-center justify-between px-5 py-3 backdrop-blur-[8px] xl:px-33">
      <BrandLogo />

      <div className="hidden items-center gap-8 text-[14px] font-bold lg:flex">
        <Link href={"/"}>Accueil</Link>

        <NavigationMenu>
          <NavigationMenuList className={"flex gap-6"}>
            <MenuLink data={ABOUT_LINK} triggerTitle={"À propos"} />
            <MenuLink data={RUBRIK_LINK} triggerTitle={"Rubrique"} />
            <MenuLink data={DIRECTORY_LINK} triggerTitle={"Annuaire"} />
          </NavigationMenuList>
        </NavigationMenu>

        <Link href={"/contact"}>Contact</Link>
      </div>

      <SideDrawer />

      <AuthButton className="hidden lg:flex" />
    </nav>
  );
}
