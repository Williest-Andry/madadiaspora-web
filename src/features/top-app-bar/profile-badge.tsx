import { Separator } from "@/components/ui/separator";
import { Settings } from "lucide-react";
import { MobileProfileIcon } from "./mobile-profile-icon";
import UserAvatar from "./user-avatar";
import UserInfo from "./user-info";

export default function ProfileBadge() {
  return (
    <div className="flex items-center justify-center gap-[24px]">
      <div className="hidden items-center gap-[12px] lg:flex">
        <UserAvatar />
        <UserInfo />
      </div>

      <Separator orientation="vertical" className={"w-[2px]! max-lg:hidden"} />

      <div className="hidden lg:flex">
        <Settings size={40} color="var(--color-layout-black)" />
      </div>

      <div className="flex items-center min-lg:hidden">
        <MobileProfileIcon />
      </div>
    </div>
  );
}
