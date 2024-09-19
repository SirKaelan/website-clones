import { useState } from "react";
import { DropdownButtonData } from "src/data/footerData";

import plusIconWhite from "src/assets/plus-icon-white.svg";

export const FooterDropdownButton = ({ buttonData }: DropdownButtonProps) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      {/* TODO: Maybe make this a component */}
      {/* Single column smallest width */}
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

      {/* Multi column and above */}
      <div className="hidden xs:block">
        <h5 className="py-4 font-bold font-heading">{buttonData.title}</h5>
        <ul>
          {buttonData.links.map((link) => (
            <li className="py-1" key={link.title}>
              <a className="hover:underline" href={link.href}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

type DropdownButtonProps = {
  buttonData: DropdownButtonData;
};
