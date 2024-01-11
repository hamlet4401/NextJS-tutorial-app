"use client";
import Link from "next/link";
import React from "react";
import { default as ThemeController } from "./themeController";
import { default as Logo } from "./logo";
import { useRouter } from "next/navigation";

const TitleBar = () => {
  const router = useRouter();
  return (
    <nav className="">
      <div className="flex justify-between items-center border-b-2">
        <div className="flex space-x-6 items-center">
          <Link href="/">
            <Logo />
          </Link>
          <ul className="flex space-x-3 mx-4 hover:bg-secondary-focus">
            <li>
              <button
                className="btn"
                onClick={() => router.push("/notepad_app")}
              >
                Notepad App
              </button>
            </li>
            <li>
              <button
                className="btn"
                onClick={() => router.push("/timer_apps")}
              >
                Timer Apps
              </button>
            </li>
          </ul>
        </div>
        <ThemeController />
      </div>
    </nav>
  );
};

export default TitleBar;
