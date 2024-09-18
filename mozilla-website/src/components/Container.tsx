export const Container = ({ width, children }: ContainerProps) => {
  const widthClass = containerWidths[width];

  return <div className={`${widthClass} mx-auto`}>{children}</div>;
};

type ContainerProps = {
  width: "4.5xl" | "6xl";
  children: React.ReactNode;
};

const containerWidths: Record<ContainerProps["width"], string> = {
  "4.5xl": "max-w-4.5xl",
  "6xl": "max-w-6xl",
};
