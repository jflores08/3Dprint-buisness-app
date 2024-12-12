// Import Nextjs components
// import Link from "next/link";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div>
      {/* <ModeToggle /> */}
      <h1>Hello From </h1>
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
