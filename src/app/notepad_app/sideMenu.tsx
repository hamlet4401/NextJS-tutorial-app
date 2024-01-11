import React from "react";
import { default as SideMenuButtons } from "../components/side_menu/sideMenuButton";

const SideMenu = () => {
  return (
    <div className="w-60">
      <div className="flex-col mb-10">
        <SideMenuButtons iconSource="plus.svg" alternativeIconText="Add icon">
          Create new file
        </SideMenuButtons>
        <SideMenuButtons
          iconSource="upload.svg"
          alternativeIconText="Upload icon"
        >
          Upload and modify file
        </SideMenuButtons>
      </div>
      <SideMenuButtons iconSource="save.svg" alternativeIconText="Save icon">
        Save file
      </SideMenuButtons>
    </div>
  );
};

export default SideMenu;
