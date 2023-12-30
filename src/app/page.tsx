import Image from "next/image";
export default function Home() {
  return (
    <main className="flex h-dvh justify-center items-center">
      <div className="h-dvh w-dvw relative overflow-hidden border-solid border-4 border-black bg-yellow-300">
        <Image
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-2"
          src="/assets/smiley.svg"
          alt="smiley-face"
          height={160}
          width={160}
        />
      </div>
    </main>
  );
}
