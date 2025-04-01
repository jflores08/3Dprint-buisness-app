"use client";

// Import React components
import { FC } from "react";
import { useTranslations } from "next-intl";

// Import local components
import { ItemCardTemplate } from "../ProductsPage/ItemCardTemplate";
// import { Grid, Stack, Box } from "@mui/material";

const AllProductsGallery: FC<{
  productData: {
    subscriptions: {
      subscriptionName: string;
      subscriptionImage: string;
      subscriptionDescription: string;
      subscriptionPrice: number;
    }[];
    printItems: {
      itemName: string;
      itemImage: string;
      itemDescription: string;
      itemPrice: number;
    }[];
  };
}> = ({ productData }) => {
  // Access the translations for the ProductsPage
  const t = useTranslations("ProductsPage.ProductGridSection");

  const subscriptionData = productData.subscriptions;
  //   const printItemData = productData.printItems;

  return (
    <div>
      {/* Header for Product Subscription*/}
      <div className="flex flex-row justify-between items-center">
        <h2>{t("title")}</h2>

        {/* Link to Products page*/}
      </div>

      {/* Grid of Subscriptions */}
      <div
        id="subscription-Grid"
        className="grid grid-cols-12 gap-4 mb-20 justify-items-center"
      >
        {/* <div className="container grid-col-12 mb-80 griditems-center justify-center"> */}
        {subscriptionData.map((subscription) => (
          <div
            className="lg:col-span-4 xs:col-span-12 flex justify-center"
            key={subscriptionData.indexOf(subscription)}
          >
            <ItemCardTemplate
              itemName={subscription.subscriptionName}
              itemImage={subscription.subscriptionImage}
              itemDescription={subscription.subscriptionDescription}
              itemPrice={subscription.subscriptionPrice}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export { AllProductsGallery };
