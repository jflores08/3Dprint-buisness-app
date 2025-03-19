// Import Nextjs components
import { useTranslations } from "next-intl";

// Import local components
import { Link } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";

// Function for MetaData tag
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // Enable static rendering
  setRequestLocale(locale);

  // Access the translations for the Navbar
  const t = await getTranslations("NavbarLinks");

  return {
    title: t("productsTitle"),
  };
}

// Function for ProductsPage
export default function ProductsPage() {
  const t = useTranslations("ProductsPage.HeaderSection");

  return (
    <div>
      <h1>{t("title")}</h1>
      <Link className="Link" href={"/"}>
        This is a Link component
      </Link>
    </div>
  );
}
