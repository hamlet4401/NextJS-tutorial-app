"use client";
import React, { useEffect, useState } from "react";

export default function Stopwatch() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div className="m-8">Current timer is at {timer}</div>;
}
