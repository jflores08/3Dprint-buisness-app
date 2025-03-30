//"use client"

// Import react components
import { FC } from "react";

// Import next.js components
import Image from "next/image";

// Import shadcn components
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const ItemCardTemplate: FC<{ model: string }> = ({ model }) => {
  return (
    <Card className=" max-w-md border border-black">
      <CardHeader>Phone Stand</CardHeader>
      <CardContent className="px-0 flex flex-row">
        <Image
          width={40}
          height={40}
          alt="Model Photo"
          className="m-4 "
          src={model}
        />
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
