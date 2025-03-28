// Import Nextjs components
import { useTranslations } from "next-intl";

// Import local components
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FAQaccordion } from "@/app/components/AboutPage/FAQaccordion";
import { TeamProfileGrid } from "@/app/components/AboutPage/Team Grid/TeamProfileGrid";
import { ourTeamData } from "@/app/components/data/ourTeamData";
import { CompanyDescription } from "@/app/components/AboutPage/CompanyDescription";
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
      <CompanyDescription />
      <TeamProfileGrid teamData={ourTeamData} />
      <FAQaccordion />
    </div>
  );
}
