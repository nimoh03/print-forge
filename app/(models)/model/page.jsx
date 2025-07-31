import Card from "@/component/Card";
import React from "react";
import { albertSans, montserratAlt } from "@/lib/fonts";

function page() {
  return (
    <div className="px-5 space-y-4 mt-[49px] w-full h-fit" >
      <p className={`${montserratAlt.className} hidden md:block font-[700] text-[32px]`}>
        3D Models
      </p>
      <div className="grid gap-6 grid-cols-1 min-[450]:grid-cols-2 lg:grid-cols-4 justify-center items-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default page;
