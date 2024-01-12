"use client";
import Image from "next/image";
import { useRef } from "react";
import styles from "./style.module.scss";

const LoadingPage = (): JSX.Element => {
  const container = useRef<HTMLDivElement | null>(null);
  const img = useRef<HTMLImageElement | null>(null);

  const manageMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const { clientX, clientY } = event;

    const containerPosition = container?.current?.getBoundingClientRect();
    const x = clientX - (containerPosition?.x ?? 0);
    const y = clientY - (containerPosition?.y ?? 0);

    if (img.current) {
      img.current.style.top = y + "px";
      img.current.style.left = x + "px";
    }

    draw(x, y);
  };

  const draw = (x: number, y: number) => {
    const div = document.createElement("div");
    div.classList.add(styles["circle"]);
    div.style.top = y + "px";
    div.style.left = x + "px";
    container?.current?.append(div);

    if ((container?.current?.childNodes.length ?? 0) > 25) {
      erase();
    } else {
      setTimeout(() => {
        erase();
      }, 1500);
    }
  };

  const erase = () => {
    container?.current?.removeChild(container.current.childNodes[1]);
  };
  return (
    <main className="flex h-dvh justify-center items-center">
      <div
        ref={container}
        onMouseMove={(e) => {
          manageMouseMove(e);
        }}
        className="h-dvh w-dvw relative overflow-hidden border-solid border-4 border-black bg-yellow-300"
      >
        <Image
          ref={img}
          className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src="/assets/smiley.svg"
          alt="smiley-face"
          height={160}
          width={160}
        />
      </div>
      <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border-slate-300 border-solid border-2 bg-slate-200 h-10 w-5/12 items-center text-center align-middle">
        <p className="mt-1">Loading...</p>
      </div>
    </main>
  );
};

export default LoadingPage;
