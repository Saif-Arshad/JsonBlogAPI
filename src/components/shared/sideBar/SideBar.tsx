"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from "next-themes";
import { FaHome } from "react-icons/fa";
import { AiFillGithub, AiFillMoon, AiFillSun } from "react-icons/ai";
import { usePathname } from 'next/navigation';

function SideBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const path = usePathname()
  const { theme, setTheme } = useTheme();

  const darkMode = () => {
    setTheme("dark");
  };

  const lightMode = () => {
    setTheme("light");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {sidebarOpen && window.innerWidth <= 640 && ( 
        <button onClick={toggleSidebar} className="absolute top-0 right-0 p-2 mt-2 mr-3 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
          <span className="sr-only">Close sidebar</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3.293 3.293a1 1 0 0 1 1.414 0L10 8.586l5.293-5.293a1 1 0 0 1 1.414 1.414L11.414 10l5.293 5.293a1 1 0 1 1-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 1 1-1.414-1.414L8.586 10 3.293 4.707a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}

      <button onClick={toggleSidebar} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-start p-2 mt-2 ms-3 text-sm text-gray-500 dark:text-white rounded-lg sm:hidden h-9 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside id="default-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${sidebarOpen ? '' : '-translate-x-full'} sm:translate-x-0`} aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-900 flex flex-col items-center">
          <Link href={"/"}>
            <span className="font-bold text-3xl">{"{ JSON }"} </span>
          </Link>
          <div className="flex gap-3 my-5 items-center">
            <Link href={"/"}>
              <FaHome size={30} className="dark:text-white cursor-pointer hover:text-blue-800 dark:hover:text-blue-200 hover:scale-105 transition-all" />
            </Link>
            <Link target="_blank" href={"https://github.com/Saif-Arshad/JsonBlogAPI"}>
              <AiFillGithub size={30} className="dark:text-white cursor-pointer hover:text-blue-800 dark:hover:text-blue-200 hover:scale-105 transition-all" />
            </Link>
            <AiFillMoon onClick={darkMode} size={30} className="visible dark:hidden cursor-pointer hover:text-blue-800 hover:scale-105 transition-all" />
            <AiFillSun onClick={lightMode} size={30} className={`cursor-pointer hidden dark:block text-black dark:text-white dark:hover:text-blue-400 hover:scale-105 transition-all`} />
          </div>
          <div className='h-2 w-60 border-b-2 border-primary'></div>
          <ul className="space-y-2 w-full font-medium mt-8">
            <li className="w-full">
              <Link href="/docs" className={`block w-full p-2 text-gray-900 rounded-lg    ${path=='/docs' ? 'bg-blue-100 dark:bg-indigo-500 dark:text-white ' : "dark:text-white"} `}>
                How it works
              </Link>
            </li>
            <li className="w-full">
              <Link href="/docs/get-all" className={`block w-full p-2 text-gray-900 rounded-lg  ${path=='/docs/get-all'? 'bg-blue-100 dark:text-white ' : "dark:text-white"} `}>
                All Blogs
              </Link>
            </li>
            <li className="w-full">
              <Link href="/docs/get-single" className={`block w-full p-2 text-gray-900 rounded-lg  ${path=='/docs/get-single'? 'bg-blue-100 dark:text-white ' : "dark:text-white"} `}>
                Single Blogs
              </Link>
            </li>
            <li className="w-full">
              <Link href="/docs/get-search" className={`block w-full p-2 text-gray-900 rounded-lg  ${path=='/docs/get-search'? 'bg-blue-100 dark:text-white ' : "dark:text-white"} `}>
                Search Blogs
              </Link>
            </li>
            <li className="w-full">
              <Link href="/docs/get-category" className={`block w-full p-2 text-gray-900 rounded-lg  ${path=='/docs/get-category'? 'bg-blue-100 dark:text-white ' : "dark:text-white"} `}>
              Blog Category
              </Link>
            </li>
            <li className="w-full">
              <Link href="/docs/get-pagination" className={`block w-full p-2 text-gray-900 rounded-lg  ${path=='/docs/get-pagination'? 'bg-blue-100 dark:text-white ' : "dark:text-white"} `}>
               Blog Pagination
              </Link>
            </li>
            <li className="w-full">
              <Link href="/docs/get-limit" className={`block w-full p-2 text-gray-900 rounded-lg  ${path=='/docs/get-limit'? 'bg-blue-100 dark:text-white ' : "dark:text-white"} `}>
               Blog Limit
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default SideBar;
