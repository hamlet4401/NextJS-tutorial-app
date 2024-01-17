import Link from "next/link";
import React from "react";
import { default as ThemeButton } from "./themeButton";
import { default as LogoDependingOnTheme } from "../components/navigation_bar/logoDependingOnTheme";

import logoLightTheme from "../../../public/light_mode/bodidata_logo.svg";
import logoDarkTheme from "../../../public/dark_mode/bodidata_logo.svg";

const TitleBar = () => {
  return (
    <nav className="">
      <div className="flex justify-between items-center border-b-2">
        <div className="flex space-x-6 items-center">
          <Link href="/">
            <LogoDependingOnTheme
              height={2}
              darkModeLogo={logoDarkTheme}
              lightModeLogo={logoLightTheme}
            />
          </Link>
          <ul className="menu menu-horizontal flex space-x-3 mx-4 hover:bg-secondary-focus">
            <li>
              <Link href={"/notepad_app"}>Notepad App</Link>
            </li>
            <li>
              <Link href={"/timer_apps"}>Timer Apps</Link>
            </li>
          </ul>
        </div>
        <ThemeButton />
      </div>
    </nav>
  );
};

export default TitleBar;
