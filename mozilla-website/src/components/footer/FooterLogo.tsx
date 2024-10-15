import mozillaLogoWhite from "src/assets/mozilla-logo-white.svg";

export const FooterLogo = () => {
  return (
    <div>
      <a href="#" className="inline-block">
        <img
          src={mozillaLogoWhite}
          alt="Mozilla Logo"
          width={100}
          height={32}
        />
      </a>
    </div>
  );
};
