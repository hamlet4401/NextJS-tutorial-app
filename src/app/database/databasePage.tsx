"use client";
import React from "react";
import { default as useDatabaseStore } from "../store/databaseStore";

const DatabasePage = () => {
  const { selectedDatabase } = useDatabaseStore();
  return <div>Selected Database: {selectedDatabase}</div>;
};

export default DatabasePage;
