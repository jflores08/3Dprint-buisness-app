//"use client"

// Import react components
import { FC } from "react";

// Import next.js components
import Image from "next/image";

// Import shadcn components
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const ItemCardTemplate: FC<{
  itemName: string;
  itemImage: string;
  itemDescription: string;
  itemPrice: number;
}> = ({ itemName, itemImage, itemDescription, itemPrice }) => {
  return (
    <Card className=" max-w-md border border-black">
      <CardHeader>{itemName}</CardHeader>
      <CardContent className="px-0 flex flex-row">
        <Image
          width={60}
          height={60}
          alt="Model Photo"
          className="m-4 "
          src={`/images/teamMember_pics/${itemImage}`}
        />
        <div className="m-3 flex flex-col content-center  ">
          <h3 className="mb-5">{itemName}</h3>
          <h4>{`$${itemPrice}`}</h4>
          <h6>{itemDescription}</h6>
        </div>
      </CardContent>
    </Card>
  );
};

export { ItemCardTemplate };
