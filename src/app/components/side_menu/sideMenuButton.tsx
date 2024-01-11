import React, { ReactNode } from "react";

interface SideMenuButtonProps {
  iconSource: string;
  alternativeIconText: string;
  children: ReactNode;
}

const SideMenuButton = (navigationBarButtonProps: SideMenuButtonProps) => {
  return (
    <button className="btn w-full justify-between">
      {navigationBarButtonProps.children}
      <img
        src={navigationBarButtonProps.iconSource}
        alt={navigationBarButtonProps.alternativeIconText}
        width={100}
        height={100}
        className="mr-1 w-auto h-5"
      />
    </button>
  );
};

export default SideMenuButton;
