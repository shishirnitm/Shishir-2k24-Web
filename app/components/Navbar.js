"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "./nav.css";
import Close from "../../public/Close.svg";
import Image from "next/image";
import HamBurger from "../../public/Hamburger.svg";
import star from "../../public/StarBlue.svg";

import instagram from "../../public/navbar/instagram.svg";
import fb from "../../public/navbar/fb.svg";
import whatsapp from "../../public/navbar/whatsapp.svg";
import linkedin from "../../public/navbar/linkedin.svg";

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
      case "/sponsor": {
        setActiveIndex(5);
      }
      default: {
      }
    }
  }, [pathname]);

  return (
    <>
      <div
        close={close}
        id="nav"
        className="absolute bg-[#F1EAE5] overflow-hidden"
      >
        <div
          id="items"
          className="bg-primaryBlue  overflow-ellipsis text-nowrap h-min absolute bottom-0 font-blogger pb-3 pt-1 w-full text-center"
        >
          <span
            id="items"
            className="text-white text-sm
            
            "
          >
            built with love and care by |
          </span>{" "}
          <span className="text-yellow-300 text-sm">
            nitm web dev creatives
          </span>
        </div>
        <div className="justify-between flex flex-col">
          <div
            close={close}
            id="items"
            className="text-3xl ml-5 mr-5 space-y-3 font-medium font-bernier text-[#E03932] mt-16  flex flex-col"
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
              <Link href="/ticket" onClick={() => setClose("1")}>
                <span id="items">Tickets</span>
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
                  3
                </span>
              </div>
            </div>
            <div className="flex justify-between space-x-6">
              <Link href="/sponsor" onClick={() => setClose("1")}>
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
                  4
                </span>
              </div>
            </div>
            <div className="flex justify-between space-x-6 pb-4">
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
                  5
                </span>
              </div>
            </div>
            <div className="border-[5px] border-primaryBlue p-2  pb-4 -space-y-2 flex flex-col ">
              <div className="self-center  relative -top-7 bg-[#F1EAE5] w-min pl-6 pr-6">
                Specials
              </div>
              <div className="flex justify-between space-x-6 items-baseline  ">
                <Link href="/404" onClick={() => setClose("1")}>
                  <span
                    id="items"
                    className="font-bloggerBold text-primaryBlue italic text-xl"
                  >
                    Contact us
                  </span>
                </Link>
                <div className="flex justify-end ">
                  <span
                    id="items"
                    className="text-xl  font-bukhari mr-2 text-[#186B80]"
                  >
                    ..........
                  </span>
                  <span
                    id="items"
                    className="text-xl font-bukhari text-[#186B80]"
                  >
                    1
                  </span>
                </div>
              </div>
              <div className="flex justify-between space-x-6 items-baseline ">
                <Link href="/mun" onClick={() => setClose("1")}>
                  <span
                    // id="items"
                    className="font-bloggerBold text-primaryBlue italic text-xl"
                  >
                    MUN
                  </span>
                </Link>
                <div className="flex justify-end ">
                  <span
                    id="items"
                    className="text-xl  font-bukhari mr-2 text-[#186B80]"
                  >
                    ..............
                  </span>
                  <span
                    id="items"
                    className="text-xl font-bukhari text-[#186B80]"
                  >
                    2
                  </span>
                </div>
              </div>
              <div className="flex justify-between space-x-6 items-baseline ">
                <Link href="/teams" onClick={() => setClose("1")}>
                  <span
                    // id="items"
                    className="font-bloggerBold text-primaryBlue italic text-xl"
                  >
                    Teams
                  </span>
                </Link>
                <div className="flex justify-end ">
                  <span
                    id="items"
                    className="text-xl  font-bukhari mr-2 text-[#186B80]"
                  >
                    .................
                  </span>
                  <span
                    id="items"
                    className="text-xl font-bukhari text-[#186B80]"
                  >
                    3
                  </span>
                </div>
              </div>
              {/* <div className="flex justify-between space-x-6 items-baseline ">
                <Link href="/" onClick={() => setClose("1")}>
                  <span
                    // id="items"
                    className="font-bloggerBold text-primaryBlue italic text-2xl"
                  >
                    Sponsors
                  </span>
                </Link>
                <div className="flex justify-end ">
                  <span
                    id="items"
                    className="text-2xl  font-bukhari mr-2 text-[#186B80]"
                  >
                    ...............
                  </span>
                  <span
                    id="items"
                    className="text-2xl font-bukhari text-[#186B80]"
                  >
                    4
                  </span>
                </div>
              </div> */}
              <div className="flex justify-between space-x-6 items-baseline ">
                <Link href="/404" onClick={() => setClose("1")}>
                  <span
                    // id="items"
                    className="font-bloggerBold text-primaryBlue italic text-xl"
                  >
                    FAQ
                  </span>
                </Link>
                <div className="flex justify-end ">
                  <span
                    id="items"
                    className="text-xl  font-bukhari mr-2 text-[#186B80]"
                  >
                    ..................
                  </span>
                  <span
                    id="items"
                    className="text-xl font-bukhari text-[#186B80]"
                  >
                    5
                  </span>
                </div>
              </div>
              <div className="flex justify-between space-x-6 items-baseline ">
                <a href="https://nitm.ac.in">
                  <span
                    // id="items"
                    className="font-bloggerBold text-primaryBlue italic text-xl"
                  >
                    NITM Website
                  </span>
                </a>
                <div className="flex justify-end ">
                  <span
                    id="items"
                    className="text-xl  font-bukhari mr-2 text-[#186B80]"
                  >
                    .........
                  </span>
                  <span
                    id="items"
                    className="text-xl font-bukhari text-[#186B80]"
                  >
                    6
                  </span>
                </div>
              </div>
              <div className="flex justify-between space-x-6 items-baseline ">
                <Link href="/404" onClick={() => setClose("1")}>
                  <span
                    // id="items"
                    className="font-bloggerBold text-primaryBlue italic text-xl"
                  >
                    Terms & Conditions
                  </span>
                </Link>
                <div className="flex justify-end ">
                  <span
                    id="items"
                    className="text-xl  font-bukhari mr-2 text-[#186B80]"
                  >
                    ...
                  </span>
                  <span
                    id="items"
                    className="text-xl font-bukhari text-[#186B80]"
                  >
                    7
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-6 pt-2">
              {" "}
              <a href="https://www.instagram.com/shishir_nitm?igsh=MXIzYzBvajFpdWRpNg==">
                <Image src={instagram} width={20} height={20}></Image>
              </a>
              <a href="https://www.facebook.com/shishir.nitm?mibextid=LQQJ4d">
                <Image src={fb} width={20} height={20}></Image>
              </a>
              <a href="https://wa.me/message/CUN5EZTFE2KKA1">
                <Image src={whatsapp} width={20} height={20}></Image>
              </a>
              <a href="https://in.linkedin.com/company/shishir-nit-meghalaya">
                <Image src={linkedin} width={20} height={20}></Image>{" "}
              </a>
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
              className="w-[8vw]  h-auto"
            />
          ) : (
            <Image
              src={HamBurger}
              width="0"
              height="0"
              sizes="100vw"
              className="w-[8vw]  h-auto"
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
          <Image src={star} width={20} height={20}></Image>
          <Link href="/sponsor">
            <div
              className={`${
                activeIndex == 5 ? "text-primaryRed" : "text-primaryBlue"
              } cursor-pointer`}
            >
              Sponsors
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
