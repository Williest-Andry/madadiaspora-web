import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataLinkType } from "@/constant/navbar/type";
import Link from "next/link";

type CollapsibleLinkProps = {
  data: DataLinkType[];
  triggerTitle: string;
};

export default function CollapsibleLink({
  data,
  triggerTitle,
}: CollapsibleLinkProps) {
  return (
    <Collapsible className="rounded-md">
      <CollapsibleTrigger
        render={
          <Button
            variant="ghost"
            className="-ml-2.5 flex w-full items-center justify-start text-xl! font-bold!"
          >
            {triggerTitle}
            <ChevronDownIcon className="group-data-panel-open/button:rotate-180" />
          </Button>
        }
      />
      <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
        {data.map((about) => (
          <Link key={about.title} href={about.link}>
            {about.title}
          </Link>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
