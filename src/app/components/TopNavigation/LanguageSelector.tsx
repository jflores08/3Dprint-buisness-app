// Import react componets
import { FC, Fragment, ChangeEvent } from "react";

// Import next componets
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const LanguageSelector: FC<{ locale: string }> = ({ locale }) => {

    const pathname = usePathname();
    const router = useRouter();

    const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value as string;
        const path = pathname.split("/").slice(2).join("/");
        router.push(`/${newLocale}/${path}`);
      };
  return (
    <Fragment>
      <select value={locale} onChange={handleLanguageChange}>
        <option value={"en"}>En</option>
        <option value={"es"}>Es</option>
      </select>
    </Fragment>
  );
};

export { LanguageSelector };
