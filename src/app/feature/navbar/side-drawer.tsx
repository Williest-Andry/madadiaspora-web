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
    <div className="flex lg:hidden">
      <Drawer swipeDirection="left">
        <DrawerTrigger render={<Button variant="secondary" />}>
          <Menu />
        </DrawerTrigger>
        <DrawerContent className={"w-70"}>
          <DrawerHeader className="relative">
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

            <DrawerTitle className={"mt-10 flex flex-col gap-10"}>
              <SideMenuLink />
            </DrawerTitle>
          </DrawerHeader>
          <DrawerFooter className="flex flex-col items-center justify-center gap-4">
            <Separator />
            <AuthButton className="w-full" />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
