"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { Menu, Search } from "lucide-react";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Record",
    href: "/record",
  },

  {
    title: "Inventory",
    href: "/inventory",
  },
  {
    title: "About Us",
    href: "/about",
  },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center w-full">
      {/* Logo */}
      <Link href="/" className="font-bold text-xl">
        <Image
          src="/images/logo.jpg"
          alt="logo"
          width={50}
          height={50}
          className="object-contain"
        />
      </Link>

      {/* Navigation menu (hidden on smaller screens) */}
      <div className="hidden md:flex items-center space-x-4 justify-center">
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-8 w-[200px]"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button
            onClick={() => console.log("Clicked")}
            variant="outline"
            size="icon"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-white">
          <div className="flex flex-col space-y-4 mt-4">
            {navItems.map((item) => (
              <div key={item.title}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-transform",
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
