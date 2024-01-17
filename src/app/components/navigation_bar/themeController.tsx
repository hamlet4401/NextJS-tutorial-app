"use client";
import React, { useState, useEffect } from "react";
import { useDarkMode } from "usehooks-ts";

interface ThemeControllerProps {
  themes: Record<string, boolean>;
}

const ThemeController = (themeControllerProps: ThemeControllerProps) => {
  let storedTheme: string | null = "";
  let currentTheme = "";
  if (typeof localStorage !== "undefined") {
    storedTheme = localStorage.getItem("theme");
  }
  currentTheme = storedTheme || Object.keys(themeControllerProps.themes)[0];

  const { isDarkMode, toggle, enable, disable } = useDarkMode();
  const [selectedTheme, setSelectedTheme] = useState(currentTheme);

  useEffect(() => {
    const isDark = themeControllerProps.themes[currentTheme];
    isDark ? enable() : disable();

    localStorage.setItem("usehooks-ts-dark-mode", isDark.toString());
  }, [enable, disable]);

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">
        Theme
        <svg
          width="12px"
          height="12px"
          className="h-2 w-2 fill-current opacity-60 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
      >
        {Object.entries(themeControllerProps.themes).map(
          ([theme, darkTheme]) => (
            <li key={theme}>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label={theme}
                value={theme.toLowerCase()}
                onClick={() => {
                  darkTheme ? enable() : disable();
                  setSelectedTheme(theme);
                  if (typeof localStorage !== "undefined") {
                    localStorage.setItem("theme", theme);
                  }
                }}
                defaultChecked={selectedTheme === theme}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default ThemeController;
