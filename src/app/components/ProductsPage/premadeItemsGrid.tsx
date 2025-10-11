"use client";

// Import React components
import { FC } from "react";
import { useTranslations } from "next-intl";

// Import local components
import { ItemCardTemplate } from "../ProductsPage/ItemCardTemplate";

const PremadeItemsGrid: FC<{
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
        className="grid grid-cols-12 gap-4 mb-20 justify-items-center"
      >
        {/* <div className="container grid-col-12 mb-80 griditems-center justify-center"> */}
        {printItemData.map((printItem) => (
          <div
            id="itemCardDiv"
            className="lg:col-span-4 xs:col-span-12 flex justify-center"
            key={printItemData.indexOf(printItem)}
          >
            <ItemCardTemplate
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

export { PremadeItemsGrid };
