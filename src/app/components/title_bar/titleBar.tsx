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
              <button className="btn" onClick={() => router.push("/page2")}>
                Page 2
              </button>
            </li>
            <li>
              <button className="btn" onClick={() => router.push("/page3")}>
                Page 3
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
