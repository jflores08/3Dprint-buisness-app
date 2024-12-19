// Import Nextjs components
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

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
    title: t("homeTitle"),
  };
}

// Function for HomePage
export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("HomePage.HeaderSection");
  return (
    <div>
      {/* <ModeToggle /> */}
      <h1>{t("title")}</h1>
      <h2>This is an H2</h2>
      <h3>This is an H3</h3>
      <h4>This is an H4</h4>
      <h5>This is an H5</h5>
      <Link className="Link" href={"/"}>
        This is a Link component
      </Link>
      {/* <Link href={"/about"}>{t("about")}</Link> */}
    </div>
  );
}
