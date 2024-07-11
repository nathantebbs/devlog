import Image from "next/image";
export default function LeftNav() {
  return (
    <div className="flex w-full h-full flex-col p-5 overflow-hidden items-center md:self-start">
      <Image
        src="https://utfs.io/f/8dab068b-fd6f-45a7-96c6-4dac9e99bb64-75ryzc.png"
        width={256}
        height={128}
        alt="dev log logo"
      />
      <div className="grid grid-rows-3 p-5 gap-4 min-h-96 w-full">
        <div className="p-5 border-2 border-border h-full"></div>
        <div className="p-5 border-2 border-border h-full"></div>
        <div className="p-5 border-2 border-border h-full"></div>
      </div>
    </div>
  );
}
