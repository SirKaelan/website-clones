import { InnerDropdownButton } from "src/data/mainNavData";
import { DesktopDropdownLinkButton } from "src/components/navigation/desktop-nav/DesktopDropdownLinkButton";
import { DesktopDropdownCTAButton } from "src/components/navigation/desktop-nav/DesktopDropdownCTAButton";
import { LoopData } from "src/components/navigation/desktop-nav/DesktopDropdownButton";

export const DesktopDropdownContainer = ({
  dropdownData,
  dropdownOpen,
  loopData,
}: DropdownInnerProps) => {
  const containerClass = `absolute pt-6 ${
    loopData.index === loopData.arrLength - 1 ? "right-0" : ""
  }`.trim();

  return dropdownOpen ? (
    <div className={containerClass}>
      <nav className="w-72 p-2 bg-white shadow-nav-dropdown-1 rounded-lg lg:w-[552px] lg:p-4">
        <ul className="grid grid-cols-1 lg:grid-cols-2">
          {dropdownData.dropdownLinks.map((link) => {
            const linkClasses = `group ${
              link.type === "cta" ? "last:lg:col-span-2" : ""
            }`.trim();

            return (
              <li key={link.id} className={linkClasses}>
                {link.type === "link" && (
                  <DesktopDropdownLinkButton data={link} />
                )}
                {link.type === "cta" && (
                  <DesktopDropdownCTAButton data={link} />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  ) : (
    <></>
  );
};

type DropdownInnerProps = {
  dropdownData: InnerDropdownButton;
  dropdownOpen: boolean;
  loopData: LoopData;
};
