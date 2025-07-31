import React from "react";
import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { albertSans, montserratAlt } from "@/lib/fonts";

function Navbar() {
  return (
    <div className="flex justify-between px-3 min-[550px]:px-10 py-5 items-center">
      <div>
        <Image src={Logo} alt="" />
      </div>
      <div className="flex gap-x-2 min-[550px]:gap-x-10">
        <Link href={"/"} className={`${albertSans.className} transition-all duration-300 ease-in hover:text-red-600`}>3d Models</Link>
        <Link href={"/"} className={`${albertSans.className} transition-all duration-300 ease-in hover:text-red-600`}>About</Link>
      </div>
    </div>
  );
}

export default Navbar;
