"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";
import { MdOutlineCancel } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const pathname = usePathname();
  const [searchQuery, setSeacrhQuery] = useState("");
  const navlink = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Shop",
      link: "/shop",
    },
    {
      name: "Cart",
      link: "/cart",
    },
    {
      name: "Profile",
      link: "/profile",
    },
    {
      name: "Studio",
      link: "/studio",
    },
  ];

  return (
    <main className="w-full h-20 bg-white border-b-[1px] border-b-gray-100">
      <nav className="h-full max-w-screen-xl mx-auto px-4 xl:px-0 flex items-center justify-between gap-10">
        <Link href={"/"}>
          {/* <Image src={logo} alt="logo" className="w-20" /> */}
          <h2 className="text-2xl font-semibold text-gray-500">Logo.</h2>
        </Link>
        <div
          className="relative w-full hidden lg:inline-flex lg:min-w-[600px] h-10 text-base text-primeColor border-[1px]
        border-gray-300 items-center gap-2 justify-between px-6 rounded-full"
        >
          <input
            type="text"
            placeholder="Search your products here"
            className="flex-1 h-full outline-none bg-transparent placeholder:text-gray-600"
            onChange={(e) => setSeacrhQuery(e.target.value)}
            value={searchQuery}
          />
          {searchQuery ? (
            <MdOutlineCancel
              className="w-5 h-5 cursor-pointer"
              onClick={() => setSeacrhQuery("")}
            />
          ) : (
            <IoSearch className="w-5 h-5 cursor-pointer" />
          )}
        </div>
        <div className="hidden md:inline-flex items-center gap-2">
          {navlink.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className={`flex hover:font-medium w-20 h-6 justify-center items-center px-12 text-base font-semibold text-gray-700 ${
                pathname === item.link
                  ? "underline underline-offset-8 decoration-2 decoration-gray-300"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <RxHamburgerMenu className="w-6 h-6 md:hidden" />
      </nav>
    </main>
  );
}
