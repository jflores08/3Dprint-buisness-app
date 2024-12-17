"use client";

// Import react componets
import { FC, Fragment } from "react";

// Import custom components
import { ModeToggle } from "./mode-toggle";
import { LanguageSelector } from "./LanguageSelector";

const RightNavPart: FC<{ locale: string }> = ({ locale }) => {
  return (
    <Fragment>
      {/* div to turn hide the Mode Toggle until the screen is size lg */}
      <div className="hidden lg:flex">
        <ModeToggle />
      </div>

      {/* Language Selection Menu */}
      <div>
        <LanguageSelector locale={locale} />
      </div>
    </Fragment>
  );
};

export { RightNavPart };
