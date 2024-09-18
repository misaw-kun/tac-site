import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconHome,
  IconMailbox,
} from "@tabler/icons-react";

export const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/",
  },
  {
    title: "Facebook",
    icon: (
      <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.facebook.com/profile.php?id=61565648582370",
  },
  {
    title: "Instagram",
    icon: (
      <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.instagram.com/theautomationcompany.tech/",
  },

  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/company/the-automation-company-tech",
  },
  {
    title: "Blog",
    icon: (
      <IconMailbox className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/posts",
  },
];
