"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CircleX, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandLogo from "./brand-logo";
import { Separator } from "@/components/ui/separator";
import SideMenuLink from "./side-menu-link";
import AuthButton from "./auth-button";
import { useState } from "react";

export default function SideDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="z-1000 flex lg:hidden">
      <Drawer swipeDirection="left" open={open} onOpenChange={setOpen}>
        <DrawerTrigger render={<Button variant="secondary" />}>
          <Menu />
        </DrawerTrigger>
        <DrawerContent className={"z-1000 h-full w-70"}>
          <DrawerHeader className="relative z-1000">
            <DrawerClose
              className={"flex items-center justify-end"}
              render={
                <Button
                  variant="ghost"
                  className={"absolute right-3 flex w-10 items-center"}
                >
                  <CircleX />
                </Button>
              }
            />
            <div className="mt-10">
              <BrandLogo />
            </div>
          </DrawerHeader>
          <div
            className={"z-1000 mt-10 flex flex-col gap-10 overflow-y-auto pl-4"}
            onClick={(e) => {
              if ((e.target as HTMLElement).closest("a")) {
                setOpen(false);
              }
            }}
          >
            <SideMenuLink />
          </div>
          <DrawerFooter className="z-1000 flex flex-col items-center justify-center gap-4">
            <Separator />
            <AuthButton className="w-full" />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
