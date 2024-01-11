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
        width={100}
        height={100}
        className={`object-cover w-auto h-${logoDependingOnThemeProps.height}`}
      />
    </div>
  );
};

export default LogoDependingOnTheme;
