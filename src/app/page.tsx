"use client";
import Image from "next/image";
import { useRef } from "react";
// import styles from '../styles/home.module.css'
import styles from "../styles/home.module.css";

const Home = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const container = containerRef.current;
  const img = imgRef.current;

  const manageMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const { clientX, clientY } = event;

    if (container && img) {
      const containerPosition = container.getBoundingClientRect();
      const x = clientX - containerPosition.x;
      const y = clientY - containerPosition.y;
      img.style.top = y + "px";
      img.style.left = x + "px";
      draw(x, y);
    }
  };

  const draw = (x: number, y: number) => {
    const div = document.createElement("div");
    // const styleCircle =
    //   "w-160 h-160 rounded-full border-solid border-4 border-black absolute -translate-x-1/2 -translate-y-1/2 z-1";
    div.classList.add(styles["circle"]);
    div.style.top = y + "px";
    div.style.left = x + "px";
    container?.append(div);
  };
  return (
    <main className="flex h-dvh justify-center items-center">
      <div
        ref={containerRef}
        onMouseMove={(e) => {
          manageMouseMove(e);
        }}
        className="h-dvh w-dvw relative overflow-hidden border-solid border-4 border-black bg-yellow-300"
      >
        <Image
          ref={imgRef}
          className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
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
