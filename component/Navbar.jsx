"use client";
import React from "react";
import Logo from "@/public/logo.png";
import MobileLogo from "@/public/mobilelogo.png";
import Image from "next/image";
import Link from "next/link";
import { albertSans, montserratAlt } from "@/lib/fonts";
import { useMediaQuery } from "react-responsive";
import { usePathname, useRouter } from "next/navigation";

function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex justify-between px-3 md:px-10 py-5 items-center sticky top-0 bg-white">
      <div onClick={() => router.push("/")} className="cursor-pointer">
        <Image src={MobileLogo} alt="" className="md:hidden" />
        <Image src={Logo} alt="" className="hidden md:block" />
      </div>
      <div className="flex gap-x-2 md:gap-x-5">
        <Link
          href={"/model"}
          className={`${albertSans.className} ${
            pathname === "/model" && "text-red-600"
          } transition-all duration-300 ease-in hover:text-red-600`}
        >
          3d Models
        </Link>
        <Link
          href={"/about"}
          className={`${albertSans.className} ${
            pathname === "/about" && "text-red-600"
          }  transition-all duration-300 ease-in hover:text-red-600`}
        >
          About
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
