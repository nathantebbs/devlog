"use client";
import Timer from "./timer";

export default function HomePage() {
  let date = new Date().getMinutes
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="text-5xl font-extrabold">DevLog</div>
      <Timer />
    </main>
  );
}
