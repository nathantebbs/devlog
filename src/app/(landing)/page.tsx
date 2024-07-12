"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Landing() {
	const router = useRouter()
	function handleRoute() {
		router.push('/home');
	}
	function handleGH() {
		router.push('https://github.com/nathantebbs/devlog');
	}

	return (
		<div className="text-6xl font-bold font-sans h-screen w-screen content-center justify-center flex">
			<div className="grid grid-rows-3 gap-1 self-center w-1/3 justify-items-center items-center border-2 border-border p-5 pb-auto">
				<div>
					<Image
						src="https://utfs.io/f/8dab068b-fd6f-45a7-96c6-4dac9e99bb64-75ryzc.png"
						width={256}
						height={128}
						alt="dev log logo"
						layout="responsive"
					/>
				</div>

				<div className="text-secondaryText text-xl text-wrap text-center">
					This website is currently in active development, to see the in progress website click below.
				</div>

				<div className="flex flex-row gap-4">
					<button className="border border-border rounded-xl hover:border-hover active:border-highlight text-base text-accent p-4" onClick={handleRoute}>Active Development</button>
					<button className="border border-border rounded-xl hover:border-hover active:border-highlight text-base text-accent p-4" onClick={handleGH}>
						<Image
							src="github-seeklogo.svg"
							width={32}
							height={32}
							alt="github"
						/>
					</button>
				</div>


			</div>
		</div>
	);
}
