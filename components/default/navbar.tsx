"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/react";

import Link from "next/link";
// import ThemeSwitcher from "../ui/theme-switcher";
import Image from "next/image";
import { useState } from "react";
import DropdownUI from "../ui/dropdown";
  
type Items = {
  label: string;
  href: string;
};
const items: Items[] = [
  {
    label: "Accueil",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Equipes",
    href: "/equipes",
  },
  {
    label: "Actualités",
    href: "/actualites",
  },
  {
    label: "Contactez-nous",
    href: "/contact-us",
  },
];

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar maxWidth="2xl" onMenuOpenChange={setIsMenuOpen} className="bg-primary">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand>
          <Image
            src="/assets/images/blue.png"
            alt="logo"
            width={60}
            height={60}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        {items.map((item) => {
          return (
            <NavbarItem key={item.href} className="text-primary-foreground hover:underline">
              <Link color="foreground" href={item.href}>
                {item.label}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end">
        {/* <ThemeSwitcher /> */}
        <DropdownUI />
      </NavbarContent>

      {/* Mobile Menu */}

      <NavbarMenu>
        {items.map((item) => {
          return (
            <NavbarMenuItem key={item.href} className="hover:underline bg-background p-2 text-center ">
              <Link color="foreground" href={item.href}>
                {item.label}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
}
