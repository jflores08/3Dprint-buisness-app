//"use client"

// Import react components
import { FC } from "react";

// Import next.js components
import Image from "next/image";

// Import shadcn components
import { Card, CardContent } from "@/components/ui/card";

const ItemCardTemplate2: FC<{
  itemName: string;
  itemImage: string;
  itemDescription: string;
  itemPrice: number;
  currency: string;
}> = ({ itemName, itemImage, itemDescription, itemPrice, currency }) => {
  return (
    <Card id="itemCardTemplate" className="border border-black content-center">
      <CardContent className="p-1">
        {/* <Image
          width={200}
          height={200}
          alt="Model Photo"
          className="w-200px h-200px"
          src={`/images/products/${itemImage}`}
        /> */}
        <div className=" flex flex-col content-center  ">
          <h3 className="mb-5">{itemName}</h3>
          <h4>{`$${itemPrice} ${currency}`}</h4>
          <h6>{itemDescription}</h6>
        </div>
      </CardContent>
    </Card>
  );
};

export { ItemCardTemplate2 };
