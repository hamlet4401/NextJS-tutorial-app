"use client";
import { useEffect, useState } from "react";

interface ThemeControllerProps {
  themes: Record<string, boolean>;
}

const ThemeController = (themeControllerProps: ThemeControllerProps) => {
  let initialTheme: string = "cyberpunk";
  if (typeof localStorage !== "undefined") {
    initialTheme = localStorage.getItem("theme") || "cyberpunk";
  }
  const [currentTheme, setCurrentTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      initialTheme || "cyberpunk"
    );
  });

  return (
    <div className="size-full dropdown">
      <div tabIndex={0} role="button" className="btn size-full">
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
        {Object.entries(themeControllerProps.themes).map(([theme]) => (
          <li key={theme}>
            <input
              data-choosed-theme={theme.toLowerCase()}
              data-key={theme.toLowerCase()}
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label={theme}
              value={theme.toLowerCase()}
              onChange={() => {
                localStorage.setItem("theme", theme.toLowerCase());
                setCurrentTheme(theme.toLowerCase());
                document.documentElement.setAttribute(
                  "data-theme",
                  theme.toLowerCase()
                );
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeController;
