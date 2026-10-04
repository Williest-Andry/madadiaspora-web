import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { DataLinkType } from "@/constant/navbar/type";
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
      <NavigationMenuItem>
        <NavigationMenuTrigger
          className={"text-[14px] font-bold hover:bg-transparent!"}
        >
          {triggerTitle}
        </NavigationMenuTrigger>

        <NavigationMenuContent className={cn("rounded-[18px] p-5", className)}>
          {data.map((element, index) => {
            if (element.collapsibleLinks) {
              return (
                <CollapsibleLink
                  key={index}
                  triggerTitle={element.title}
                  data={element.collapsibleLinks}
                  triggerClassName="text-[14px]! pl-4! font-semibold!"
                />
              );
            }

            return (
              <NavigationMenuLink
                className={"text-[14px] font-semibold"}
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
