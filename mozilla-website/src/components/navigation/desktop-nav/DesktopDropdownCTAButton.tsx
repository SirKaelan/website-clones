import { DropdownCTA } from "src/data/mainNavData";

export const DesktopDropdownCTAButton = ({ data }: DesktopDropdownCTAProps) => {
  return (
    <div className="flex justify-center font-bold px-6 pt-6 pb-4">
      <a
        href={data.href}
        className="border-b-2 border-transparent hover:border-black transition"
      >
        {data.text}
      </a>
    </div>
  );
};

type DesktopDropdownCTAProps = {
  data: DropdownCTA;
};
