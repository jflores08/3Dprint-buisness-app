//"use client"

import { FC } from "react";

// Import shadcn components

const ItemModelTemplate: FC<{ model: string }> = ({ model }) => {
  return (
    <div>
      <canvas className="modelSample"></canvas>
    </div>
  );
};

export { ItemModelTemplate };
