"use client";
import SidebarLayout from "@/component/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { albertSans, montserratAlt } from "@/lib/fonts";

function layout({ children }) {
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
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <>
      {isMobile && (
        <div className="flex overflow-x-scroll gap-x-5 px-5 py-3 thin-scrollbar sticky top-[80px] bg-white">
          {links.map((item) => {
            return (
              <Link
                href={``}
                key={item.id}
                className={`${albertSans.className} shrink-0 whitespace-nowrap font-[500] text-[14px] transition-all duration-300 ease-in hover:text-red-600`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
      <SidebarProvider>
        <SidebarLayout />

        {children}
      </SidebarProvider>
    </>
  );
}

export default layout;
