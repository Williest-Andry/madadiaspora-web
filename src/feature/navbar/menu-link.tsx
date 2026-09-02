import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { DataLinkType } from "@/constant/navbar/type";

type MenuLinkProps = {
  data: DataLinkType[];
  triggerTitle: string;
};

export default function MenuLink({ data, triggerTitle }: MenuLinkProps) {
  return (
    <>
      <NavigationMenuItem>
        <NavigationMenuTrigger
          className={"text-[14px] font-bold hover:bg-transparent!"}
        >
          {triggerTitle}
        </NavigationMenuTrigger>

        <NavigationMenuContent className={"rounded-[18px] p-5"}>
          {data.map((element) => (
            <NavigationMenuLink
              className={"text-[14px] font-semibold"}
              key={element.title}
              href={element.link}
            >
              {element.title}
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    </>
  );
}
