import { DownloadButtonType } from "src/data/mainNavData";

export const DownloadButton = ({ buttonData }: DownloadButtonProps) => {
  return (
    <a
      className="inline-block py-1 px-6 border-2 border-blue-700 rounded text-blue-500 text-sm font-bold transition hover:bg-blue-700 hover:text-white"
      href={buttonData.href}
    >
      {buttonData.text}
    </a>
  );
};

type DownloadButtonProps = {
  buttonData: DownloadButtonType;
};
