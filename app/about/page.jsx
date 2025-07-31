import Image from "next/image";
import React from "react";
import AboutImage from "@/public/aboutimage.png";
import Flag from "@/public/Flag.png";
import GlobeSimple from "@/public/GlobeSimple.png";
import Stack from "@/public/Stack.png";
import Watermark from "@/public/watermark.png";
import { albertSans, montserratAlt } from "@/lib/fonts";

function About() {
  return (
    <div className="space-y-10 pb-10 h-fit">
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 md:px-15 gap-4">
        <div className="flex justify-center items-center">
          <Image src={AboutImage} alt="" className="rounded w-[95%] md:w-full" />
        </div>
        <div className="py-10 md:px-10 md:mt-10">
          <p
            className={`${albertSans.className} font-[500] text-[14px] md:text-[16px] lgl:text-[18px] uppercase text-left w-full`}
          >
            About printforge
          </p>
          <p
            className={`${montserratAlt.className} font-[700] text-[33px] md:text-[43px] lg:text-[53px] text-[#1E1E1E] text-left w-full`}
          >
            Empowering <br />
            makers worldwide
          </p>
          <p
            className={`${albertSans.className} font-[400] text-[14px] md:text-[16px] lg:text-[18px] text-left w-full`}
          >
            Founded in 2023, PrintForge has quickly become the go-to platform
            for 3D printing enthusiasts, makers, and professional designers to
            share and discover amazing STL files for 3D printing. <br /><br/>
            Our mission is to foster a vibrant community where creativity meets
            technology, enabling anyone to bring their ideas to life through 3D
            printing.
          </p>
        </div>
      </div>
      {/* <div className="flex px-40 justify-center">
        <div className="px-10">
          <div className="flex items-center gap-2">
            <Image src={Stack} />
            <p className={`${montserratAlt.className} font-[700] text-[20px]`}>
              100k+ Models
            </p>
          </div>
          <p>
            Access our vast library of <br />
            community-created 3D models, <br />
            from practical tools to artistic creations.
          </p>
        </div>
        <div className="border border-t-0 border-b-0 px-10">
          <div className="flex items-center gap-2">
            <Image src={GlobeSimple} />
            <p className={`${montserratAlt.className} font-[700] text-[20px]`}>
              Active Community
            </p>
          </div>
          <p>
            Join thousands of makers who share <br /> tips, provide feedback,
            and collaborate on projects.
          </p>
        </div>
        <div className="px-10">
          <div className="flex items-center gap-2">
            <Image src={Flag} />
            <p className={`${montserratAlt.className} font-[700] text-[20px]`}>
              Free to Use
            </p>
          </div>
          <p>
            Most models are free to download,
            <br /> with optional premium features for power users.
          </p>
        </div>
      </div>
      <p className="border border-[#DDDDDD] border-x-0 border-t-0"></p>
      <div className="flex flex-col items-center space-y-8">
        <p className={`${montserratAlt.className} font-[700] text-[56px]`}>
          Our vision
        </p>
        <p className={`${albertSans.className} font-[500] text-[20px] w-[50%]`}>
          At PrintForge, we believe that 3D printing is revolutionizing the way
          we create, prototype, and manufacture. Our platform serves as a bridge
          between designers and makers, enabling the sharing of knowledge and
          creativity that pushes the boundaries of what's possible with 3D
          printing.
        </p>
              <p className="border-2 border-[#DDDDDD] border-x-0 border-t-0 w-[20%]"></p>
              <p className={`${albertSans.className} font-[500] text-[20px]  w-[50%]`}>
                Whether you're a hobbyist looking for your next weekend project, an educator seeking teaching materials, or a professional designer wanting to share your creations, PrintForge provides the tools and community to support your journey in 3D printing.
              </p>
              <Image 
              src={Watermark}
              alt=""
              />
      </div> */}
    </div>
  );
}

export default About;
