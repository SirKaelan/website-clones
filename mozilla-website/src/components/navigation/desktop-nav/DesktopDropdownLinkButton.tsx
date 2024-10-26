import { DropdownLink } from "src/data/mainNavData";

export const DesktopDropdownLinkButton = ({
  data,
}: DesktopDropdownLinkProps) => {
  return (
    <div className="hover:bg-neutral-100 p-2 rounded-lg transition lg:p-4">
      <a href={data.href} className="flex gap-4 items-start">
        <img src={data.icon} className="w-6 h-6 lg:w-8 lg:h-8" />
        <div className="flex flex-col gap-1 lg:gap-2">
          <h4 className="border-b-2 border-transparent group-hover:border-black transition font-bold w-fit">
            {data.text}
          </h4>
          <p className="text-xs text-gray-700 break-words">
            {data.description}
          </p>
        </div>
      </a>
    </div>
  );
};
type DesktopDropdownLinkProps = {
  data: DropdownLink;
};
