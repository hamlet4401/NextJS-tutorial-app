"use client";
import React, { useState } from "react";

const NavigationBar = () => {
  const [selectedMenu, setSelectedMenu] = useState("");

  const menuItems = [
    { id: "1", content: "hello" },
    { id: "2", content: "world" },
    { id: "3", content: "foo" },
  ];

  const handleSelectedMenu = (currentId: string) => {
    setSelectedMenu(currentId);
  };

  return (
    <div>
      {menuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          className="collapse collapse-arrow bg-base-200"
          onClick={() => handleSelectedMenu(menuItem.id)}
        >
          <input
            type="radio"
            name="my-accordion-2"
            checked={selectedMenu === menuItem.id}
          />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>{menuItem.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavigationBar;
