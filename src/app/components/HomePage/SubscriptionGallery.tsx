"use client";

// Import React components
import { FC } from "react";
import { useTranslations } from "next-intl";

// Import Nextjs components
import { Link } from "@/i18n/routing";

// Import sanity components
import { ArrowRight } from "lucide-react";

// Import local components
import { SubscriptionCardTemplate } from "../ProductsPage/subscriptionCardTemplate";

const SubscriptionGallery: FC<{
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
  // Access the translations for the Navbar
  const t = useTranslations("HomePage.SubscriptionGallery");

  const subscriptionData = productData.subscriptions;

  return (
    <div>
      {/* Header for Product Subscription*/}
      <div className="flex flex-row justify-between items-center">
        <h1>{t("title")}</h1>

        {/* Link to Products page*/}
        <Link href={`/${t("productsLink")}`} className="Link flex flex-row">
          {t("productsPageLink")} {""}
          <ArrowRight />
        </Link>
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
  );
};
export { SubscriptionGallery };
