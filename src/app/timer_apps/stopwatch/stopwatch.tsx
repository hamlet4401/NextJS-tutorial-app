"use client";
import React, { useEffect, useRef, useState } from "react";

interface StopwatchTime {
  hours: number;
  minutes: number;
  seconds: number;
  miliseconds: number;
}

export default function Stopwatch() {
  const startStopwatchButtonText = "Start";
  const pauseStopwatchButtonText = "Pause";
  const resumeStopwatchButtonText = "Resume";
  const clearStopwatchButtonText = "Clear";
  const stopwatchIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [stopwatchButtonText, setStopwatchButtonText] = useState(
    startStopwatchButtonText
  );
  const [stopwatchTime, setStopwatchTime] = useState<StopwatchTime>({
    hours: 0,
    minutes: 0,
    seconds: 0,
    miliseconds: 0,
  });

  const handleStartStopwatch = (buttonPurpose: string) => {
    if (
      buttonPurpose === startStopwatchButtonText ||
      buttonPurpose === resumeStopwatchButtonText
    ) {
      stopwatchIntervalRef.current = startStopwatch();
      setStopwatchButtonText(pauseStopwatchButtonText);
    } else if (buttonPurpose === pauseStopwatchButtonText) {
      clearInterval(stopwatchIntervalRef.current!);
      setStopwatchButtonText(resumeStopwatchButtonText);
    }
  };

  const resetStopwatch = () => {
    setStopwatchTime({
      hours: 0,
      minutes: 0,
      seconds: 0,
      miliseconds: 0,
    });
    setStopwatchButtonText(startStopwatchButtonText);
  };

  const startStopwatch = () => {
    const stopwatchInterval = setInterval(() => {
      setStopwatchTime((prevTime) => {
        let newTime = { ...prevTime };
        newTime.miliseconds += 1;

        if (newTime.miliseconds === 100) {
          newTime.miliseconds = 0;
          newTime.seconds += 1;

          if (newTime.seconds === 60) {
            newTime.seconds = 0;
            newTime.minutes += 1;

            if (newTime.minutes === 60) {
              newTime.minutes = 0;
              newTime.hours += 1;
            }
          }
        }

        return newTime;
      });
    }, 10);

    return stopwatchInterval;
  };

  const formatTimeValue = (value: number, integetDigits: number): string => {
    return value.toLocaleString(undefined, {
      minimumIntegerDigits: integetDigits,
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-3/6">
      <div className="grid grid-cols-4 gap-2 text-7xl text-center tabular-nums">
        <div className="">{formatTimeValue(stopwatchTime.hours, 2)}h</div>
        <div className="">{formatTimeValue(stopwatchTime.minutes, 2)}m</div>
        <div className="">{formatTimeValue(stopwatchTime.seconds, 2)}s</div>
        <div className="">{formatTimeValue(stopwatchTime.miliseconds, 2)}</div>
      </div>
      <div className="mt-10">
        <button
          className="btn btn-wide btn-outline"
          onClick={() => {
            handleStartStopwatch(stopwatchButtonText);
          }}
        >
          {stopwatchButtonText}
        </button>
        <div className="mt-2">
          <button
            className="btn btn-wide btn-outline"
            onClick={resetStopwatch}
            disabled={
              stopwatchButtonText === pauseStopwatchButtonText ||
              stopwatchButtonText === startStopwatchButtonText
            }
          >
            {clearStopwatchButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}
