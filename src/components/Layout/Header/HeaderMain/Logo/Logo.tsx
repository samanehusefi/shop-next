"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

import type { RootState } from "../../../../../Redux/store";

const Logo = () => {
  const logo = useSelector(
    (state: RootState) => state.header.data?.company.logo,
  );

  if (!logo) {
    return null;
  }

  const logoSrc = logo.desktopSrc.startsWith("/")
    ? logo.desktopSrc
    : `/${logo.desktopSrc}`;

  return (
    <Link href="/" title={logo.title} className="flex shrink-0 items-center">
      <Image
        src={logoSrc}
        alt={logo.alt}
        width={150}
        height={40}
        className="h-5 w-auto object-contain md:h-8"
        priority
      />
    </Link>
  );
};

export default Logo;
