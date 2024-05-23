"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  user: Partial<User>;
}

const Navbar: React.FC<Props> = ({ user }) => {
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between border-r border-gray-200 bg-white text-white max-md:hidden sm:p-4 xl:p-6 xl:w-[355px]">
      <nav className="flex flex-col gap-3">
        <NavbarHeader />
        <Menu />
      </nav>
    </section>
  );
};

export default Navbar;

const NavbarHeader = () => {
  return (
    <Link
      href="/"
      className="items-center gap-4 mb-4 flex max-xl:justify-center"
    >
      <Image
        width={34}
        height={34}
        alt="cashLine logo"
        src="/images/logo.svg"
      />
      <p className="2xl:text-26 font-ibm-plex-serif text-[26px] font-bold text-black-1 max-xl:hidden">
        CashLine
      </p>
    </Link>
  );
};

const Menu = () => {
  const pathname = usePathname();

  return sidebarLinks.map((item) => {
    const isActive = item.route === pathname;
    return (
      <Link
        key={item.label}
        href={item.route}
        className={cn("px-3 py-4 w-full rounded-lg md:py-3", {
          "bg-blueGradient": isActive,
        })}
      >
        <div className="flex gap-2 items-center">
          <Image
            src={item.imgURL}
            alt={item.label}
            width={32}
            height={32}
            className={cn({ "brightness-[3] invert-0": isActive })}
          />
          <p
            className={cn("text-16 font-semibold text-black-2 max-xl:hidden", {
              "text-white": isActive,
            })}
          >
            {item.label}
          </p>
        </div>
      </Link>
    );
  });
};
