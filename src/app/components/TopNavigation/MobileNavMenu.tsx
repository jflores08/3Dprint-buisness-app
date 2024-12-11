import { FC, Fragment } from "react";

// Import Next components
import Link from "next/link";
import { usePathname } from "next/navigation";

// Import local components
import MobileMenuIcon from "../svg/MobileMenuIcon";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Import custom components
import { ModeToggle } from "./mode-toggle";

const MobileNavMenu: FC<{ pages: { name: string; path: string }[] }> = ({
  pages,
}) => {
  /* create pathname variable with current url value using usePathname Hook */
  const pathname = usePathname();

  return (
    <Fragment>
      <Sheet>
        <SheetTrigger asChild>
          {/* SheetTrigger set to custom outline button and MobileMenuIcon centered vertically */}
          <Button variant={"outline"} className="flex items-center">
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
                  <Link className="CurrentPageMobile" href={link.path}>
                    {link.name}
                  </Link>
                ) : (
                  <Link className="LinkMobile" href={link.path}>
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            {/* div to center the ModeToggle in the menu*/}
            <div className="flex justify-center">
              <ModeToggle />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
};

export { MobileNavMenu };
