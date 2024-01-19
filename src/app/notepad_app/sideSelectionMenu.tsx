"use client";
import { ChangeEvent, useRef } from "react";

import { default as SideMenuButtons } from "../components/side_menu/sideMenuButton";
import { default as useNotepadStore } from "../store/notepadStore";

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
          svgIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20 11.08V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h6" />
              <path d="M14 3v5h5M18 21v-6M15 18h6" />
            </svg>
          }
          onClickEvent={handleNewPage}
        >
          New file
        </SideMenuButtons>
        <div className="flex flex-col">
          <SideMenuButtons
            svgIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 8l-5-5-5 5M12 4.2v10.3" />
              </svg>
            }
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
        svgIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
            <polyline points="17 21 17 13 7 13 7 21"></polyline>
            <polyline points="7 3 7 8 15 8"></polyline>
          </svg>
        }
        onClickEvent={handleFileSave}
      >
        Download
      </SideMenuButtons>
    </div>
  );
};

export default SideSelectionMenu;
