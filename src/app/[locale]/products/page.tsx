// Import Nextjs components
import { useTranslations } from "next-intl";

// Import local components
import { AllProductsGallery } from "@/app/components/ProductsPage/productGrid";
import { getTranslations, setRequestLocale } from "next-intl/server";

// Import local data
import { ourProductData } from "@/app/components/data/productData";

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
  // Access the translations for the ProductsPage
  const t = useTranslations("ProductsPage.HeaderSection");

  return (
    <div className="px-10">
      <h1>{t("title")}</h1>
      <AllProductsGallery productData={ourProductData} />
    </div>
  );
}
