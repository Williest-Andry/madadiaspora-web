"use client";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import LinkMenu from "./link-menu";
import DiscoveryCard from "./discovery-card";
import PartnersCarousel from "./partners-carousel";
import { useEffect, useState } from "react";

const DESKTOP_QUERY = "(min-width: 1280px)";

export function SideAppBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_QUERY);
    setIsOpen(mql.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsOpen(e.matches);
    };
    mql.addEventListener("change", handleChange);

    return () => mql.removeEventListener("change", handleChange);
  }, []);

  return (
    <Drawer
      modal={false}
      disablePointerDismissal
      swipeDirection="left"
      open={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
    >
      <DrawerTrigger
        render={
          <Button
            variant="default"
            className={"bg-foreground hover:bg-foreground block xl:hidden"}
          >
            <Menu color="var(--color-layout-black)" />
          </Button>
        }
      />
      <DrawerContent
        draggable={"false"}
        className={
          "bg-foreground text-primary sticky top-0 mt-[93px] h-full border-none max-sm:px-6 sm:pl-[60px] sm:max-xl:pr-4 xl:mt-[115px]"
        }
      >
        <div className="h-hull w-full overflow-y-auto">
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
          <div className="h-[300px]">
            <PartnersCarousel />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
