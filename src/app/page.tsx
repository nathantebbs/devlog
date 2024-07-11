import Timer from "./timer";

export default function HomePage() {
  return (
    <main className="flex min-w-full md:min-h-screen flex-col items-center justify-between p-6">
      <div className="justify-center">
        <Timer />
      </div>
    </main>
  );
}
