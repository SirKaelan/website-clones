export const Box = ({ bgColor, removePadding, children }: BoxProps) => {
  const bgClass = bgColor ? bgColorClasses[bgColor] : "";
  const additionalPaddingClasses = removePadding
    ? genPaddingClasses(removePadding, paddingClasses)
    : "";

  const classes =
    `py-12 px-6 md:px-16 xl-2:py-24 xl-2:px-20 ${additionalPaddingClasses} ${bgClass}`.trim();

  return <section className={classes}>{children}</section>;
};

type BoxProps = {
  bgColor?: BgColorValues;
  removePadding?: RemovePaddingValues;
  children: React.ReactNode;
};

// Background color prop types
type BgColorValues = "black" | "gray";

const bgColorClasses: Record<BgColorValues, string> = {
  black: "bg-black",
  gray: "bg-gray-100",
};

// Remove padding prop types
type PaddingValues = "bottom" | "top" | "left" | "right";

type RemovePaddingValues = PaddingValues | PaddingValues[];

type PaddingPropToTailwindRecord = Record<PaddingValues, string>;

const paddingClasses: PaddingPropToTailwindRecord = {
  bottom: "remove-padding-bottom",
  top: "remove-padding-top",
  left: "remove-padding-left",
  right: "remove-padding-right",
};

// Class name concatenation utility for padding
const genPaddingClasses = (
  propVal: RemovePaddingValues,
  paddingClassesRecord: PaddingPropToTailwindRecord
) => {
  if (typeof propVal === "string") {
    return paddingClassesRecord[propVal];
  }

  const tailwindClasses: string[] = [];

  propVal.forEach((paddingPropValue) => {
    tailwindClasses.push(paddingClassesRecord[paddingPropValue]);
  });

  return tailwindClasses.join(" ");
};
