import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CircleX, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandLogo from "./brand-logo";
import { Separator } from "@/components/ui/separator";
import SideMenuLink from "./side-menu-link";
import AuthButton from "./auth-button";

export default function SideDrawer() {
  return (
    <div className="z-1000 flex lg:hidden">
      <Drawer swipeDirection="left">
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
