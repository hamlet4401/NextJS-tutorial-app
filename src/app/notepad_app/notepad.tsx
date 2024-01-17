"use client";
import React, { ChangeEvent } from "react";
import { default as useNotepadStore } from "../store/notepadStore";

const Notepad = () => {
  const { title, setTitle, noteText, setNoteText } = useNotepadStore();
  const handleNoteTextValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNoteText(event.target.value);
  };

  const handleTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <div className="size-full">
      <div className="flex flex-col items-center size-full">
        <div className="flex flex-col items-center justify-center w-full h-1/2">
          <div className="w-1/2 mb-2">
            <label className="text-xs">File name</label>
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered input-primary w-full"
              value={title}
              onChange={handleTitle}
            />
          </div>
          <div className="justify-center items-center size-1/2">
            <label className="text-xs">Content</label>
            <textarea
              className="textarea textarea-primary size-full"
              placeholder="Text"
              onChange={handleNoteTextValue}
              value={noteText}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notepad;
