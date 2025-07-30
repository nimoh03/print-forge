

import Image from "next/image";
import Hero from "@/public/hero.png";
import Link from "next/link";
import { albertSans, montserratAlt } from "@/lib/fonts";

export default function Home() {
  return (
    <div className="flex flex-col space-y-10 sm:space-y-0 sm:flex-row py-5 px-10">
      <div className={`flex-1 flex flex-col justify-center sm:px-20 gap-y-3`}>
        <p
          className={`${albertSans.className} text-[16px] font-[500] uppercase text-[#1E1E1E]`}
        >
          Your go-to platform for 3D printing files
        </p>
        <p
          className={`${montserratAlt.className} text-[40px] font-[700] text-[#1E1E1E]`}
        >
          Discover what’s
          <br /> possible with 3D <br />
          printing
        </p>
        <p
          className={`${albertSans.className} text-[22px] font-[400] text-[#1E1E1E]`}
        >
          Join our community of creators and explore a<br /> vast library of
          user-submitted models.
        </p>
        <Link
          href={""}
          className="border-3 px-10 py-3 w-max text-[#1E1E1E]"
        >
          Browse models
        </Link>
      </div>
      <div className="flex-1 flex justify-center">
        <Image src={Hero} alt="" />
      </div>
    </div>
  );
}
