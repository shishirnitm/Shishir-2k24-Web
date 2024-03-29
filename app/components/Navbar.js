"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "./nav.css";
import Close from "../../public/Close.svg";
import Image from "next/image";
import HamBurger from "../../public/Hamburger.svg";
import star from "../../public/StarBlue.svg";

export default function Navbar() {
  const [close, setClose] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    switch (pathname) {
      case "/": {
        setActiveIndex(0);
        break;
      }
      case "/events": {
        setActiveIndex(1);
        break;
      }
      case "/ticket": {
        setActiveIndex(2);
        break;
      }
      case "/teams": {
        setActiveIndex(3);
        break;
      }
      case "/mun": {
        setActiveIndex(4);
        break;
      }
      default: {
      }
    }
  }, [pathname]);

  return (
    <>
      <div close={close} id="nav" className="absolute bg-[#F1EAE5]">
        <div className="ml-5 mr-5">
          <div
            close={close}
            id="items"
            className="text-5xl  space-y-3 font-medium font-bernier text-[#E03932] mt-16  flex flex-col"
          >
            <div className="flex justify-between space-x-6">
              <Link href="/" onClick={() => setClose("1")}>
                <span id="items">Home</span>
              </Link>
              <div className="flex justify-end ">
                <span
                  id="items"
                  className="text-2xl font-bukhari mr-4 text-[#186B80]"
                >
                  ..............
                </span>
                <span
                  id="items"
                  className="text-2xl font-bukhari text-[#186B80]"
                >
                  1
                </span>
              </div>
            </div>

            <div className="flex justify-between space-x-6">
              <Link href="events" onClick={() => setClose("1")}>
                <span id="items">Events</span>
              </Link>
              <div className="flex justify-end ">
                <span
                  id="items"
                  className="text-2xl font-bukhari mr-4 text-[#186B80]"
                >
                  ............
                </span>
                <span
                  id="items"
                  className="text-2xl font-bukhari text-[#186B80]"
                >
                  2
                </span>
              </div>
            </div>

            <div className="flex justify-between space-x-6">
              <Link href="/404" onClick={() => setClose("1")}>
                <span id="items">Sponsors</span>
              </Link>
              <div className="flex justify-end ">
                <span
                  id="items"
                  className="text-2xl font-bukhari mr-4 text-[#186B80]"
                >
                  .........
                </span>
                <span
                  id="items"
                  className="text-2xl font-bukhari text-[#186B80]"
                >
                  3
                </span>
              </div>
            </div>
            <div className="flex justify-between space-x-6">
              <Link href="/teams" onClick={() => setClose("1")}>
                <span id="items">Teams</span>
              </Link>
              <div className="flex justify-end ">
                <span
                  id="items"
                  className="text-2xl font-bukhari mr-4 text-[#186B80]"
                >
                  ...........
                </span>
                <span
                  id="items"
                  className="text-2xl font-bukhari text-[#186B80]"
                >
                  4
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex absolute flex-row md:pb-6  w-screen justify-end md:justify-center">
        <div
          onClick={() => {
            console.log("Clicked Open");
            if (close === null) {
              setClose("0");
            } else if (close === "1") {
              setClose("0");
            } else {
              setClose("1");
            }
          }}
          className="cursor-pointer m-4 font-bold transition-all duration-1000 md:hidden"
          style={{ color: close === "0" ? "white" : "black" }}
        >
          {close === "0" ? (
            <Image
              src={Close}
              width="0"
              height="0"
              sizes="100vw"
              className="w-[10vw]  h-auto"
            />
          ) : (
            <Image
              src={HamBurger}
              width="0"
              height="0"
              sizes="100vw"
              className="w-[10vw]  h-auto"
            />
          )}
        </div>
        <div className="hidden md:flex justify-center font-bernier text-primaryBlue space-x-8 text-2xl pt-6 lg:text-4xl lg:space-x-12">
          <Link href="/">
            <div
              className={`${
                activeIndex == 0 ? "text-primaryRed" : "text-primaryBlue"
              } cursor-pointer`}
            >
              Home
            </div>
          </Link>
          <Image
            src={star}
            width={20}
            height={20}
            className="text-primaryBlue"
          ></Image>
          <Link href="/events">
            <div
              className={`${
                activeIndex == 1 ? "text-primaryRed" : "text-primaryBlue"
              } cursor-pointer`}
            >
              Events
            </div>
          </Link>
          <Image src={star} width={20} height={20} className=""></Image>
          <Link href="/ticket">
            {" "}
            <div
              className={`${
                activeIndex == 2 ? "text-primaryRed" : "text-primaryBlue"
              } cursor-pointer`}
            >
              Tickets
            </div>
          </Link>
          <Image src={star} width={20} height={20}></Image>
          <Link href="/teams">
            <div
              className={`${
                activeIndex == 3 ? "text-primaryRed" : "text-primaryBlue"
              } cursor-pointer`}
            >
              Team
            </div>
          </Link>
          <Image src={star} width={20} height={20}></Image>
          <Link href="/mun">
            <div
              className={`${
                activeIndex == 4 ? "text-primaryRed" : "text-primaryBlue"
              } cursor-pointer`}
            >
              MUN
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
