import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { DataLinkType } from "@/constants/navbar/type";
import CollapsibleLink from "./collapsible-link";
import { cn } from "@/lib/utils";

type MenuLinkProps = {
  data: DataLinkType[];
  triggerTitle: string;
  className?: string;
};

export default function MenuLink({
  data,
  triggerTitle,
  className,
}: MenuLinkProps) {
  return (
    <>
      <NavigationMenuItem className={"z-100"}>
        <NavigationMenuTrigger
          className={"z-100 text-[14px] font-bold hover:bg-transparent!"}
        >
          {triggerTitle}
        </NavigationMenuTrigger>

        <NavigationMenuContent
          className={cn("z-100 rounded-[18px] p-5", className)}
        >
          {data.map((element, index) => {
            if (element.collapsibleLinks) {
              return (
                <CollapsibleLink
                  key={index}
                  triggerTitle={element.title}
                  data={element.collapsibleLinks}
                  triggerClassName="text-[14px]! pl-4! font-semibold! z-100"
                />
              );
            }

            return (
              <NavigationMenuLink
                className={"z-100 text-[14px] font-semibold"}
                key={element.title}
                href={element.link}
              >
                {element.title}
              </NavigationMenuLink>
            );
          })}
        </NavigationMenuContent>
      </NavigationMenuItem>
    </>
  );
}
