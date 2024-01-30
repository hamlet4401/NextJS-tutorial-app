"use client";
import React, { useEffect, useRef, useState } from "react";
import { default as LoginButton } from "../components/navigation_bar/loginButton";
import { default as DatabaseConnection } from "../database/databaseConnection";
import { ListDatabases, CheckConnection } from "../database/databaseMethods";
import { default as useDatabaseStore } from "../store/databaseStore";

const SideSelectionMenu = () => {
  const [loggedIn, setLoggedIn] = useState(
    typeof window !== "undefined" &&
      localStorage.getItem("databaseLoggedIn") === "true"
      ? true
      : false
  );
  const [databaseList, setDatabaseList] = useState<string[]>([]);
  const successLoginRef = useRef<(message: string) => void>(() => {});
  const failedLoginRef = useRef<(message: string) => void>(() => {});

  const { setSelectedDatabase } = useDatabaseStore();

  const verifyDatabaseConnection = async () => {
    const uri =
      typeof window !== "undefined"
        ? localStorage.getItem("databaseUri")
        : null;
    const connection: string = await CheckConnection(uri);
    if (connection === "true" && typeof window !== "undefined")
      localStorage.setItem("databaseLoggedIn", connection);
    return connection;
  };

  const handleConnection = async (username: string, password: string) => {
    DatabaseConnection(username, password);
    const connectionStatus: string = await verifyDatabaseConnection();
    if (connectionStatus === "true") {
      successLoginRef.current("Successfully connected to database");
      setLoggedIn(true);
    } else {
      failedLoginRef.current(connectionStatus);
      setLoggedIn(false);
    }
  };

  const handleSignOut = () => {
    setLoggedIn(false);
    localStorage.setItem("databaseUri", "");
    localStorage.setItem("databaseLoggedIn", "false");
  };

  useEffect(() => {
    const getDatabaseNames = async () => {
      const uri = localStorage.getItem("databaseUri");
      const list = await ListDatabases(uri);
      setDatabaseList(list || []);
    };

    if (loggedIn) {
      getDatabaseNames();
    }
  }, [loggedIn]);

  const hiddenButtonClassName = "h-1/6 w-full hidden";
  const buttonClassName = "h-1/6 w-full";

  return (
    <div className="flex size-full justify-center">
      <div className="w-3/4">
        <div className={loggedIn ? buttonClassName : hiddenButtonClassName}>
          <div className="h-full flex flex-col justify-between">
            <select
              className="select select-primary w-full max-w-xs text-center"
              onChange={(event) => {
                setSelectedDatabase(event.target.value);
              }}
            >
              <option disabled selected>
                Select database
              </option>
              {databaseList.map((database, index) => (
                <option key={index} value={database}>
                  {database}
                </option>
              ))}
              ;
            </select>
            <button className="btn w-full" onClick={handleSignOut}>
              Sign out
            </button>
          </div>
        </div>
        <LoginButton
          className={loggedIn ? hiddenButtonClassName : buttonClassName}
          loginType="database"
          onConnection={handleConnection}
          successfulLoginPopUpRef={successLoginRef}
          failedLoginPopUpRef={failedLoginRef}
        />
      </div>
    </div>
  );
};

export default SideSelectionMenu;
