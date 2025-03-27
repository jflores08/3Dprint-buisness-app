//"use client"

import { FC } from "react";

// Import shadcn components
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

const TeamMemberCard: FC<{ model: string }> = ({ model }) => {
  return (
    <Card className=" max-w-md border border-black">
      <CardContent className="px-0 flex flex-col">
        <img className="m-4  w-40 h-40" src="eagle.glft.SVG"></img>
          <h2 className="mb-5">Iphone Stand</h2>
          <h6>
            this stand can be used as a charging dock or a regular phone stand.
          </h6>
      </CardContent>
    </Card>
  );
};

export { TeamMemberCard };
