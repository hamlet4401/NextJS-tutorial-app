"use client";
import React, { useRef } from "react";

declare module "react" {
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    webkitdirectory?: string;
  }
}

const SyncLocalFolder = () => {
  const inputFolder = useRef<HTMLInputElement | null>(null);

  return (
    <input
      type="file"
      ref={(node) => {
        inputFolder.current = node;

        if (node) {
          ["webkitdirectory", "directory", "mozdirectory"].forEach((attr) => {
            node.setAttribute(attr, "");
          });
        }
      }}
    />
  );
};

export default SyncLocalFolder;
