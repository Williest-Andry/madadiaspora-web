import { DataLinkType } from "./type";

export const ABOUT_LINK: DataLinkType[] = [
  { title: "Plateforme", link: "/about/platform" },
  { title: "Qui sommes nous ?", link: "/about/who-are-we" },
];

export const RUBRIK_LINK: DataLinkType[] = [
  { title: "Actualités", link: "#" },
  { title: "Boîte à projets", link: "#" },
  { title: "Bon à savoir", link: "#" },
  { title: "Diaspor'album", link: "/diasporalbum" },
  {
    title: "Evènements",
    link: "#",
    collapsibleLinks: [{ title: "Calendrier des évènements", link: "#" }],
  },
  { title: "Opportunités & Business", link: "#" },
  { title: "Rencontre avec la Diaspora", link: "#" },
];

export const DIRECTORY_LINK: DataLinkType[] = [
  { title: "Diaspora", link: "/directory" },
  { title: "Professionnels à Madagascar", link: "#" },
];
