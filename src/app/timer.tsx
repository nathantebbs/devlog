"use client";
import { useEffect, useRef, useState } from "react";
export const dynamic = "force-dynamic";

export default function Timer() {

  let secondsPassed = 0;
  let minutesPassed = 0;
  let hoursPassed = 0;
  let miliPassed = 0;

  const [now, setNow] = useState(0);
  const [active, setActive] = useState(false);


  useEffect(() => {
    let intervalID: NodeJS.Timeout | number | null = null

    if (active) {
      intervalID = setInterval(() => setNow(now + 1), 10);
    }
    return () => {
      if (intervalID !== null) {
        clearInterval(intervalID);
      }
    }
  }, [active, now]);

  function handleToggle() {
    setActive(!active);
  }

  function handleReset() {
    setNow(0);
  }

  miliPassed = now % 100;
  secondsPassed = Math.floor((now % 6000) / 100);
  minutesPassed = Math.floor((now % 360000) / 6000);
  hoursPassed = Math.floor(now / 360000);


  return (
    <div className="items-center text-4xl md:text-5xl justify-items-center grid grod-rows-2 gap-4 border-2 border-border rounded-3xl p-4 bg-background">
      <div className="font-bold text-center items-end justify-items-center w-full grid grid-cols-2 text-secondaryText">
        <div className="justify-self-end">
          {hoursPassed.toFixed(0)}:{minutesPassed.toFixed(0)}
        </div>
        <div className="justify-self-start">
          <span className="md:text-4xl text-2xl">{secondsPassed.toFixed(0)}.{miliPassed}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 font-semibold text-4xl gap-10 text-center justify-between">
        <button className="border-border border-2 bg-background rounded-xl p-4 hover:bg-highlight active:bg-[#1c1c1c] transition-colors ease-in-out duration-200"
          onClick={handleToggle}>
          {active ? "Stop" : "Start"}
        </button>
        <button className="border-border border-2 bg-background rounded-xl p-4 hover:bg-highlight transition-colors ease-in-out duration-300"
          onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

