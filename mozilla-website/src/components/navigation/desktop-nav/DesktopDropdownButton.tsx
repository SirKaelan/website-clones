import { useState } from "react";

import { InnerDropdownButton } from "src/data/mainNavData";
import { DesktopDropdownContainer } from "src/components/navigation/desktop-nav/DesktopDropdownContainer";

export const DesktopDropdownButton = ({
  dropdownData,
  loopData,
}: DesktopDropdownButtonProps) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = (value: boolean) => {
    setDropdownOpen(value);
  };

  return (
    <div
      onMouseEnter={() => toggleDropdown(true)}
      onMouseLeave={() => toggleDropdown(false)}
      className="relative"
    >
      {/* // TODO: Make pseudo element for border bottom */}
      <div className="min-h-[32px] flex items-center border-b-[3px] border-transparent hover:border-black transition cursor-pointer whitespace-nowrap">
        <span className="font-bold">{dropdownData.text}</span>
      </div>
      {/* Placed here because parent is relative */}
      <DesktopDropdownContainer
        dropdownData={dropdownData}
        dropdownOpen={dropdownOpen}
        loopData={loopData}
      />
    </div>
  );
};

export type LoopData = {
  index: number;
  arrLength: number;
};

type DesktopDropdownButtonProps = {
  loopData: LoopData;
  dropdownData: InnerDropdownButton;
};
