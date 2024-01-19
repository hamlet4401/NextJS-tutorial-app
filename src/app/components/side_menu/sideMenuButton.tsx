"use client";
import React, { ReactNode } from "react";
import { default as LogoDependingOnTheme } from "../navigation_bar/logoDependingOnTheme";

interface SideMenuButtonProps {
  svgIcon: ReactNode;
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
      {sideMenuButtonProps.svgIcon}
    </button>
  );
};

export default SideMenuButton;
