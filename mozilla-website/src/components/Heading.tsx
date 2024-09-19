export const Heading = ({
  variant,
  fontSize = "3.5xl",
  breakpointStyles = {},
  textAlign = "center",
  children,
}: HeadingProps) => {
  const baseFontSizeClass = fontSizeClassMap[fontSize];
  const baseTextAlignClass = textAlignClassMap[textAlign];
  const breakpointClasses = genBreakpointClasses(breakpointStyles);
  const Tag = variant;

  return (
    <Tag
      className={`${baseFontSizeClass} font-bold font-heading ${baseTextAlignClass} mb-4 ${breakpointClasses}`}
    >
      {children}
    </Tag>
  );
};

// Types
type HeadingProps = {
  variant: Variant;
  fontSize?: FontSize;
  breakpointStyles?: Breakpoints;
  textAlign?: TextAlign;
  children: React.ReactNode;
};

type Variant = "h1" | "h2";

type FontSize = "2xl" | "2.5xl" | "3.5xl" | "4.5xl" | "5.5xl";

type TextAlign = "left" | "center";

type BreakpointValue = {
  fontSize?: FontSize;
  textAlign?: TextAlign;
};

type Breakpoints = {
  md?: BreakpointValue;
};

// Records to map prop values to tailwind classes
const fontSizeClassMap: Record<FontSize, string> = {
  "2xl": "text-2xl",
  "2.5xl": "text-2.5xl",
  "3.5xl": "text-3.5xl",
  "4.5xl": "text-4.5xl",
  "5.5xl": "text-5.5xl",
};

const textAlignClassMap: Record<TextAlign, string> = {
  left: "text-left",
  center: "text-center",
};

// Utility functions
const genBreakpointClasses = (breakpointStyles: Breakpoints) => {
  return Object.entries(breakpointStyles)
    .map(([breakpoint, styles]) => {
      const fontSizeClassString = styles.fontSize
        ? `${breakpoint}:${fontSizeClassMap[styles.fontSize]}`
        : "";
      const textAlignClassString = styles.textAlign
        ? `${breakpoint}:${textAlignClassMap[styles.textAlign]}`
        : "";

      return `${fontSizeClassString} ${textAlignClassString}`.trim();
    })
    .join(" ");
};
