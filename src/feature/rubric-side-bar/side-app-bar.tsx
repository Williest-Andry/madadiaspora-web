import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import LinkMenu from "./link-menu";
import DiscoveryCard from "./discovery-card";
import PartnersCarousel from "./partners-carousel";

export function SideAppBar() {
  return (
    <Drawer
      modal={false}
      disablePointerDismissal
      swipeDirection="left"
      defaultOpen
    >
      <DrawerTrigger
        render={
          <Button
            variant="default"
            className={"bg-foreground hover:bg-foreground block lg:hidden"}
          >
            <Menu color="var(--color-layout-black)" />
          </Button>
        }
      />
      <DrawerContent
        draggable={"false"}
        className={"bg-foreground text-primary mt-[115px] border-none pl-[60px]"}
      >
        <LinkMenu />

        <div className="mt-[30px] flex flex-col gap-[24px]">
          <DiscoveryCard
            title="Rencontre avec la Diaspora"
            description="Rencontre Diaspora mensuel pour la renovation du nouvelles"
          />

          <DiscoveryCard
            title="Passion & Art"
            description="Chaque mois, échangeons et créons des liens."
          />
        </div>

        <PartnersCarousel />
      </DrawerContent>
    </Drawer>
  );
}
