"use client";
import React from "react";
import Image from "next/image";
import { useDarkMode } from "usehooks-ts";

interface LogoDependingOnThemeProps {
  darkModeLogo: string;
  lightModeLogo: string;
  height: number;
}

const LogoDependingOnTheme = (
  logoDependingOnThemeProps: LogoDependingOnThemeProps
) => {
  const { isDarkMode } = useDarkMode();

  const logoImage = isDarkMode
    ? logoDependingOnThemeProps.darkModeLogo
    : logoDependingOnThemeProps.lightModeLogo;

  return (
    <div>
      <Image
        src={logoImage}
        alt="Logo"
        className={`object-scale-down h-${logoDependingOnThemeProps.height} w-auto`}
      />
    </div>
  );
};

export default LogoDependingOnTheme;
