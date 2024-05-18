"use client"

import Link from "next/link";
import DrawerComponent from "../drawer/drawer";
import { AiFillGithub, AiFillMoon, AiFillSun } from "react-icons/ai";
import { useTheme } from "next-themes";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Docs",
    href: "/docs",
  },
  // {
  //   name: "GitHub",
  //   href: "https://github.com/Saif-Arshad/JsonBlogAPI",
  //   external: true,
  // },
];

export function Header() {
  const { theme, setTheme } = useTheme();

  const darkMode = () => {
    setTheme("dark");
  };

  const lightMode = () => {
    setTheme("light");
  };

  return (
    <div className="relative w-full bg-white dark:bg-black">
      <div className="mx-auto flex max-w-7xl gap-y-5 sm:gap-0 items-center justify-between flex-row px-4 py-2 ">
        <div className="inline-flex items-center space-x-2">
          <Link href={"/"}>
            <span className="font-bold text-black dark:text-white text-3xl">{"{ JSON }"} </span>
          </Link>
        </div>
        <div className="sm:hidden">
     <DrawerComponent/>
        </div>

        <div className="sm:flex justify-between gap-9 hidden sm:flex-row item-center">
          <ul className="  inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  // target={item.external ? "_blank" : ""}
                  className="inline-flex transition-all  text-black dark:text-white items-center border-b-2 border-white dark:border-black dark:hover:border-white hover:border-black font-semibold  hover:text-gray-900"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-3 items-center justify-center">
            <Link target="_blank" href={"https://github.com/Saif-Arshad/JsonBlogAPI"}>
              <AiFillGithub size={30} className="dark:text-white cursor-pointer hover:text-blue-800 dark:hover:text-blue-200 hover:scale-105 transition-all" />
            </Link>
            <AiFillMoon onClick={darkMode} size={30} className="visible dark:hidden cursor-pointer hover:text-blue-800 hover:scale-105 transition-all" />
            <AiFillSun onClick={lightMode} size={30} className={`cursor-pointer hidden dark:block text-black dark:text-white dark:hover:text-blue-400 hover:scale-105 transition-all`} />
          </div>
        </div>
      </div>
    </div>
  );
}