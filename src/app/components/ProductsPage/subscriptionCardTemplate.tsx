//"use client"

// Import react components
import { FC } from "react";
import { useTranslations } from "next-intl";

// Import next.js components
import Image from "next/image";

// Import shadcn components
import { Card, CardContent } from "@/components/ui/card";

const SubscriptionCardTemplate: FC<{
  itemName: string;
  itemImage: string;
  itemDescription: string;
  itemPrice: number;
  currency: string;
}> = ({ itemName, itemImage, itemDescription, itemPrice, currency }) => {
  // Access the translations for the SubscriptionCardTemplate
  const t = useTranslations("ProductsPage.SubscriptionCardTemplate");

  return (
    <Card
      id="subscriptionCardTemplate"
      className=" max-w-72 min-w-72 max-h-72 min-h-72 border border-black content-center"
    >
      <CardContent className="p-4 flex flex-row gap-x-10">
        <Image
          width={60}
          height={60}
          alt="Model Photo"
          className=" w-20 h-auto"
          src={`/images/products/${itemImage}`}
        />
        <div className=" flex flex-col content-center  ">
          <h3 className="mb-2">{itemName}</h3>
          <h5>{`$${itemPrice} ${currency}/${t("subscriptionLength")}`}</h5>
          <h6>{`${itemDescription} ${t("description")}`}</h6>
        </div>
      </CardContent>
    </Card>
  );
};

export { SubscriptionCardTemplate };
