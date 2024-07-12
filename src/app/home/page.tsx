"use client";

import { Timer } from "./_components";
import { useRouter } from "next/navigation";

export default function HomePage() {
	const router = useRouter();
	function handleRoute() {
		router.push('/')
	}
	return (
		<div className="flex min-w-full md:min-h-screen flex-col items-center justify-center gap-10 p-6">
			<div className="justify-center">
				<Timer />
			</div>
			<div className="">
				<button className="border border-border rounded-xl hover:border-hover active:border-highlight text-base text-accent p-4 font-bold" onClick={handleRoute}>Take Me Back!</button>
			</div>
		</div>
	);
}
