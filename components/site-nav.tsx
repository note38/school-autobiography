"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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
    subItems: [
      { title: "Study Info", href: "/record/study-info" },
      { title: "Medical History", href: "/record/medical-history" },
      { title: "Crude", href: "/record/crude" },
    ],
  },
  {
    title: "Diagnosis",
    href: "/diagnosis",
  },
  {
    title: "Inventory",
    href: "/inventory",
    subItems: [
      { title: "Supply Report", href: "/inventory/supply-report" },
      { title: "Items", href: "/inventory/items" },
      { title: "Inventory Report", href: "/inventory/report" },
    ],
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
        Medical Portal
      </Link>

      {/* Navigation menu (hidden on smaller screens) */}
      <div className="hidden md:flex items-center space-x-4 justify-center">
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.subItems ? (
                  <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                ) : (
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                )}
                {item.subItems && (
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={subItem.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                {subItem.title}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                )}
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
                    "text-sm font-medium transition-colors hover:text-white",
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.title}
                </Link>
                {item.subItems && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.title}>
                        <Link
                          href={subItem.href}
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
