import { useState } from "react";

import { NavigationDropdown } from "src/components/navigation/NavigationDropdown";

import mozillaLogo from "src/assets/mozilla-logo.svg";
import hamburgerIcon from "src/assets/hamburger-menu.svg";
import closeMenuIcon from "src/assets/close-menu.svg";

export const Navigation = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <nav className="shadow-md">
      <div className="py-4 px-6 flex justify-between items-center">
        {/* Nav Logo */}
        <div>
          <a href="#">
            <img src={mozillaLogo} alt="Mozilla Logo" width={112} height={32} />
          </a>
        </div>

        {/* Hamburger button */}
        <div onClick={toggleMobileNav}>
          <button className="flex justify-center items-center w-8 h-8 rounded focus:bg-neutral-200 ">
            {mobileNavOpen ? (
              <img src={closeMenuIcon} alt="Close menu icon" />
            ) : (
              <img src={hamburgerIcon} alt="Hamburger icon" />
            )}
          </button>
        </div>
      </div>

      <NavigationDropdown open={mobileNavOpen} />
    </nav>
  );
};
