import firefoxLogo from "src/assets/firefox-logo.svg";
import shieldTick from "src/assets/shield-tick.svg";
import circleTick from "src/assets/circle-tick.svg";
import hexagonSatellite from "src/assets/hexagon-satellite.svg";
import connectedNodes from "src/assets/connected-nodes.svg";
import hexagonMagnifyingGlass from "src/assets/hexagon-magnifying-glass.svg";

type Product = {
  id: number;
  productName: string;
  productDescription: string;
  icon: string;
};

export const products: Product[] = [
  {
    id: 1,
    productName: "Firefox",
    productDescription: "Private & secure browsing",
    icon: firefoxLogo,
  },
  {
    id: 2,
    productName: "Pocket",
    productDescription: "The web’s most intriguing articles",
    icon: shieldTick,
  },
  {
    id: 3,
    productName: "Fakespot",
    productDescription: "Detect fake shopping reviews",
    icon: circleTick,
  },
  {
    id: 4,
    productName: "Relay",
    productDescription: "Hide your phone number and email from spammers",
    icon: hexagonSatellite,
  },
  {
    id: 5,
    productName: "Mozilla VPN",
    productDescription: "A VPN you can trust",
    icon: connectedNodes,
  },
  {
    id: 6,
    productName: "Monitor",
    productDescription: "Protect your private info from data brokers",
    icon: hexagonMagnifyingGlass,
  },
];
