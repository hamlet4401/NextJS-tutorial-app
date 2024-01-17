"use client";
import React, { CSSProperties } from "react";
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
        style={
          {
            "--height": `${Math.round(
              logoDependingOnThemeProps.height / 4
            )}rem`,
          } as CSSProperties
        }
        className={"object-scale-down h-[var(--height)] w-auto"}
      />
    </div>
  );
};

export default LogoDependingOnTheme;
