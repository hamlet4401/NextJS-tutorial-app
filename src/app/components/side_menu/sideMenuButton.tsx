"use client";
import React, { ReactNode } from "react";
import { default as LogoDependingOnTheme } from "../navigation_bar/logoDependingOnTheme";

interface SideMenuButtonProps {
  iconSourceDarkMode: string;
  iconSourceLightMode: string;
  alternativeIconText: string;
  onClickEvent: () => void;
  children: ReactNode;
}

const SideMenuButton = (sideMenuButtonProps: SideMenuButtonProps) => {
  return (
    <button
      className="btn w-full justify-between"
      onClick={() => sideMenuButtonProps.onClickEvent()}
    >
      {sideMenuButtonProps.children}
      <LogoDependingOnTheme
        darkModeLogo={sideMenuButtonProps.iconSourceDarkMode}
        lightModeLogo={sideMenuButtonProps.iconSourceLightMode}
        height={3}
      />
    </button>
  );
};

export default SideMenuButton;
