import mozillaVPNProductFeature from "src/assets/mozilla-vpn-product-feature.svg";

type Promo = {
  img: string;
  imgAlt: string;
  heading: string;
  content: string;
  highlightedText: string | null;
  btnContent: string;
};

const promoObj: Promo = {
  img: mozillaVPNProductFeature,
  imgAlt: "Mozilla VPN product feature image",
  heading: "Featured Product",
  content: "Blur your location & activity using",
  highlightedText: "Mozilla VPN",
  btnContent: "Get Mozilla VPN",
};

export const promoData = [promoObj];
