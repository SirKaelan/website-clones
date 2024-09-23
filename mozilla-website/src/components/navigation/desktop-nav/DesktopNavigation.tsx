import { mainNavData } from "src/data/mainNavData";
import { DesktopDropdownButton } from "src/components/navigation/desktop-nav/DesktopDropdownButton";
import { CharityButton } from "src/components/navigation/CharityButton";
import { DownloadButton } from "src/components/navigation/DownloadButton";

export const DesktopNavigation = () => {
  return (
    <div className="hidden md:flex-grow md:flex md:items-center md:gap-4 lg:gap-8">
      {mainNavData.innerDropdownData.map((dropdownData, index, arr) => (
        <DesktopDropdownButton
          key={dropdownData.id}
          loopData={{ index, arrLength: arr.length }}
          dropdownData={dropdownData}
        />
      ))}
      <div className="ml-auto">
        {mainNavData.ctaButton.type === "charity-button" && (
          <CharityButton buttonData={mainNavData.ctaButton} />
        )}

        {mainNavData.ctaButton.type === "download-button" && (
          <DownloadButton buttonData={mainNavData.ctaButton} />
        )}
      </div>
    </div>
  );
};
