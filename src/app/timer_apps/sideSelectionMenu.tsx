"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { default as SideMenuButtons } from "../components/side_menu/sideMenuButton";

import timerLightTheme from "../../../public/light_mode/clock.svg";
import timerDarkTheme from "../../../public/dark_mode/clock.svg";

import stopwatchLightTheme from "../../../public/light_mode/watch.svg";
import stopwatchDarkTheme from "../../../public/dark_mode/watch.svg";

const SideSelectionMenu = () => {
  const router = useRouter();
  const navigateToPage = (page: string) => {
    router.push(page);
  };
  return (
    <div className="">
      <div className="flex-col">
        <SideMenuButtons
          iconSourceDarkMode={stopwatchDarkTheme}
          iconSourceLightMode={stopwatchLightTheme}
          alternativeIconText="Add icon"
          onClickEvent={() => {
            navigateToPage("/timer_apps/stopwatch");
            console.log("Bytton pushed");
          }}
        >
          Stopwatch
        </SideMenuButtons>
        <SideMenuButtons
          iconSourceDarkMode={timerDarkTheme}
          iconSourceLightMode={timerLightTheme}
          alternativeIconText="Upload icon"
          onClickEvent={() => {
            navigateToPage("/timer_apps/timer");
          }}
        >
          Timer
        </SideMenuButtons>
      </div>
    </div>
  );
};

export default SideSelectionMenu;
