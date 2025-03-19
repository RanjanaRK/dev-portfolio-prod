"use client";

import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    { name: "About", href: "/" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
  ];
  const pathname = usePathname();

  return (
    <>
      <nav className="sticky top-0 z-50 mx-auto  flex max-w-screen-xl items-center justify-between border bg-gray-200/15 px-4 py-3 shadow-lg backdrop-blur-sm dark:bg-gray-700/15 sm:rounded-full">
        <div className="motion-preset-blur-down font-[merriweather] text-3xl font-bold">
          Ranjana.
        </div>

        <div className="motion-preset-blur-down hidden gap-3 space-x-4 text-xl text-gray-700 dark:text-gray-400 sm:flex">
          {menuLinks.map((items) => {
            const isActive = pathname === items.href;
            return (
              <Link
                key={items.name}
                href={items.href}
                className={isActive ? "font-bold text-foreground" : ""}>
                {items.name}
              </Link>
            );
          })}
        </div>

        <div className="motion-preset-blur-down flex items-center gap-2">
          <ThemeToggle />
          <div className="sm:hidden">
            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <AlignJustify
                  className="cursor-pointer text-foreground"
                  onClick={() => setIsOpen(!isOpen)}
                />
              </SheetTrigger>
              <SheetContent side={"top"}>
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                  <SheetDescription></SheetDescription>
                </SheetHeader>

                <div className="flex flex-col gap-4 py-4">
                  {menuLinks.map((items) => {
                    const isActive = pathname === items.href;
                    return (
                      <Link
                        key={items.name}
                        href={items.href}
                        className={`${isActive ? "font-bold text-foreground" : ""} rounded-full bg-foreground p-3 text-center text-xl text-primary-foreground shadow hover:bg-primary/90`}>
                        {items.name}
                      </Link>
                    );
                  })}
                </div>

                <SheetFooter></SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
