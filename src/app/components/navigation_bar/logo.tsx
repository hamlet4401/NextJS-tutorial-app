"use client";
import React from "react";
import Image from "next/image";
import { useDarkMode } from "usehooks-ts";

const Logo = () => {
  const { isDarkMode } = useDarkMode();

  const logoImage = isDarkMode
    ? "/bodidata_logo_dark_mode.svg"
    : "/bodidata_logo_light_mode.svg";

  return (
    <div>
      <Image src={logoImage} alt="Logo" width={90} height={90} />
    </div>
  );
};

export default Logo;
