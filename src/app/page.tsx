import Image from "next/image";

const Home = (): JSX.Element => {
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
        <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border-slate-300 border-solid border-2 bg-slate-200 h-10 w-5/12 items-center text-center align-middle">
          <p className="mt-1">Loading...</p>
        </div>
      </div>
    </main>
  );
};

export default Home;
