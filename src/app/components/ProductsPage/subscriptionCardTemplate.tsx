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
}> = ({ itemName, itemImage, itemDescription, itemPrice }) => {
  // Access the translations for the SubscriptionCardTemplate
  const t = useTranslations("ProductsPage.SubscriptionCardTemplate");

  return (
    <Card
      id="itemCardTemplate"
      className=" max-w-72 min-w-72 border border-black content-center"
    >
      <CardContent className="flex flex-row justify-between">
        <Image
          width={60}
          height={60}
          alt="Model Photo"
          className="mt-6 mr-6 "
          src={`/images/products/${itemImage}`}
        />
        <div className="mt-6 flex flex-col content-center  ">
          <h3 className="mb-2">{itemName}</h3>
          <h4>{`$${itemPrice}/${t("subscriptionLength")}`}</h4>
          <h6>{`${itemDescription} ${t("description")}`}</h6>
        </div>
      </CardContent>
    </Card>
  );
};

export { SubscriptionCardTemplate };
