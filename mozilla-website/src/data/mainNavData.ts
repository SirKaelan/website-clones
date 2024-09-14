import heartIcon from "src/assets/heart.svg";
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

export type InnerDropdownButton = {
  id: number;
  text: string;
  dropdownLinks: DropdownLink[];
};
export type NavigationDropdownContent = {
  ctaButton: CharityButtonType | DownloadButtonType;
  innerDropdownData: InnerDropdownButton[];
};

export const mainNavData: NavigationDropdownContent = {
  ctaButton: {
    type: "charity-button",
    text: "Donate",
    href: "#",
    icon: heartIcon,
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
          icon: firefoxFocusLogo,
        },
        {
          id: 5,
          type: "link",
          text: "Firefox Blog",
          href: "#",
          icon: penIcon,
        },
        {
          id: 6,
          type: "link",
          text: "Release Notes",
          href: "#",
          icon: notebookIcon,
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
        },
        {
          id: 9,
          type: "link",
          text: "Facebook Container",
          href: "#",
          icon: facebookContainerIcon,
        },
        {
          id: 10,
          type: "link",
          text: "Pocket",
          href: "#",
          icon: pocketLogo,
        },
        {
          id: 11,
          type: "link",
          text: "Mozilla VPN",
          href: "#",
          icon: mozillaVPNLogo,
        },
        {
          id: 12,
          type: "link",
          text: "Firefox Relay",
          href: "#",
          icon: firefoxRelayLogoDark,
        },
        {
          id: 13,
          type: "link",
          text: "MDN Plus",
          href: "#",
          icon: mdnLogoDark,
        },
        {
          id: 14,
          type: "link",
          text: "Fakespot",
          href: "#",
          icon: fakespotLogo,
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
        },
        {
          id: 17,
          type: "link",
          text: "Mozilla Foundation",
          href: "#",
          icon: buildingsIcon,
        },
        {
          id: 18,
          type: "link",
          text: "Leadership",
          href: "#",
          icon: medalIcon,
        },
        {
          id: 19,
          type: "link",
          text: "Get involved",
          href: "#",
          icon: acceptedUserIcon,
        },
        {
          id: 20,
          type: "link",
          text: "Careers",
          href: "#",
          icon: briefcaseIcon,
        },
        {
          id: 21,
          type: "link",
          text: "Mozilla Blog",
          href: "#",
          icon: penIcon,
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
        },
        {
          id: 24,
          type: "link",
          text: "MDN Web Docs",
          href: "#",
          icon: mdnLogo,
        },
        {
          id: 25,
          type: "link",
          text: "Mozilla Innovation Projects",
          href: "#",
          icon: mozillaInnovationIcon,
        },
        {
          id: 26,
          type: "link",
          text: "Common Voice",
          href: "#",
          icon: mozillaCommonVoiceIcon,
        },
      ],
    },
  ],
};
