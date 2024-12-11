"use client";

import { FC, Fragment } from "react";

// Import custom components
import { ModeToggle } from "./mode-toggle";

const RightNavPart: FC = () => {
  return (
    <Fragment>
      {/* div to turn hide the Mode Toggle until the screen is size lg */}
      <div className="hidden lg:flex">
        <ModeToggle />
      </div>
    </Fragment>
  );
};

export { RightNavPart };
