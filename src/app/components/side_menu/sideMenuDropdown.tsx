"use client";
import React, { ReactNode, useState } from "react";

// Usage
// const options = {
//   "Dropdown 1": <div>Button</div>,
//   "Dropdown 2": <div>Button</div>,
// };

interface SideMenuDropdownProps {
  elements: Record<string, ReactNode>;
}

const SideMenuDropdown = (sideMenuDropdownProps: SideMenuDropdownProps) => {
  const [selectedMenu, setSelectedMenu] = useState("");

  const handleSelectedMenu = (currentId: string) => {
    setSelectedMenu(currentId);
  };

  return (
    <div className="w-full flex">
      {Object.entries(sideMenuDropdownProps.elements).map(
        ([menuItem, content]) => (
          <div
            key={menuItem}
            className="collapse collapse-arrow bg-base-200"
            onClick={() => handleSelectedMenu(menuItem)}
          >
            <input
              type="radio"
              name="my-accordion"
              checked={selectedMenu === menuItem}
              onChange={() => {}}
            />
            <div className="collapse-title">{menuItem}</div>
            <div className="collapse-content size-full flex justify-center items-center">
              <div className="">{content}</div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default SideMenuDropdown;
