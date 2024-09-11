import { useState } from "react";
import { mainNavData } from "src/data/mainNavData";
import { NavigationDropdown } from "src/components/NavigationDropdown";

import mozillaLogo from "src/assets/mozilla-logo.svg";
import hamburgerIcon from "src/assets/hamburger-menu.svg";
import closeMenuIcon from "src/assets/close-menu.svg";
import heartIcon from "src/assets/heart.svg";

export const Navigation = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false); //

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <nav className=" shadow-md">
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

      {/* Dropdown menu */}
      <div className={`pb-4 px-6 ${mobileNavOpen ? "block" : "hidden"}`}>
        <a
          href="#"
          className="border-2 border-black rounded  py-2 px-6 mt-8 mb-6 flex justify-center items-center gap-2 hover:backdrop-brightness-95 transition"
        >
          <img src={heartIcon} alt="Heart icon" />
          <span className="font-bold">Donate</span>
        </a>
        <nav>
          <ul className="divide-y">
            {mainNavData.map((dropdownData) => (
              <NavigationDropdown
                key={dropdownData.id}
                dropdownData={dropdownData}
              />
            ))}
          </ul>
        </nav>
      </div>
    </nav>
  );
};
