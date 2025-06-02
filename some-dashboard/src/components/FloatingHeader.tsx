import { useEffect, useRef, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export const FloatingHeader = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [isStuck, setIsStuck] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      const { top: containerTop } = headerRef.current.getBoundingClientRect();

      // containerTop has to be less than or equal to the
      // top value set on the container that has sticky on it
      setIsStuck(containerTop <= 8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run in case it has already been scrolled
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    console.log("Menu button clicked!");
  };

  const cardBgClasses = isStuck
    ? "backdrop-filter backdrop-blur-lg bg-transparent"
    : "";
  const cardClasses = `relative ${cardBgClasses}`.trim();

  return (
    <div ref={headerRef} className="sticky top-2">
      <Card className={cardClasses}>
        <CardHeader>
          <CardDescription>Home-Icon / Dashboard</CardDescription>
          <CardTitle>Dashboard</CardTitle>
        </CardHeader>
        <button
          onClick={handleMenuClick}
          className="absolute right-5 p-2 border-2 border-white cursor-pointer rounded-xl"
        >
          Menu
        </button>
      </Card>
    </div>
  );
};
