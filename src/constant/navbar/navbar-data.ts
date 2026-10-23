import { DataLinkType } from "./type";

export const ABOUT_LINK: DataLinkType[] = [
  { title: "Plateforme", link: "/about/platform" },
  { title: "Qui sommes nous ?", link: "/about/who-are-we" },
];

export const RUBRIK_LINK: DataLinkType[] = [
  { title: "Actualités", link: "/news" },
  { title: "Boîte à projets", link: "/projects-box" },
  { title: "Bon à savoir", link: "/good-to-know" },
  { title: "Diaspor'album", link: "/diasporalbum" },
  {
    title: "Evènements",
    link: "#",
    collapsibleLinks: [
      { title: "Liste des évènements", link: "/events" },
      { title: "Calendrier des évènements", link: "/events-calendar" },
    ],
  },
  {
    title: "Opportunités & Business",
    link: "/opportunities-and-business/investment",
  },
  { title: "Rencontre avec la Diaspora", link: "/meeting-with-the-diaspora" },
];

export const DIRECTORY_LINK: DataLinkType[] = [
  { title: "Diaspora", link: "/directory" },
  {
    title: "Professionnels à Madagascar",
    link: "/professionals-in-madagascar",
  },
];
