// Import Nextjs components
import { useTranslations } from "next-intl";

// Import local components
import { Link } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselPrevious,
//   CarouselNext,
// } from "@/components/ui/carousel";
import { CarouselSpacing } from "@/app/components/AboutPage/ProfilePage.tsx/Carousel";

const websites = ["1", "2", "3", "4", "5"];

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
    title: t("profileTitle"),
  };
}

// Function for ProfilePage
export default function ProfilePage() {
  const t = useTranslations("ProfilePage.HeaderSection");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link className="Link" href={"/"}>
        This is a Link component
      </Link>
      {/* <Carousel>
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
        </CarouselContent>
      </Carousel> */}
      <div className="flex justify-center">
        <CarouselSpacing websites={websites} />
      </div>
    </div>
  );
}
