import firefoxLogo from "src/assets/firefox-logo.svg";

type DropdownLink =
  | {
      id: number;
      type: "link";
      text: string;
      href: string;
      icon: string;
    }
  | {
      id: number;
      type: "cta";
      text: string;
      href: string;
    };

export type NavigationDropdownButtonData = {
  id: number;
  text: string;
  dropdownLinks: DropdownLink[];
};

export const mainNavData: NavigationDropdownButtonData[] = [
  {
    id: 1,
    text: "Firefox Browsers",
    dropdownLinks: [
      {
        id: 1,
        type: "link",
        text: "Firefox for Desktop",
        href: "#",
        icon: firefoxLogo,
      },
      {
        id: 2,
        type: "link",
        text: "Firefox for Android",
        href: "#",
        icon: firefoxLogo,
      },
      {
        id: 3,
        type: "link",
        text: "Firefox for iOS",
        href: "#",
        icon: firefoxLogo,
      },
      {
        id: 4,
        type: "link",
        text: "Firefox Focus",
        href: "#",
        icon: firefoxLogo,
      },
      {
        id: 5,
        type: "link",
        text: "Firefox Blog",
        href: "#",
        icon: firefoxLogo,
      },
      {
        id: 6,
        type: "link",
        text: "Release Notes",
        href: "#",
        icon: firefoxLogo,
      },
      {
        id: 7,
        type: "cta",
        text: "View all Firefox Browsers",
        href: "#",
      },
    ],
  },
  {
    id: 2,
    text: "Products",
    dropdownLinks: [
      {
        id: 8,
        type: "link",
        text: "Mozilla Monitor",
        href: "#",
        icon: firefoxLogo,
      },
      {
        id: 9,
        type: "link",
        text: "Facebook Container",
        href: "#",
        icon: firefoxLogo,
      },
      {
        id: 10,
        type: "link",
        text: "Pocket",
        href: "#",
        icon: firefoxLogo,
      },
      {
        id: 11,
        type: "link",
        text: "Mozilla VPN",
        href: "#",
        icon: firefoxLogo,
      },
      {
        id: 12,
        type: "link",
        text: "Firefox Relay",
        href: "#",
        icon: firefoxLogo,
      },
      {
        id: 13,
        type: "link",
        text: "MDN Plus",
        href: "#",
        icon: firefoxLogo,
      },
      {
        id: 14,
        type: "link",
        text: "Fakespot",
        href: "#",
        icon: firefoxLogo,
      },
      {
        id: 15,
        type: "cta",
        text: "View all Products",
        href: "#",
      },
    ],
  },
  {
    id: 3,
    text: "Who We Are",
    dropdownLinks: [
      {
        id: 16,
        type: "link",
        text: "Mozilla Manifesto",
        href: "#",
        icon: firefoxLogo,
      },
      {
        id: 17,
        type: "link",
        text: "Mozilla Foundation",
        href: "#",
        icon: firefoxLogo,
      },
      {
        id: 18,
        type: "link",
        text: "Leadership",
        href: "#",
        icon: firefoxLogo,
      },
      {
        id: 19,
        type: "link",
        text: "Get involved",
        href: "#",
        icon: firefoxLogo,
      },
      {
        id: 20,
        type: "link",
        text: "Careers",
        href: "#",
        icon: firefoxLogo,
      },
      {
        id: 21,
        type: "link",
        text: "Mozilla Blog",
        href: "#",
        icon: firefoxLogo,
      },
      {
        id: 22,
        type: "cta",
        text: "More About Mozilla",
        href: "#",
      },
    ],
  },
  {
    id: 4,
    text: "Innovation",
    dropdownLinks: [
      {
        id: 23,
        type: "link",
        text: "Firefox Developer Edition",
        href: "#",
        icon: firefoxLogo,
      },
      {
        id: 24,
        type: "link",
        text: "MDN Web Docs",
        href: "#",
        icon: firefoxLogo,
      },
      {
        id: 25,
        type: "link",
        text: "Mozilla Innovation Projects",
        href: "#",
        icon: firefoxLogo,
      },
      {
        id: 26,
        type: "link",
        text: "Common Voice",
        href: "#",
        icon: firefoxLogo,
      },
    ],
  },
];
