"use client";

import { FC, Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const LeftNavPart: FC<{ pages: { name: string; path: string }[] }> =({
    pages,
}) => {
    /* create pathname variable with current url value using usePathname Hook */
    const pathname = usePathname();

    return(
        <Fragment>
            {/* Logo navButton to Home */}
            <div>
                <Link href={"/"}>
                </Link>
            </div>
        </Fragment>
    )
}
