export const Button = ({
  variant,
  theme = "dark",
  href,
  children,
}: ButtonProps) => {
  const baseStyles =
    "inline-block text-center font-bold py-1.5 px-6 border-2 border-black rounded transition hover:bg-neutral-200";
  const themeStyles =
    theme === "light"
      ? "bg-white text-black"
      : "bg-black text-white hover:text-black";

  if (variant === "button") {
    return (
      <button className={`${baseStyles} ${themeStyles} w-full`}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} className={`${baseStyles} ${themeStyles}`}>
      {children}
    </a>
  );
};

type ButtonProps = {
  variant?: "button";
  theme?: "light" | "dark";
  href?: string;
  children: string | string[];
};
