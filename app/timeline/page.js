"use client"
import "./timeline.css";
import { useState } from "react";
import day1 from "./day1.svg";
import day2 from "./day3.svg";
import day3 from "./day3.svg";
import Image from "next/image";

export default function Events() {
  const[category,setCategory] = useState("all")
  return (
    <>
      <div className="background bg-[#FDF6E9] h-full w-screen flex flex-col items-center ">
        <div className="flex justify-center textStroke w-5/6 h-20 mt-20
        sm:h-20
        xl:h-36">
          <div className="w-80 text-5xl
          sm:w-full sm:text-center sm:text-6xl
          xl:text-8xl">EVENTS TIMELINE
          </div>
        </div>
        <Image
          src={day1}
          width="350"
          height="0"
          sizes="90vw"
          className="w-[90vw] md:w-[50vw]"
        />
        <Image
          src={day2}
          width="350"
          height="0"
          sizes="90vw"
          className="w-[90vw] md:w-[50vw]"
        />
        <Image
          src={day3}
          width="350"
          height="0"
          sizes="90vw"
          className="w-[90vw] md:w-[50vw]"
        />

        <div className="h-40"></div>
      </div>
    </>
  );
}
