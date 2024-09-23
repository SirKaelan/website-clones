// import heartIcon from "src/assets/heart.svg";
import firefoxLogo from "src/assets/firefox-logo.svg";
import firefoxFocusLogo from "src/assets/firefox-focus-logo.svg";
import penIcon from "src/assets/pen-icon.svg";
import notebookIcon from "src/assets/notebook-icon.svg";
import mozillaMonitorIcon from "src/assets/hexagon-magnifying-glass.svg";
import facebookContainerIcon from "src/assets/facebook-container-logo.svg";
import pocketLogo from "src/assets/shield-tick.svg";
import mozillaVPNLogo from "src/assets/connected-nodes.svg";
import firefoxRelayLogoDark from "src/assets/firefox-relay-logo-darker.svg";
import mdnLogoDark from "src/assets/mdn-logo-darker.svg";
import fakespotLogo from "src/assets/circle-tick.svg";
import clipboardIcon from "src/assets/clipboard-icon.svg";
import buildingsIcon from "src/assets/buildings-icon.svg";
import medalIcon from "src/assets/medal-icon.svg";
import acceptedUserIcon from "src/assets/accepted-user-icon.svg";
import briefcaseIcon from "src/assets/briefcase-icon.svg";
import firefoxDevEditionLogo from "src/assets/firefox-dev-edition-logo.svg";
import mdnLogo from "src/assets/mdn-logo.svg";
import mozillaInnovationIcon from "src/assets/mozilla-innovation-icon.svg";
import mozillaCommonVoiceIcon from "src/assets/mozilla-common-voice-icon.svg";

export type CharityButtonType = {
  type: "charity-button";
  text: string;
  href: string;
  icon: string;
};

export type DownloadButtonType = {
  type: "download-button";
  text: string;
  href: string;
};

export type DropdownLink = {
  id: number;
  type: "link";
  text: string;
  href: string;
  icon: string;
  description: string;
};

export type DropdownCTA = {
  id: number;
  type: "cta";
  text: string;
  href: string;
};

type DropdownButton = DropdownLink | DropdownCTA;

export type InnerDropdownButton = {
  id: number;
  text: string;
  dropdownLinks: DropdownButton[];
};
export type NavigationDropdownContent = {
  ctaButton: CharityButtonType | DownloadButtonType;
  innerDropdownData: InnerDropdownButton[];
};

export const mainNavData: NavigationDropdownContent = {
  ctaButton: {
    type: "download-button",
    text: "Download Firefox",
    href: "#",
  },
  innerDropdownData: [
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
          description:
            "Get the not-for-profit-backed browser on Windows, Mac or Linux.",
        },
        {
          id: 2,
          type: "link",
          text: "Firefox for Android",
          href: "#",
          icon: firefoxLogo,
          description:
            "Get the customizable mobile browser for Android smartphones.",
        },
        {
          id: 3,
          type: "link",
          text: "Firefox for iOS",
          href: "#",
          icon: firefoxLogo,
          description: "Get the mobile browser for your iPhone or iPad.",
        },
        {
          id: 4,
          type: "link",
          text: "Firefox Focus",
          href: "#",
          icon: firefoxFocusLogo,
          description: "Simply private mobile browsing.",
        },
        {
          id: 5,
          type: "link",
          text: "Firefox Blog",
          href: "#",
          icon: penIcon,
          description:
            "Read about new Firefox features and ways to stay safe online.",
        },
        {
          id: 6,
          type: "link",
          text: "Release Notes",
          href: "#",
          icon: notebookIcon,
          description: "Get the details on the latest Firefox updates.",
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
          icon: mozillaMonitorIcon,
          description:
            "See if your email has appeared in a company’s data breach.",
        },
        {
          id: 9,
          type: "link",
          text: "Facebook Container",
          href: "#",
          icon: facebookContainerIcon,
          description:
            "Help prevent Facebook from collecting your data outside their site.",
        },
        {
          id: 10,
          type: "link",
          text: "Pocket",
          href: "#",
          icon: pocketLogo,
          description:
            "Save and discover the best stories from across the web.",
        },
        {
          id: 11,
          type: "link",
          text: "Mozilla VPN",
          href: "#",
          icon: mozillaVPNLogo,
          description:
            "Get protection beyond your browser, on all your devices.",
        },
        {
          id: 12,
          type: "link",
          text: "Firefox Relay",
          href: "#",
          icon: firefoxRelayLogoDark,
          description:
            "Sign up for new accounts without handing over your email address.",
        },
        {
          id: 13,
          type: "link",
          text: "MDN Plus",
          href: "#",
          icon: mdnLogoDark,
          description: "New features and tools for a customized MDN experience",
        },
        {
          id: 14,
          type: "link",
          text: "Fakespot",
          href: "#",
          icon: fakespotLogo,
          description: "Use AI to detect fake reviews and scams",
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
          icon: clipboardIcon,
          description:
            "Learn about the values and principles that guide our mission.",
        },
        {
          id: 17,
          type: "link",
          text: "Mozilla Foundation",
          href: "#",
          icon: buildingsIcon,
          description:
            "Meet the not-for-profit behind Firefox that stands for a better web.",
        },
        {
          id: 18,
          type: "link",
          text: "Leadership",
          href: "#",
          icon: medalIcon,
          description:
            "Meet the team that’s building technology for a better internet.",
        },
        {
          id: 19,
          type: "link",
          text: "Get involved",
          href: "#",
          icon: acceptedUserIcon,
          description: "Join the fight for a healthy internet.",
        },
        {
          id: 20,
          type: "link",
          text: "Careers",
          href: "#",
          icon: briefcaseIcon,
          description:
            "Work for a mission-driven organization that makes people-first products.",
        },
        {
          id: 21,
          type: "link",
          text: "Mozilla Blog",
          href: "#",
          icon: penIcon,
          description: "Learn about Mozilla and the issues that matter to us.",
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
          icon: firefoxDevEditionLogo,
          description: "Get the Firefox browser built just for developers.",
        },
        {
          id: 24,
          type: "link",
          text: "MDN Web Docs",
          href: "#",
          icon: mdnLogo,
          description: "Check out the home for web developer resources.",
        },
        {
          id: 25,
          type: "link",
          text: "Mozilla Innovation Projects",
          href: "#",
          icon: mozillaInnovationIcon,
          description: "Discover ways to bring bright ideas to life.",
        },
        {
          id: 26,
          type: "link",
          text: "Common Voice",
          href: "#",
          icon: mozillaCommonVoiceIcon,
          description:
            "Donate your voice so the future of the web can hear everyone.",
        },
      ],
    },
  ],
};
