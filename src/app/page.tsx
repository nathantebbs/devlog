import Timer from "./timer";
import Image from "next/image";

export default function HomePage() {
  let date = new Date().getMinutes
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-gradient-to-b from-black to-gray-900 text-white">
      <div>
        <Image
          src="https://utfs.io/f/755ec5ad-2961-4624-bc8e-f10899578fad-75ryza.png"
          width={256}
          height={128}
          alt="Test"
        />
      </div>
      <Timer />
    </main>
  );
}
