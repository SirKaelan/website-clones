import xIconWhite from "src/assets/x-logo-icon-white.svg";
import mastodonIconWhite from "src/assets/mastodon-logo-icon-white.svg";
import instagramIconWhite from "src/assets/instagram-logo-icon-white.svg";
import linkedInIconWhite from "src/assets/linkedin-logo-icon-white.svg";
import tiktokIconWhite from "src/assets/tiktok-logo-icon-white.svg";
import spotifyIconWhite from "src/assets/spotify-logo-icon-white.svg";
import youtubeIconWhite from "src/assets/youtube-logo-icon-white.svg";

export type DropdownButtonData = {
  title: string;
  links: {
    title: string;
    href: string;
  }[];
};

export const footerButtonData: DropdownButtonData[] = [
  {
    title: "Company",
    links: [
      { title: "Mozilla Manifesto", href: "#" },
      { title: "Press Center", href: "#" },
      { title: "Mozilla Blog", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Privacy Hub", href: "#" },
      { title: "Brand Standards", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { title: "Product Help", href: "#" },
      { title: "File a Bug", href: "#" },
      { title: "Localize Mozilla", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "Developer Edition", href: "#" },
      { title: "Beta", href: "#" },
      { title: "Beta for Android", href: "#" },
      { title: "Nightly", href: "#" },
      { title: "Nightly for Android", href: "#" },
      { title: "Enterprise", href: "#" },
      { title: "Tools", href: "#" },
    ],
  },
];

// Social media data
export type SocialMediaData = {
  username: string;
  links: {
    icon: string;
    socialMediaName: string;
    href: string;
  }[];
};

export const socialMediaData: SocialMediaData[] = [
  {
    username: "Mozilla",
    links: [
      {
        icon: xIconWhite,
        socialMediaName: "X",
        href: "#",
      },
      {
        icon: mastodonIconWhite,
        socialMediaName: "Mastodon",
        href: "#",
      },
      {
        icon: instagramIconWhite,
        socialMediaName: "Instagram",
        href: "#",
      },
      {
        icon: linkedInIconWhite,
        socialMediaName: "LinkedIn",
        href: "#",
      },
      {
        icon: tiktokIconWhite,
        socialMediaName: "TikTok",
        href: "#",
      },
      {
        icon: spotifyIconWhite,
        socialMediaName: "Spotify",
        href: "#",
      },
    ],
  },
  {
    username: "Firefox",
    links: [
      {
        icon: xIconWhite,
        socialMediaName: "X",
        href: "#",
      },
      {
        icon: instagramIconWhite,
        socialMediaName: "Instagram",
        href: "#",
      },
      {
        icon: youtubeIconWhite,
        socialMediaName: "YouTube",
        href: "#",
      },
    ],
  },
];

// Language data
type LanguageData = {
  languageName: string;
  languageCode: string;
};

export const languageData: LanguageData[] = [
  {
    languageName: "English",
    languageCode: "en",
  },
  {
    languageName: "Español",
    languageCode: "es",
  },
  {
    languageName: "Français",
    languageCode: "fr",
  },
  {
    languageName: "Deutsch",
    languageCode: "de",
  },
  {
    languageName: "Italiano",
    languageCode: "it",
  },
  {
    languageName: "Nederlands",
    languageCode: "nl",
  },
  {
    languageName: "Polski",
    languageCode: "pl",
  },
  {
    languageName: "Português",
    languageCode: "pt",
  },
  {
    languageName: "Русский",
    languageCode: "ru",
  },
  {
    languageName: "Svenska",
    languageCode: "sv",
  },
  {
    languageName: "Türkçe",
    languageCode: "tr",
  },
  {
    languageName: "English (Canadian)",
    languageCode: "en-CA",
  },
];

// Legal data
type LegalButtons = {
  buttonContent: string;
  href: string;
};

export const legalDataButtons: LegalButtons[] = [
  {
    buttonContent: "Website Privacy Notice",
    href: "#",
  },
  {
    buttonContent: "Cookies",
    href: "#",
  },
  {
    buttonContent: "Legal",
    href: "#",
  },
  {
    buttonContent: "Community Participation Guidelines",
    href: "#",
  },
  {
    buttonContent: "About this site",
    href: "#",
  },
];

type LegalText =
  | {
      type: "text";
      content: string;
    }
  | {
      type: "link";
      content: string;
      href: string;
    }
  | { type: "break" };

export const legalDataText: LegalText[] = [
  { type: "text", content: "Visit " },
  { type: "link", content: "Mozilla Corporation's", href: "#" },
  { type: "text", content: " not-for-profit parent, the " },
  { type: "link", content: "Mozilla Foundation", href: "#" },
  { type: "text", content: "." },
  { type: "break" },
  {
    type: "text",
    content:
      " Portions of this content are ©1998–2024 by individual mozilla.org contributors. Content available under a ",
  },
  { type: "link", content: "Creative Commons license", href: "#" },
  { type: "text", content: "." },
];
