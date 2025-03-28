"use client";

// Import react components
import { Fragment } from "react";

// Import next componets
import { useTranslations } from "next-intl";

const CompanyDescription = () => {
  const t = useTranslations("AboutPage.HeaderSection");

  return (
    <Fragment>
      <h1>{t("title")}</h1>
      <div>
        <h4>
          We are a small buisness that specializes in high resolution 3D prints.
          We were started 2 high school friends with a passion for 3D modeling.
          Our company speacializes in high batch prototype renderings and custom
          personalized models.
        </h4>
      </div>
    </Fragment>
  );
};

export { CompanyDescription };
