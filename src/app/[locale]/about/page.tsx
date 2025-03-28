// Import Nextjs components
import { useTranslations } from "next-intl";

// Import local components
import { Link } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FAQaccordion } from "@/app/components/AboutPage/FAQaccordion";
import { TeamProfileGrid } from "@/app/components/AboutPage/Team Grid/TeamProfileGrid";
import { ourTeamData } from "@/app/components/data/ourTeamData";
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
    title: t("aboutTitle"),
  };
}

// Function for AboutPage
export default function AboutPage() {
  const t = useTranslations("AboutPage.HeaderSection");

  return (
    <div>
      <h1>{t("title")}</h1>
      <Link className="Link" href={"/"}>
        This is a Link component
      </Link>
      <TeamProfileGrid teamData={ourTeamData} />
      <FAQaccordion />
    </div>
  );
}
