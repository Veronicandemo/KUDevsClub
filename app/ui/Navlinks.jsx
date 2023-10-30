"use client";
import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
  },
  { name: "Departments", href: "/departments" },
  {
    name: "Events",
    href: "/events",
  },
  {
    name: "Sign Up",
    href: "/signup",
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <ul className="flex items-center  justify-around py-8">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("uppercase font-bold text-sm ", {
              "hover:underline hover:text-green-500  underline-offset-4  inline-block hover:duration-300 cursor-pointer":
                pathname === link.href,
            })}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </ul>
  );
}
