import React from "react";
import type { JSX } from "react";
import { Card, CardHeader, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";

export const StatsCard: StatsCardType = ({ children }) => {
  const subComponents = React.Children.toArray(children);
  const headerChild = subComponents.find(
    (c) => React.isValidElement(c) && c.type === StatsCard.Header
  );
  const contentChild = subComponents.find(
    (c) => React.isValidElement(c) && c.type === StatsCard.Content
  );

  return (
    <Card className="flex flex-col gap-8 shadow-md p-4">
      {headerChild && headerChild}
      {contentChild && contentChild}
    </Card>
  );
};

// Header subcomponent
const StatsCardHeader: StatsCardType["Header"] = ({ children }) => {
  const subComponents = React.Children.toArray(children);
  const iconChild = subComponents.find(
    (c) => React.isValidElement(c) && c.type === StatsCard.Header.Icon
  );
  const statsChild = subComponents.find(
    (c) => React.isValidElement(c) && c.type === StatsCard.Header.Stats
  );

  return (
    <CardHeader className="flex justify-between p-0">
      {iconChild && iconChild}
      {statsChild && statsChild}
    </CardHeader>
  );
};
// TODO: Change this to accept the SVG
StatsCardHeader.Icon = ({ className, children }) => {
  const baseClasses =
    "h-16 w-16 -mt-8 flex justify-center items-center bg-pink-200 rounded-xl";
  return <div className={cn(baseClasses, className)}>Icon</div>;
};
StatsCardHeader.Stats = ({ label, value }) => (
  <div className="flex flex-col items-end">
    <span className="text-gray-500 font-thin">{label}</span>
    <span className="text-2xl font-bold text-blue-950">{value}</span>
  </div>
);

// Content subcomponent
const StatsCardContent: StatsCardType["Content"] = ({ children }) => (
  <CardContent className="p-0">{children}</CardContent>
);
StatsCardContent.Trend = ({ value, timeframe }) => (
  <p className="text-gray-500 font-thin flex gap-1">
    {value && <span className="text-green-500 font-bold">{value}</span>}
    <span>{timeframe}</span>
  </p>
);

// Attach main slots
StatsCard.Header = StatsCardHeader;
StatsCard.Content = StatsCardContent;

// All component types
type ComponentProps = {
  children: React.ReactNode;
};
// Header
type HeaderIconProps = {
  className?: string;
  // TODO: Needs to be changed to that only SVGs are accepted
  children: React.SVGProps<SVGSVGElement>;
};
type HeaderStatsProps = {
  label: string;
  value: string;
};
// Content
type ContentTrendProps = {
  value?: string;
  timeframe: string;
};

// Main compound type
type StatsCardType = {
  (props: ComponentProps): JSX.Element;
  Header: {
    (props: ComponentProps): JSX.Element;
    Icon: (props: HeaderIconProps) => JSX.Element;
    Stats: (props: HeaderStatsProps) => JSX.Element;
  };
  Content: {
    (props: ComponentProps): JSX.Element;
    Trend: (props: ContentTrendProps) => JSX.Element;
  };
};
