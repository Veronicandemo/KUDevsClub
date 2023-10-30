import Image from "next/image";
import Link from "next/link";
import React from "react";
import { poppins } from "../ui/fonts";
import NavLinks from "../ui/Navlinks";

export default function About() {
  return (
    <>
      <NavLinks />
      <main className="relative">
        <Image
          src="/underconstruction.jpeg"
          width={900}
          height={1000}
          className="hidden md:block pl-96 pt-9 -z-50"
          alt="Maintaince Image"
        />

        <p
          className={`${poppins.className} absolute top-10 text-[#4ca1ef] text-5xl left-[28%] font-black`}
        >
          Page is Under construction
        </p>
        <p
          className={`${poppins.className} antialiased absolute top-60 text-[#4ca1ef]   text-xl left-[70%] font-black`}
        >
          Sign up to join our developer club
        </p>
        <Link
          href="/signup"
          className={`${poppins.className} antialiased absolute top-72 bg-[#4ca1ef] text-white p-3 px-9 rounded-full text-xl left-[70%] font-black`}
        >
          Sign Up
        </Link>
        <p>Thanks for your patience</p>
      </main>
    </>
  );
}
