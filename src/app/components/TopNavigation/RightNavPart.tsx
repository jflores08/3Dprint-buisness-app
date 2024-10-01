"use client";

import { FC, Fragment } from "react";

// Import custom components
import { ModeToggle } from "./mode-toggle";

const RightNavPart: FC = () => {
  return (
    <Fragment>
      <ModeToggle />
    </Fragment>
  );
};

export { RightNavPart };
