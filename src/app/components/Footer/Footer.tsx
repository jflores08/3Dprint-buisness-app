"use client";

// Import react components
import { FC } from "react";
import { FooterNavPart } from "./NavLInks";
import { useTranslations } from "next-intl";

const Footer: FC<{ locale: string }> = ({ locale }) => {
  // Access the translations for the Navbar
  const t = useTranslations("NavbarLinks");

  // Define pages to display in navigation bar
  const pages = [
    { name: t("home"), path: `/${locale}`, external: false },
    { name: t("about"), path: `/${locale}/${t("aboutLink")}`, external: false },
    {
      name: t("products"),
      path: `/${locale}/${t("productsLink")}`,
      external: false,
    },
    {
      name: t("checkout"),
      path: `/${locale}/${t("checkoutLink")}`,
      external: false,
    },
  ];

  // start of html
  return (
    <div id="Footer NavLinks grid">
      {/* Navbar Flex conatainer */}
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        {/* Footer Nav links grid */}
        <FooterNavPart pages={pages} />
      </div>
    </div>
  );
};
export { Footer };
