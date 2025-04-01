"use client";

// Import React components
import { FC } from "react";
import { useTranslations } from "next-intl";

// Import Nextjs components
import { Link } from "@/i18n/routing";

// Import sanity components
import { ArrowRight } from "lucide-react";

// Import local components
import { ItemCardTemplate } from "../ProductsPage/ItemCardTemplate";
// import { Grid, Stack, Box } from "@mui/material";

// Import local Data

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
  // const printItemData = productData.printItems;

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

      {/* Grid of Subscriptions Section */}
      <div
        id="SubscriptionPackagesGrid"
        className="flex flex-col  mb-10 justify-center"
      >
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

        {/* Grid of TeamMember to show Employees */}
        {/* <div id="teamMember-Grid" className="grid grid-cols-12  gap-4">
        {employeeData.map((teamMember) => (
          <div
            className="lg:col-span-3 xs:col-span-12 flex justify-center"
            key={teamMember.name}
          >
            <TeamMemberProfileCard
              avatar={teamMember.avatar}
              name={teamMember.name}
              jobTitle={teamMember.job_title}
            />
          </div>
        ))}
      </div> */}
      </div>
    </div>
  );
};
export { SubscriptionGallery };
