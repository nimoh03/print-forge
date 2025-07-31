import Card from "@/component/Card";
import React from "react";
import { albertSans, montserratAlt } from "@/lib/fonts";

function page() {
  return (
    <div className="px-10 space-y-4">
      <p className={`${montserratAlt.className} font-[700] text-[32px]`}>
        3D Models
      </p>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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
