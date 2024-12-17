// Import Nextjs components
import { useTranslations } from "next-intl";

// Import local components
import { Link } from "@/i18n/routing";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link className="Link" href={"/"}>
        This is a Link component
      </Link>
    </div>
  );
}
