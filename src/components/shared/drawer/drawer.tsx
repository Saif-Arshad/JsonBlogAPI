"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useTheme } from "next-themes";
import { AiFillGithub, AiFillMoon, AiFillSun } from "react-icons/ai";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Link from 'next/link';


export default function DrawerComponent() {
  const [open, setOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

  const darkMode = () => {
    setTheme("dark");
  };

  const lightMode = () => {
    setTheme("light");
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="text-black dark:text-white min-h-full items-center bg-slate-100 dark:bg-slate-900 flex flex-col" onClick={toggleDrawer(false)}>
      <List>
      <div className="inline-flex items-center space-x-2">
          <Link href={"/"}>
            <span className="font-bold text-3xl">{"{ JSON }"} </span>
          </Link>
        </div>
      </List>
      <Divider />
     <div className="flex flex-col gap-y-6 mt-20">
       <Link href={"/"}>
        <span  className="text-black dark:text-white flex flex-row gap-1" >
            <HomeIcon/>
            Home
        </span>
       </Link>
       <Link href={"/docs"}>

        <span  className="text-black dark:text-white flex flex-row gap-1" >
            <FindInPageIcon/>
            Documentation
        </span>
       </Link>

     </div>
     <div className="flex gap-3 mt-11 items-center justify-between">
            <Link target="_blank" href={"https://github.com/Saif-Arshad/JsonBlogAPI"}>
              <AiFillGithub size={30} className="dark:text-white cursor-pointer hover:text-blue-800 dark:hover:text-blue-200 hover:scale-105 transition-all" />
            </Link>
            <AiFillMoon onClick={darkMode} size={30} className="visible dark:hidden cursor-pointer hover:text-blue-800 hover:scale-105 transition-all" />
            <AiFillSun onClick={lightMode} size={30} className={`cursor-pointer hidden dark:block text-black dark:text-white dark:hover:text-blue-400 hover:scale-105 transition-all`} />
          </div>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>  
       <Tooltip title="Menu items">
      <IconButton>
        <MenuIcon className="text-black dark:text-white" />
      </IconButton>
    </Tooltip></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
