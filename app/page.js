import Image from "next/image";
import Hero from "@/public/hero.png";
import Link from "next/link";
import { albertSans, montserratAlt } from "@/lib/fonts";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:items-center  px-2 py-5 gap-y-10 h-fit">
      <div className="md:flex md:flex-col md:items-center">
        <div className="space-y-3 md:text-left md:items-start">
          <p
            className={`${albertSans.className} hidden md:block md:text-[12px] font-[500] uppercase text-[#1E1E1E]`}
          >
            Your go-to platform for 3D printing files
          </p>
          <p
            className={`${montserratAlt.className} text-[30px] md:text-[40px] font-[700] text-[#1E1E1E]`}
          >
            Discover what’s
            <br /> possible with 3D <br />
            printing
          </p>
          <p
            className={`${albertSans.className} text-[16px] md:text-[22px] font-[400] text-[#1E1E1E]`}
          >
            Join our community of creators and explore a<br /> vast library of
            user-submitted models.
          </p>
          <Link
            href={"/model"}
            className={`${albertSans.className} text-[12px] font-[500] uppercase text-[#1E1E1E] block border-3 border-black px-5 py-2 w-max`}
          >
            Browse models
          </Link>
        </div>
      </div>

      <div className="px-5 ">
        <Image src={Hero} alt="" />
      </div>
    </div>
  );
}
