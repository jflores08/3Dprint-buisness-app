"use client";

// Import React components
import { FC } from "react";
import { useTranslations } from "next-intl";

// Import local components
import { ItemCardTemplate } from "../ProductsPage/ItemCardTemplate";
import { SubscriptionCardTemplate } from "./subscriptionCardTemplate";
import { SubscriptionGrid } from "./subscriptionGrid";
import { PremadeItemsGrid2 } from "./premadeItemsGrid2";

const AllProductsGallery: FC<{
  productData: {
    subscriptions: {
      subscriptionName: string;
      subscriptionImage: string;
      subscriptionDescription: string;
      subscriptionPrice: number;
      currency: string;
    }[];
    printItems: {
      itemName: string;
      itemImage: string;
      itemDescription: string;
      itemPrice: number;
      currency: string;
    }[];
  };
}> = ({ productData }) => {
  // Access the translations for the ProductsPage
  const t = useTranslations("ProductsPage.ProductGridSection");

  const subscriptionData = productData.subscriptions;
  const printItemData = productData.printItems;

  return (
    <div id="ProductsGallerySection">
      {/* Header for Product Subscription*/}
      {/* <div
        id="ProductsGalleryHeader"
        className="flex flex-row justify-between items-center"
      >
        <h2 className="flex justify-center">{t("title")}</h2>
      </div> */}

      {/* Section of All products */}
      <div
        id="allProductsGallerySection"
        className="flex flex-col mb-10 justify-center"
      >
        {/* Grid of Subscriptions */}
        <SubscriptionGrid productData={productData} />
        {/* Grid of PremadeItems */}
        <PremadeItemsGrid2 productData={productData} />
      </div>
    </div>
  );
};
export { AllProductsGallery };
