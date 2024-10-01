import { FC, Fragment } from "react";

// Import Next components
import Link from "next/link";
import { usePathname } from "next/navigation";

// Import local components
import MobileMenuIcon from "../svg/MobileMenuIcon";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const MobileNavMenu: FC<{ pages: { name: string; path: string }[] }> = ({
  pages,
}) => {
  /* create pathname variable with current url value using usePathname Hook */
  const pathname = usePathname();

  return (
    <Fragment>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"outline"}>
            <MobileMenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side={"top"}>
          {/* Navbar Links flexbox */}
          <div className="flex flex-col">
            {/* Pages map to Navbar links function */}
            {pages.map((link, index) => (
              <div key={index} className="flex justify-center">
                {/* If the current page is the link it is the primary color and underlined */}
                {pathname === link.path ? (
                  <Link className="CurrentPage" href={link.path}>
                    {link.name}
                  </Link>
                ) : (
                  <Link className="Link" href={link.path}>
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
};

export { MobileNavMenu };
