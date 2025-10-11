"use client";

// Import react components

// Import next componets
import { useTranslations } from "next-intl";

const CompanyDescription = () => {
  const t = useTranslations("AboutPage.HeaderSection");

  return (
    <div id="companyDescriptionSection" className="px-10">
      <h1 className="mb-5">{t("title")}</h1>
      <div className="">
        <h4>{t("companyDescription")}</h4>
      </div>
    </div>
  );
};

export { CompanyDescription };
