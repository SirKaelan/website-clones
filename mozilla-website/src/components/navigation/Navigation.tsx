import { useState } from "react";

import { Container } from "src/components/Container";
import { NavigationDropdown } from "src/components/navigation/mobile-nav/NavigationDropdown";
import { DesktopNavigation } from "src/components/navigation/desktop-nav/DesktopNavigation";

import mozillaLogo from "src/assets/mozilla-logo.svg";
import hamburgerIcon from "src/assets/hamburger-menu.svg";
import closeMenuIcon from "src/assets/close-menu.svg";

export const Navigation = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <nav className="shadow-md py-4 px-6 md:px-10 lg:px-24 xl-2:px-20">
      <Container width="7.5xl">
        <div className="flex justify-between items-center md:justify-start md:flex-wrap md:gap-4 lg:gap-8 xl-2:gap-10">
          {/* Nav Logo */}
          <div className="flex-shrink-0">
            <a href="#">
              <img src={mozillaLogo} alt="Mozilla Logo" className="w-28 h-9" />
            </a>
          </div>

          {/* Hamburger button */}
          <div onClick={toggleMobileNav} className="md:hidden">
            <button className="flex justify-center items-center w-8 h-8 rounded focus:bg-neutral-200 ">
              {mobileNavOpen ? (
                <img src={closeMenuIcon} alt="Close menu icon" />
              ) : (
                <img src={hamburgerIcon} alt="Hamburger icon" />
              )}
            </button>
          </div>

          {/* After md full navigation */}
          <DesktopNavigation />
        </div>
      </Container>

      {/* Mobile dropdown  */}
      <NavigationDropdown open={mobileNavOpen} />
    </nav>
  );
};
