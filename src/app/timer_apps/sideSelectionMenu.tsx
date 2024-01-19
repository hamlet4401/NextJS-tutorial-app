"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { default as SideMenuButtons } from "../components/side_menu/sideMenuButton";

const SideSelectionMenu = () => {
  const router = useRouter();
  const navigateToPage = (page: string) => {
    router.push(page);
  };
  return (
    <div className="">
      <div className="flex-col">
        <SideMenuButtons
          svgIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="7"></circle>
              <polyline points="12 9 12 12 13.5 13.5"></polyline>
              <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>
            </svg>
          }
          onClickEvent={() => {
            navigateToPage("/timer_apps/stopwatch");
          }}
        >
          Stopwatch
        </SideMenuButtons>
        <SideMenuButtons
          svgIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          }
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
