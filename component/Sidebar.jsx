"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { albertSans, montserratAlt } from "@/lib/fonts";

function SidebarLayout() {
  const links = [
    {
      name: "All",
      id: 1,
    },
    {
      name: "3D Printer",
      id: 2,
    },
    {
      name: "Art",
      id: 3,
    },
    {
      name: "Education",
      id: 4,
    },
    {
      name: "Fashion",
      id: 5,
    },
    {
      name: "FashHobby & DIY",
      id: 6,
    },
    {
      name: "Household",
      id: 7,
    },
    {
      name: "Miniatures",
      id: 8,
    },
    {
      name: "Tools",
      id: 9,
    },
    {
      name: "Toys & Games",
      id: 10,
    },
  ];
  return (
    <Sidebar className={`mt-[101px] border-0`}>
      <SidebarContent
        className={` text-[#606060] flex justify-center bg-white border-0`}
      >
        {links.map((item) => {
          return (
            <Link
              href={``}
              key={item.id}
              className={`ps-[50px] ${albertSans.className} font-[500] text-[16px] transition-all duration-300 ease-in hover:text-red-600`}
            >
              {item.name}
            </Link>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
}

export default SidebarLayout;
