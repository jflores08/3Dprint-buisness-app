//"use client"

// Import react components
import { FC } from "react";

// Import next.js components
import Image from "next/image";

// Import shadcn components

const PremadeCardTemplate: FC<{
  itemName: string;
  itemImage: string;
  itemDescription: string;
  itemPrice: number;
}> = ({ itemName, itemImage, itemDescription, itemPrice }) => {
  return (
    <div id="itemCardTemplate" className="h-full p-6">
      <div id="itemCardContent" className="itemCardSubGrid">
        <Image
          width={60}
          height={60}
          alt="Model Photo"
          className=" w-20 h-20"
          src={`/images/products/${itemImage}`}
        />
        <div className="">
          <h3 className="">{itemName}</h3>
          <h4>{`$${itemPrice}`}</h4>
        </div>
      </div>
      <div id="itemCardDescription" className="">
        {itemDescription}
      </div>
    </div>
  );
};

export { PremadeCardTemplate };
