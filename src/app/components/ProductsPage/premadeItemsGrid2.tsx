"use client";

// Import React components
import { FC } from "react";
import { useTranslations } from "next-intl";

// Import local components
import { ItemCardTemplate2 } from "../ProductsPage/ItemCardTemplate2";

const PremadeItemsGrid2: FC<{
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

  const printItemData = productData.printItems;

  return (
    <div
      id="premadeItemsGridSection"
      className="flex flex-col mt-10 mb-10 justify-center"
    >
      <h3 className="flex justify-center">{t("premadeItemsHeader")}</h3>
      <div
        id="premadeItems-Grid"
        className="grid gap-9 mb-20  grid-cols-[repeat(auto-fit,minmax(13rem,1fr))]  grid-rows-auto justify-items-center"
      >
        {printItemData.map((printItem) => (
          <div id="itemCardDiv" key={printItemData.indexOf(printItem)}>
            <ItemCardTemplate2
              itemName={printItem.itemName}
              itemImage={printItem.itemImage}
              itemDescription={printItem.itemDescription}
              itemPrice={printItem.itemPrice}
              currency={printItem.currency}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { PremadeItemsGrid2 };
