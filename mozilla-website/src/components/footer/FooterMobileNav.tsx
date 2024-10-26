import { useState } from "react";
import { DropdownButtonData } from "src/data/footerData";

import plusIconWhite from "src/assets/plus-icon-white.svg";

export const FooterMobileNav = ({ buttonData }: DropdownButtonProps) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="xs:hidden">
        <button
          className="flex justify-between py-4 w-full focus:outline-dotted outline-1"
          onClick={toggleDropdown}
        >
          <h5>{buttonData.title}</h5>
          <img
            className={`${dropdownOpen ? "rotate-45" : "rotate-0"} transition`}
            src={plusIconWhite}
            alt="Plus sign"
          />
        </button>

        {dropdownOpen && (
          <ul>
            {buttonData.links.map((link) => (
              <li className="py-1 first:mt-2" key={link.title}>
                <a className="hover:underline" href={link.href}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

type DropdownButtonProps = {
  buttonData: DropdownButtonData;
};
