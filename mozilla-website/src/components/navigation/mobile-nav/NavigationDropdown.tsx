import { NavigationInnerDropdown } from "src/components/navigation/mobile-nav/NavigationInnerDropdown";
import { CharityButton } from "src/components/navigation/CharityButton";
import { DownloadButton } from "src/components/navigation/DownloadButton";

import { mainNavData } from "src/data/mainNavData";

export const NavigationDropdown = ({ open }: NavigationDropdownProps) => {
  return (
    <div className={`divide-y ${open ? "block" : "hidden"} md:hidden`}>
      <div className="flex justify-center mt-8 mb-6">
        {mainNavData.ctaButton.type === "charity-button" && (
          <CharityButton buttonData={mainNavData.ctaButton} />
        )}

        {mainNavData.ctaButton.type === "download-button" && (
          <DownloadButton buttonData={mainNavData.ctaButton} />
        )}
      </div>

      <nav>
        <ul className="divide-y">
          {/* Inner dropdown button */}
          {mainNavData.innerDropdownData.map((innerDropdownData) => (
            <NavigationInnerDropdown
              key={innerDropdownData.id}
              dropdownData={innerDropdownData}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

type NavigationDropdownProps = {
  open: boolean;
};
