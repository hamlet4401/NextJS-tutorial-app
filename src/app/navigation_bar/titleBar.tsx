import Link from "next/link";
import React from "react";
import { default as ThemeButton } from "./themeButton";

import BodidataLogo from "../components/custom_logos/bodidataLogo";

const TitleBar = () => {
  return (
    <nav className="">
      <div className="flex justify-between items-center border-b-2 border-current">
        <div className="flex space-x-6 items-center">
          <Link href="/">
            <div className="h-4">
              <BodidataLogo />
            </div>
          </Link>
          <ul className="menu menu-horizontal flex space-x-3 mx-4 hover:bg-secondary-focus">
            <li>
              <Link href={"/notepad_app"}>Notepad App</Link>
            </li>
            <li>
              <Link href={"/timer_apps"}>Timer Apps</Link>
            </li>
            <li>
              <Link href={"/database"}>Database</Link>
            </li>
          </ul>
        </div>
        <div className="flex space-x-6 items-center">
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
};

export default TitleBar;
