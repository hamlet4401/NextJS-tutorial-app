"use client";
import React, { useEffect, useRef, useState } from "react";

interface TimerTime {
  hours: number;
  minutes: number;
  seconds: number;
}

const Timer = () => {
  const startTimerButtonText = "Start";
  const pauseTimerButtonText = "Pause";
  const resumeTimerButtonText = "Resume";
  const clearTimerButtonText = "Clear";
  const resetTimerButtonText = "Reset";

  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [timerButtonText, setTimerButtonText] = useState(startTimerButtonText);
  const [timerFinished, setTimerFinished] = useState(false);
  const [timerTime, setTimerTime] = useState<TimerTime>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [initialTimerTime, setInitialTimerTime] = useState<TimerTime>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleStartTimer = (buttonPurpose: string) => {
    if (
      buttonPurpose === startTimerButtonText ||
      buttonPurpose === resumeTimerButtonText
    ) {
      if (buttonPurpose === startTimerButtonText) {
        setInitialTimerTime({ ...timerTime });
      }
      timerIntervalRef.current = startTimer();
      setTimerButtonText(pauseTimerButtonText);
    } else if (buttonPurpose === pauseTimerButtonText) {
      pauseTimer();
      setTimerButtonText(resumeTimerButtonText);
    }
  };

  const startTimer = () => {
    const timerInterval = setInterval(() => {
      setTimerTime((prevTime) => {
        let newTime = { ...prevTime };
        newTime.seconds -= 1;

        if (newTime.seconds < 0) {
          newTime.seconds = 59;
          newTime.minutes -= 1;

          if (newTime.minutes < 0) {
            newTime.minutes = 59;
            newTime.hours -= 1;

            if (newTime.hours < 0) {
              setTimerFinished(true);
            }
          }
        }

        return newTime;
      });
    }, 1000);

    return timerInterval;
  };

  useEffect(() => {
    if (timerFinished) {
      pauseTimer();
      resetTimer();
      setTimerFinished(false);
    }
  }, [timerFinished]);

  const pauseTimer = () => {
    clearInterval(timerIntervalRef.current!);
  };

  const resetTimer = () => {
    setTimerTime({ ...initialTimerTime });
    setTimerButtonText(startTimerButtonText);
  };

  const clearTimer = () => {
    setTimerTime({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
    setTimerButtonText(startTimerButtonText);
  };

  const formatTimeValue = (value: number, integetDigits: number): string => {
    return value.toLocaleString(undefined, {
      minimumIntegerDigits: integetDigits,
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-3/6">
      <div className="grid grid-cols-3 gap-2 place-items-center text-l   placeholder-gray-400">
        <text className="text-gray-400">Hours</text>
        <text className="text-gray-400">Minutes</text>
        <text className="text-gray-400">Seconds</text>
        <input
          type="text"
          min={0}
          max={60}
          placeholder="00"
          className="input input-bordered input-primary size-32 text-7xl text-center"
          onInput={(event) =>
            setTimerTime((prevTime) => {
              let newTime = { ...prevTime };
              newTime.hours = Number((event.target as HTMLInputElement).value);
              return newTime;
            })
          }
          value={timerTime.hours > 0 ? formatTimeValue(timerTime.hours, 2) : ""}
          disabled={
            timerButtonText === pauseTimerButtonText ||
            timerButtonText === resumeTimerButtonText
          }
        />

        <input
          min={0}
          max={60}
          type="text"
          placeholder="00"
          className="input input-bordered input-primary size-32 text-7xl text-center"
          onInput={(event) =>
            setTimerTime((prevTime) => {
              let newTime = { ...prevTime };
              newTime.minutes = Number(
                (event.target as HTMLInputElement).value
              );
              return newTime;
            })
          }
          value={
            timerTime.minutes > 0 ? formatTimeValue(timerTime.minutes, 2) : ""
          }
          disabled={
            timerButtonText === pauseTimerButtonText ||
            timerButtonText === resumeTimerButtonText
          }
        />
        <input
          min={0}
          max={60}
          type="text"
          placeholder="00"
          className="input input-bordered input-primary size-32 text-7xl text-center"
          onInput={(event) =>
            setTimerTime((prevTime) => {
              let newTime = { ...prevTime };
              newTime.seconds = Number(
                (event.target as HTMLInputElement).value
              );
              return newTime;
            })
          }
          value={
            timerTime.seconds > 0 ? formatTimeValue(timerTime.seconds, 2) : ""
          }
          disabled={
            timerButtonText === pauseTimerButtonText ||
            timerButtonText === resumeTimerButtonText
          }
        />
      </div>
      <div className="flex flex-col mt-10">
        <button
          className="btn btn-wide btn-outline"
          onClick={() => handleStartTimer(timerButtonText)}
        >
          {timerButtonText}
        </button>
        <button
          className="btn btn-wide btn-outline mt-2"
          onClick={clearTimer}
          disabled={timerButtonText === pauseTimerButtonText}
        >
          {clearTimerButtonText}
        </button>
        <button
          className="btn btn-wide btn-outline mt-2"
          onClick={resetTimer}
          disabled={
            timerButtonText === pauseTimerButtonText ||
            timerButtonText === startTimerButtonText
          }
        >
          {resetTimerButtonText}
        </button>
      </div>
    </div>
  );
};

export default Timer;
