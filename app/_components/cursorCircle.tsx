"use client"

import { useEffect } from "react"

const CursorCircle = () => {

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const circleCursor = document.querySelector(
        ".circle-cursor"
      ) as HTMLDivElement;
      const xAxis = e.clientX;
      const yAxis = e.clientY;
      circleCursor.style.transform = `translate(${xAxis}px, ${yAxis}px)`;

      const target = e.target as HTMLElement;
      const isLink =
        target.tagName === "A" || target.classList.contains("link");
      const isPopped = target.classList.contains("lr-crc");

      if (isLink) {
        circleCursor.style.transform += " scale(1.4)";
      }

      if (isPopped) {
        circleCursor.style.transform += " scale(3)";
        circleCursor.style.opacity = "0";
      } else if (circleCursor.style.opacity !== "1") {
        circleCursor.style.opacity = "1";
      }
    };

    document.addEventListener("mousemove", handleMouse);

    return () => {
      document.removeEventListener("mousemove", handleMouse);
    };
  }, [])
  
  return (
    <div className="circle-cursor"></div>
  )
}

export default CursorCircle