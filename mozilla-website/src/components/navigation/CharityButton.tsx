import { CharityButtonType } from "src/data/mainNavData";

export const CharityButton = ({ buttonData }: CharityButtonProps) => {
  return (
    <a
      className="py-2 px-6 w-full flex justify-center items-center gap-2 border-2 border-black rounded hover:backdrop-brightness-95 transition"
      href={buttonData.href}
    >
      <img src={buttonData.icon} alt="Heart icon" />
      <span className="font-bold">{buttonData.text}</span>
    </a>
  );
};

type CharityButtonProps = {
  buttonData: CharityButtonType;
};
