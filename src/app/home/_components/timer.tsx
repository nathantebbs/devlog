"use client";
import { useEffect, useState } from "react";
export const dynamic = "force-dynamic";

export default function Timer() {

	let secondsPassed = 0;
	let minutesPassed = 0;
	let hoursPassed = 0;
	let miliPassed = 0;

	const [now, setNow] = useState(0);
	const [active, setActive] = useState(false);
	let intervalID: NodeJS.Timeout | number | null = null


	useEffect(() => {

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
		if (intervalID !== null) {
			clearInterval(intervalID);
			setActive(!active);
		}
		setNow(0);
	}

	miliPassed = now % 100;
	secondsPassed = Math.floor((now % 6000) / 100);
	minutesPassed = Math.floor((now % 360000) / 6000);
	hoursPassed = Math.floor(now / 360000);


	return (
		<div className="items-center text-2xl justify-items-center grid grod-rows-2 gap-4 border-2 border-border max-w-72 min-w-72 p-4 pe-4 rounded-3xl bg-background">
			<div className="font-bold text-center items-end justify-items-center w-full grid grid-cols-2 text-secondaryText">
				<div className="justify-self-end">
					{hoursPassed.toFixed(0)}:{minutesPassed.toFixed(0)}
				</div>
				<div className="justify-self-start">
					<span className="text-2xl">{secondsPassed.toFixed(0)}.{miliPassed}</span>
				</div>
			</div>
			<div className="grid grid-cols-2 font-semibold gap-10 text-center justify-between">
				<button className="border-border border-2 bg-background rounded-xl p-4 hover:border-hover active:border-highlight"
					onClick={handleToggle}>
					<div className="object-fit">
						{active ? "Stop" : "Start"}
					</div>
				</button>
				<button className="border-border border-2 bg-background rounded-xl p-4 hover:border-hover active:border-highlight"
					onClick={handleReset}>
					<div className="object-fit">
						Reset
					</div>
				</button>
			</div>
		</div>
	);
}

