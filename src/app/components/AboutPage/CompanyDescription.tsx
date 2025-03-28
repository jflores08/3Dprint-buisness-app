"use client";

// Import react components


// Import next componets
import { useTranslations } from "next-intl";

const CompanyDescription = () => {
  const t = useTranslations("AboutPage.HeaderSection");

  return (
    <div id="companyDescriptionSection" className="px-10">
      <h1>{t("title")}</h1>
      <div className="px-10">
        <h2>
          We are a small buisness that specializes in high resolution 3D prints.
          We were started 2 high school friends with a passion for 3D modeling.
          Our company speacializes in high batch prototype renderings and custom
          personalized models.
        </h2>
      </div>
    </div>
  );
};

export { CompanyDescription };
