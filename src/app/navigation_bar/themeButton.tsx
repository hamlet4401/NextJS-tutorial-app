import React from "react";
import { default as ThemeController } from "../components/navigation_bar/themeController";

const ThemeButton = () => {
  const themes: Record<string, boolean> = {
    Cyberpunk: false,
    Night: true,
  };
  return (
    <div className="size-full">
      <ThemeController themes={themes} />
    </div>
  );
};

export default ThemeButton;
