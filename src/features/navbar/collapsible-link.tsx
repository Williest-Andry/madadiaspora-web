import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataLinkType } from "@/constant/navbar/type";
import Link from "next/link";
import { cn } from "@/lib/utils";

type CollapsibleLinkProps = {
  data: DataLinkType[];
  triggerTitle: string;
  triggerClassName?: string;
  contentClassName?: string;
};

export default function CollapsibleLink({
  data,
  triggerTitle,
  triggerClassName,
  contentClassName,
}: CollapsibleLinkProps) {
  return (
    <Collapsible className="rounded-md">
      <CollapsibleTrigger
        render={
          <Button
            variant="ghost"
            className={cn(
              "-ml-2.5 flex w-full items-center justify-start text-xl! font-bold!",
              triggerClassName
            )}
          >
            {triggerTitle}
            <ChevronDownIcon className="group-data-panel-open/button:rotate-180" />
          </Button>
        }
      />
      <CollapsibleContent
        className={cn(
          "flex flex-col items-start gap-2 p-2.5 pt-0 text-sm",
          contentClassName
        )}
      >
        {data.map((about, index) => {
          if (about.collapsibleLinks) {
            return (
              <CollapsibleLink
                key={index}
                triggerTitle={about.title}
                data={about.collapsibleLinks}
                triggerClassName="text-[14px]! font-bold!"
              />
            );
          }

          return (
            <Link key={about.title} href={about.link}>
              {about.title}
            </Link>
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
}
