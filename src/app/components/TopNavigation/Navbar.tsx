"use client";

// Import react components
import { FC } from "react";
import { LeftNavPart } from "./LeftNavPart";

const Navbar: FC<{ pages: { name: string; path: string }[] }> = ({ pages }) => {
  // start of html
  return (
    <header>
      {/* Navbar Flex conatainer */}
      <nav className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        {/* Left side of desktop Nav bar */}
        <LeftNavPart pages={pages} />
      </nav>
    </header>
  );
};

export { Navbar };
