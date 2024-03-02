import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LuSearch } from "react-icons/lu";
import { Input } from "./ui/input";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full p-4  px-24">
      <Image
        src="./Aspira.svg"
        alt="Aspira logo"
        width={90}
        height={90}
      ></Image>
      <ul className="flex gap-5 font-semibold text-lg">
        <li > <Link href='/'>Home</Link></li>
        <li><Link href='/add-info'>Resume builder</Link></li>
        <li><Link href='/premium'>Premium</Link></li>
      </ul>
      <div className="flex w-[300px] gap-3 p-1  items-center bg-neutral-100 rounded-md">
        <LuSearch className="w-6 h-6 m-2" />
        <Input className="w-full bg-neutral-100 border-none border-0 p-1" />
      </div>

      <div className="flex gap-6">
        <Button className="dark font-semibold">Log in</Button>
        <Button>Sign up</Button>
      </div>
    </div>
  );
};

export default Navbar;
