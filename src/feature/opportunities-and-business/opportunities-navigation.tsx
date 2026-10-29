"use client";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { usePathname } from "next/navigation";

type OpportunityPage =
  | "Investissement"
  | "Partenariat"
  | "Offres d'emploi"
  | "Demandes d'emploi"
  | "Offres de bien et service"
  | "Demandes de bien et service";

type OpportunityPathName =
  | "investment"
  | "partnership"
  | "job-offer"
  | "job-application"
  | "goods-and-services-offer"
  | "goods-and-services-demand";

type OpportinityLink = {
  label: OpportunityPage;
  pathName: OpportunityPathName;
  href: string;
  associatedPage: OpportunityPage;
};

const BASE_PATHNAME = "/opportunities-and-business";

const opportunitiesLink: OpportinityLink[] = [
  {
    label: "Investissement",
    pathName: "investment",
    href: `${BASE_PATHNAME}/investment`,
    associatedPage: "Partenariat",
  },
  {
    label: "Partenariat",
    pathName: "partnership",
    href: `${BASE_PATHNAME}/partnership`,
    associatedPage: "Investissement",
  },
  {
    label: "Offres d'emploi",
    pathName: "job-offer",
    href: `${BASE_PATHNAME}/job-offer`,
    associatedPage: "Demandes d'emploi",
  },
  {
    label: "Demandes d'emploi",
    pathName: "job-application",
    href: `${BASE_PATHNAME}/job-application`,
    associatedPage: "Offres d'emploi",
  },
  {
    label: "Offres de bien et service",
    pathName: "goods-and-services-offer",
    href: `${BASE_PATHNAME}/goods-and-services-offer`,
    associatedPage: "Demandes de bien et service",
  },
  {
    label: "Demandes de bien et service",
    pathName: "goods-and-services-demand",
    href: `${BASE_PATHNAME}/goods-and-services-demand`,
    associatedPage: "Offres de bien et service",
  },
];

export default function OpportunitiesNavigation() {
  const pathName = usePathname();

  const linkToDelete = opportunitiesLink.find((link) =>
    pathName.includes(link.pathName)
  );

  const availableLink = opportunitiesLink.filter(
    (link) =>
      !link.label.includes(linkToDelete?.label ?? "") &&
      !link.label.includes(linkToDelete?.associatedPage ?? "")
  );

  return (
    <nav className="mb-12 flex w-full flex-col gap-4 px-[35px]">
      <p className="text-primary text-p-md lg:text-title-sm font-bold">
        {"Découvrir davantage"}
      </p>
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        {availableLink.map((link, index) => (
          <Badge
            variant={"secondary"}
            key={index}
            className="hover:bg-popover hover:text-secondary h-11 justify-center px-4 py-2 text-center transition-transform hover:scale-105 sm:w-auto"
          >
            <Link
              href={link.href}
              className="text-p-xs lg:text-p-sm block w-full"
            >
              {link.label}
            </Link>
          </Badge>
        ))}
      </div>
    </nav>
  );
}
