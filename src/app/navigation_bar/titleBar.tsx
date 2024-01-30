"use client";
import Link from "next/link";
import React from "react";
import { default as ThemeButton } from "./themeButton";
import { resetDatabaseStore } from "../store/databaseStore";
import { resetNotepadStore } from "../store/notepadStore";

import BodidataLogo from "../components/custom_logos/bodidataLogo";

const TitleBar = () => {
  return (
    <nav>
      <div className="size-full flex justify-between items-center">
        <div className="flex space-x-6 items-center">
          <Link href="/">
            <div className="h-4">
              <BodidataLogo />
            </div>
          </Link>
          <ul className="menu menu-horizontal flex space-x-3 mx-4 hover:bg-secondary-focus">
            <li>
              <Link href={"/notepad_app"} onClick={resetNotepadStore}>
                Notepad App
              </Link>
            </li>
            <li>
              <Link href={"/timer_apps"}>Timer Apps</Link>
            </li>
            <li>
              <Link href={"/database"} onClick={resetDatabaseStore}>
                Database
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex w-26 mb-2">
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
};

export default TitleBar;
