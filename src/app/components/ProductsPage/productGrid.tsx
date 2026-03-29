"use client";

// Import React components
import { FC } from "react";
import { useTranslations } from "next-intl";

// Import local components
// import { ItemCardTemplate } from "./ItemCardTemplate";
import { PremadeCardTemplate } from "./PremadeCardTemplate";
import { SubscriptionCardTemplate } from "./subscriptionCardTemplate";
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
  const printItemData = productData.printItems;

  return (
    <div id="ProductsGallerySection">
      {/* Header for Product Subscription*/}
      <div
        id="ProductsGalleryHeader"
        className="flex flex-row justify-between items-center"
      >
        <h2>{t("title")}</h2>
      </div>

      {/* Section of All products */}
      <div
        id="allProductsGallerySection"
        className="flex flex-col p-10 justify-center"
      >
        {/* Grid of Subscriptions */}
        <div
          id="subscriptionsGridSection"
          className="flex flex-col mt-10 mb-10 justify-center"
        >
          <h3>{t("subscriptionsHeader")}</h3>
          <div
            id="subscription-Grid"
            className="grid grid-cols-12 gap-4 mb-20 justify-items-center"
          >
            {/* <div className="container grid-col-12 mb-80 griditems-center justify-center"> */}
            {subscriptionData.map((subscription) => (
              <div
                id="subscriptonCardDiv"
                className="lg:col-span-4 xs:col-span-12 flex justify-center"
                key={subscriptionData.indexOf(subscription)}
              >
                <SubscriptionCardTemplate
                  itemName={subscription.subscriptionName}
                  itemImage={subscription.subscriptionImage}
                  itemDescription={subscription.subscriptionDescription}
                  itemPrice={subscription.subscriptionPrice}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Grid of PremadeItems */}
        <div
          id="premadeItemsGridSection"
          className="flex flex-col mt-10 mb-10 justify-center"
        >
          <h3>{t("premadeItemsHeader")}</h3>
          <div id="premadeItemsGrid" className="">
            {printItemData.map((printItem) => (
              <div id="itemCardDiv" key={printItemData.indexOf(printItem)}>
                <PremadeCardTemplate
                  itemName={printItem.itemName}
                  itemImage={printItem.itemImage}
                  itemDescription={printItem.itemDescription}
                  itemPrice={printItem.itemPrice}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export { AllProductsGallery };
