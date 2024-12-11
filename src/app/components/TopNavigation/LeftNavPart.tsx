"use client";

import { FC, Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const LeftNavPart: FC<{ pages: { name: string; path: string }[] }> = ({
  pages,
}) => {
  /* create pathname variable with current url value using usePathname Hook */
  const pathname = usePathname();

  return (
    <Fragment>
      {/* Logo navButton to Home */}
      <div>
        <Link href={"/"}>
          <Image
            src={"/images/logo/cuativeLogo.png"}
            alt="Logo"
            priority={true}
            width={600}
            height={200}
          ></Image>
        </Link>
      </div>
      {/* Navbar Links to pages Flexbox */}
      <div className="hidden gap-12 lg:flex items-center 2xl: ml-16">
        {/* Navbar Links to pages Map function */}
        {pages.map((link, index) => (
          <div key={index}>
            {/* If the current page the link is the primary color else it is gray with a hover effect that turns it the primary color */}
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
    </Fragment>
  );
};

export { LeftNavPart };
