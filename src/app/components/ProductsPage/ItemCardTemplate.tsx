//"use client"

import { FC } from "react";

// Import shadcn components
import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card";

const ItemCardTemplate: FC<{ model: string }> = ({ model }) => {
  return (
    <Card className=" max-w-md border border-black">
      <CardHeader>Phone Stand</CardHeader>
      <CardContent className="px-0 flex flex-row">
        <img className="m-4  w-40 h-40" src={model}></img>
        <div className="m-3 flex flex-col content-center  ">
          <h2 className="mb-5">Iphone Stand</h2>
          <h6>
            this stand can be used as a charging dock or a regular phone stand.
          </h6>
        </div>
      </CardContent>
    </Card>
  );
};

export { ItemCardTemplate };
