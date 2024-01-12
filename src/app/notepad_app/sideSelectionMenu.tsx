"use client";
import React from "react";
import { default as SideMenuButtons } from "../components/side_menu/sideMenuButton";

import fileAddLightTheme from "../../../public/light_mode/file-plus.svg";
import fileAddDarkTheme from "../../../public/dark_mode/file-plus.svg";

import uploadLightTheme from "../../../public/light_mode/upload.svg";
import uploadDarkTheme from "../../../public/dark_mode/upload.svg";

import saveLightTheme from "../../../public/light_mode/save.svg";
import saveDarkTheme from "../../../public/dark_mode/save.svg";

const SideSelectionMenu = () => {
  return (
    <div className="w-60">
      <div className="flex-col mb-10">
        <SideMenuButtons
          iconSourceDarkMode={fileAddDarkTheme}
          iconSourceLightMode={fileAddLightTheme}
          alternativeIconText="Add icon"
          onClickEvent={() => {}}
        >
          Create new file
        </SideMenuButtons>
        <SideMenuButtons
          iconSourceDarkMode={uploadDarkTheme}
          iconSourceLightMode={uploadLightTheme}
          alternativeIconText="Upload icon"
          onClickEvent={() => {}}
        >
          Upload and modify file
        </SideMenuButtons>
      </div>
      <SideMenuButtons
        iconSourceDarkMode={saveDarkTheme}
        iconSourceLightMode={saveLightTheme}
        alternativeIconText="Save icon"
        onClickEvent={() => {}}
      >
        Save file
      </SideMenuButtons>
    </div>
  );
};

export default SideSelectionMenu;
