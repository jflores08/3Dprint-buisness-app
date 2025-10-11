"use client";

// Import React components
import { FC } from "react";
import { useTranslations } from "next-intl";

// Import local components
import { SubscriptionCardTemplate } from "./subscriptionCardTemplate";

const SubscriptionGrid: FC<{
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

  return (
    <div>
      <div
        id="subscriptionsGridSection"
        className="flex flex-col mt-10 mb-10 justify-center"
      >
        <h3 className="flex justify-center">{t("subscriptionsHeader")}</h3>
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
                currency={subscription.currency}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { SubscriptionGrid };
