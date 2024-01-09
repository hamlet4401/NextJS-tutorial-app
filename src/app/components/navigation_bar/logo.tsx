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
      <Image
        src={logoImage}
        alt="Logo"
        width={100}
        height={100}
        className="object-cover w-auto h-4"
      />
    </div>
  );
};

export default Logo;
