"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  return (
    <section className="flex h-16 items-center justify-between p-5 shadow-creditCard sm:p-8 md:hidden">
      <Image
        width={32}
        height={32}
        alt="cashLine logo"
        src="/images/logo.svg"
      />

      <Sheet>
        <SheetTrigger>
          <Image
            alt="menu"
            width={24}
            height={24}
            src="/icons/hamburger.svg"
            className="cursor-pointer hover:opacity-60"
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-white border-none w-[300px] md:hidden"
        >
          <NavbarHeader />
          <Menu />
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNavbar;

const NavbarHeader = () => {
  return (
    <div className="absolute top-3 flex gap-4">
      <Image
        width={24}
        height={24}
        alt="cashLine logo"
        src="/images/logo.svg"
      />
      <p className="text-black-1 font-bold">CashLine</p>
    </div>
  );
};

const Menu = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-2 mt-9">
      {sidebarLinks.map((item) => {
        const isActive =
          item.route === pathname || pathname.startsWith(`${item.route}/`);
        return (
          <SheetClose key={item.label} asChild>
            <Link
              href={item.route}
              className={cn("p-3 w-full rounded-lg", {
                "bg-blueGradient": isActive,
              })}
            >
              <div className="flex gap-2 items-center">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={20}
                  height={20}
                  className={cn({ "brightness-[3] invert-0": isActive })}
                />
                <p
                  className={cn("text-sm font-semibold text-black-2", {
                    "text-white": isActive,
                  })}
                >
                  {item.label}
                </p>
              </div>
            </Link>
          </SheetClose>
        );
      })}
    </nav>
  );
};
