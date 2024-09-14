import { useState } from "react";
import { InnerDropdownButton } from "src/data/mainNavData";
import arrowIcon from "src/assets/arrow-downwards-icon.svg";

export const NavigationInnerDropdown = ({
  dropdownData,
}: NavigationDropdownProps) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <li onClick={toggleDropdown}>
      <button className="flex justify-between items-center w-full py-2 h-12">
        <span className="font-bold">{dropdownData.text}</span>
        <img
          src={arrowIcon}
          alt="Arrow icon"
          width={20}
          height={20}
          className={`${
            dropdownOpen ? "rotate-180" : "rotate-0"
          } transition mr-2`}
        />
      </button>
      {dropdownOpen && (
        <ul className="divide-y ">
          {dropdownData.dropdownLinks.map((link) => (
            <li key={link.id}>
              {link.type === "link" ? (
                <section className="py-4 flex items-center gap-4">
                  <img src={link.icon} alt="Logo" width={24} height={24} />
                  <a href={link.href} className="w-full">
                    <h4 className="font-bold text-sm hover:border-b-2 hover:border-black inline transition">
                      {link.text}
                    </h4>
                  </a>
                </section>
              ) : null}
              {link.type === "cta" ? (
                <div className="flex justify-center font-bold py-4 mt-2">
                  <a href={link.href}>{link.text}</a>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

type NavigationDropdownProps = {
  dropdownData: InnerDropdownButton;
};
