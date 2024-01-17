"use client";
import { default as SideMenuButtons } from "../components/side_menu/sideMenuButton";
import { default as SideMenuDropdown } from "../components/side_menu/sideMenuDropdown";
import { default as useNotepadStore } from "../store/notepadStore";

import fileAddLightTheme from "../../../public/light_mode/file-plus.svg";
import fileAddDarkTheme from "../../../public/dark_mode/file-plus.svg";

import uploadLightTheme from "../../../public/light_mode/upload.svg";
import uploadDarkTheme from "../../../public/dark_mode/upload.svg";

import saveLightTheme from "../../../public/light_mode/save.svg";
import saveDarkTheme from "../../../public/dark_mode/save.svg";
import { ChangeEvent, useRef } from "react";

const SideSelectionMenu = () => {
  const { setTitle, setNoteText, noteText, title } = useNotepadStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleNewPage = () => {
    setTitle("NewFile.txt");
    setNoteText("");
  };

  const handleFileUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleNoteTextValue = (changeEvent: ChangeEvent<HTMLInputElement>) => {
    const fileInput = changeEvent.target;

    if (fileInput.files && fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      const fileName = selectedFile.name;
      setTitle(fileName);

      const fileReader = new FileReader();

      fileReader.onload = (progressEvent: ProgressEvent<FileReader>) => {
        const fileContent = progressEvent.target?.result as string;
        setNoteText(fileContent);
      };
      fileReader.readAsText(selectedFile);
    }
  };

  const handleFileSave = () => {
    if (noteText) {
      const blob = new Blob([noteText], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = title;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="size-full">
      <div className="flex-col mb-10">
        <SideMenuButtons
          iconSourceDarkMode={fileAddDarkTheme}
          iconSourceLightMode={fileAddLightTheme}
          alternativeIconText="Add icon"
          onClickEvent={handleNewPage}
        >
          New file
        </SideMenuButtons>
        <div className="flex flex-col">
          <SideMenuButtons
            iconSourceDarkMode={uploadDarkTheme}
            iconSourceLightMode={uploadLightTheme}
            alternativeIconText="Upload icon"
            onClickEvent={handleFileUploadClick}
          >
            Upload
          </SideMenuButtons>
          <div className="justify-center pl-8 pr-4 mt-1">
            <input
              type="file"
              ref={fileInputRef}
              className="file-input file-input-primary file-input-xs max-w-xs"
              accept=".txt"
              onChange={handleNoteTextValue}
            />
          </div>
        </div>
      </div>
      <SideMenuButtons
        iconSourceDarkMode={saveDarkTheme}
        iconSourceLightMode={saveLightTheme}
        alternativeIconText="Save icon"
        onClickEvent={handleFileSave}
      >
        Download
      </SideMenuButtons>
    </div>
  );
};

export default SideSelectionMenu;
