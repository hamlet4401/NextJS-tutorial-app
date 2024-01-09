import Link from "next/link";
import React from "react";
import { default as ThemeController } from "./components/themeController";
import Image from "next/image";
import { default as Logo } from "./logo";

const navigationBar = () => {
  return (
    <nav className="">
      <div className="flex justify-between items-center border-b-2 mb-10 m-2">
        <div className="flex space-x-6 items-center ">
          <Link href="/">
            <Logo />
          </Link>
          <ul className="flex space-x-6 mx-4">
            <li>
              <Link href="/">Dashboard</Link>
            </li>
            <li>
              <Link href="/">Settings</Link>
            </li>
          </ul>
        </div>
        <ThemeController />
      </div>
    </nav>
  );
};

export default navigationBar;
