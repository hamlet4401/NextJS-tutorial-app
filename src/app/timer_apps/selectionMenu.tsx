import React from "react";
import { default as SideMenuButtons } from "../components/side_menu/sideMenuButton";

const NavigationButtons = () => {
  return (
    <div className="w-60">
      <div className="flex-col mb-10">
        <SideMenuButtons iconSource="plus.svg" alternativeIconText="Add icon">
          Stopwatch
        </SideMenuButtons>
        <SideMenuButtons
          iconSource="upload.svg"
          alternativeIconText="Upload icon"
        >
          Timer
        </SideMenuButtons>
      </div>
    </div>
  );
};

export default NavigationButtons;
