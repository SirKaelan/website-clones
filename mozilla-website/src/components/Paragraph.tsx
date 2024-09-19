export const Paragraph = ({
  fontSize = "lg",
  textAlign = "left",
  specialFont = false,
  breakpointStyles = {},
  children,
}: ParagraphProps) => {
  const baseFontSizeClass = fontSizeClassMap[fontSize];
  const baseTextAlignClass =
    textAlign !== "left" ? textAlignClassMap[textAlign] : "";
  const breakpointClasses = genBreakpointClasses(breakpointStyles);
  const fontClass = specialFont ? "font-heading" : "";

  const classes =
    `${baseFontSizeClass} ${baseTextAlignClass} ${breakpointClasses} ${fontClass}`.trim();

  return <p className={classes}>{children}</p>;
};

// Types
type ParagraphProps = {
  fontSize?: FontSize;
  textAlign?: TextAlign;
  specialFont?: boolean;
  breakpointStyles?: Breakpoints;
  children: React.ReactNode;
};

type FontSize = "xs" | "base" | "lg" | "3xl";

type TextAlign = "left" | "center";

type BreakpointValue = {
  fontSize?: FontSize;
  textAlign?: TextAlign;
};

type Breakpoints = {
  md?: BreakpointValue;
};

const fontSizeClassMap: Record<FontSize, string> = {
  xs: "text-xs",
  base: "text-base",
  lg: "text-lg",
  "3xl": "text-3xl",
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
