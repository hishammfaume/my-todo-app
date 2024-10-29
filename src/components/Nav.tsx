import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import {
  NavigationMenu,
 

  NavigationMenuItem,

  NavigationMenuList,

} from "@/components/ui/navigation-menu";

const Nav = () => {
  // Center the navbar and limit its width using Tailwind CSS

  return (
    <div className="bg-gray-800 w-full h-16 flex justify-between  items-center">
      <NavigationMenu >
        <NavigationMenuList className="">
          <NavigationMenuItem>
          
            <div className="flex justify-between px-8 py-3">
           <Link href="/addTask" className={buttonVariants({variant: "outline"})}>Add Task</Link>
            
           </div>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Nav;
