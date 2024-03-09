import type { Socials } from "./types";

export const SITE_URL = "https://vervetheme.vercel.app"; // Replace with your site url
export const SITE_TITLE = "Reading The Tea Leaves";
export const SITE_DESCRIPTION = "";
export const SITE_LOGO = "/logo.svg";

export const SOCIALS: Socials = [
  {
    name: "Facebook",
    href: "https://github.com/aryanjha256/verve",
    linkTitle: `${SITE_TITLE} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://github.com/aryanjha256/verve",
    linkTitle: `${SITE_TITLE} on Instagram`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://github.com/aryanjha256/verve",
    linkTitle: `${SITE_TITLE} on Twitter`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/aryanjha256/verve",
    linkTitle: `${SITE_TITLE} on LinkedIn`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE_TITLE}`,
    active: false,
  },
];
