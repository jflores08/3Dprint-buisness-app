"use client";

// Import react components
import { FC } from "react";

const Navbar: FC<{ pages: { name: string; path: string }[] }> = ({ pages }) => {
  // start of html
  return (
    <header>
      {/* Navbar Flex conatainer */}
      <nav className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        Hello from navBar
      </nav>
    </header>
  );
};

export { Navbar };
