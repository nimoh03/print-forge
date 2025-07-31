import React from "react";
import Image from "next/image";
import CardImage from "@/public/cardimage.png";
import CardIcon from "@/public/cardicon.png";
import { albertSans, montserratAlt } from "@/lib/fonts";
function Card() {
  return (
    <div className="shadow rounded-xl overflow-hidden transition-all duration-500 ease-in hover:shadow-2xl cursor-pointer">
      <Image src={CardImage} alt="" className="w-full" />

      <div className="px-5 py-2 space-y-3">
        <p className={`${montserratAlt.className} font-[700] text-[22px]`}>
          Printer Upgrade Kit
        </p>
        <p
          className={`${albertSans.className} font-[400] text-[18px] text-[#1E1E1E]`}
        >
          Enhancement parts for 3D printer performance
        </p>
        <p
          className={` ${albertSans.className} border rounded-full w-max px-2 py-1 text-[#1E1E1E]`}
        >
          3D-printer
        </p>
        <div className="flex items-center gap-x-1">
          <Image src={CardIcon} alt="" />
          <p>1390</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
