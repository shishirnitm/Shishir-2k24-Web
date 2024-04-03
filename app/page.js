import Image from "next/image";

import welcome from "../public/text/welcome.svg";
import shishir from "../public/text/Shishir.svg";
import mascot from "../public/Mascot.svg";
import munTag from "../public/mun-tag.svg";
import separator from "../public/home-separator-1.svg";
import aboutSeparator from "../public/home/about-separator.svg";
import about from "../public/home/about.svg";
import attention from "../public/home/attention.svg";
import howTo from "../public/home/how_to.svg";
import howToSeparator from "../public/home/how-separator.svg";
import meet from "../public/home/meet.svg";
import speaker from "../public/home/speakers.svg";
import mainEvents from "../public/home/main_events.svg";
import dontMiss from "../public/home/dont_miss.svg";
import battleBands from "../public/home/bob.svg";
import symphony from "../public/home/symphony.svg";
import shimmer from "../public/home/shimmer-min.jpg";
import td from "../public/home/3D.jpg";
import om from "../public/home/OM.jpg";
import rangoli from "../public/home/Rangoli.jpg";
import dc from "../public/home/DC.jpg";
import ac from "../public/home/AC.jpg";
import th from "../public/home/TH.jpg";
import valo from "../public/home/VALO.jpg";
import bgmi from "../public/home/BGMI.jpg";
import tda from "../public/home/TD.jpg";
import step from "../public/home/step up.jpg";
import extemp from "../public/home/extemp.jpg";
import rakesh from "../public/home/RakeshChaurasia.jpg";
import pandit from "../public/home/pandit.png";
import dpg from "../public/home/DGP.png";
import spic from "../public/home/Spicmacay-1.png";
// import symphony from "../public/home/singing something.png";
// import battleBands from "../public/home/botb.png";
import prom from "../public/home/prom.png";
import panache from "../public/home/panache.jpg";
// import promNight from "../public/home/prom_night.svg";
import cheese from "../public/home/cheese.svg";
import gallery from "../public/home/gallery.svg";
import map from "../public/home/map.svg";
import day1 from "../public/home/day1.jpeg";
import day2 from "../public/home/day2.jpeg";
import day3 from "../public/home/day3.jpeg";

//TODO: Replace with final images later
import gallery1 from "../public/home/gallery1.png";
import gallery2 from "../public/home/gallery2.png";

//TODO: Replace with actual guests later
import godfather from "../public/home/jahnu.png";

import Button from "./components/Button";

import "./home.css";
import Guest from "./components/Guest";
import Poster from "./components/Poster";
import Gallery from "./components/Gallery";
import splash from "../public/splash.svg";

const posters = [
  panache,
  spic,
  prom,
  shimmer,
  td,
  om,
  rangoli,
  dc,
  ac,
  th,
  valo,
  bgmi,
  tda,
  step,
  extemp,
  battleBands,
  symphony,
];
const galleryImages = [gallery1, gallery2];

// Needs refactoring, too many lines in a single file...
// My own eyes hurt reading this shit

export default function Home() {
  return (
    <>
      <div className="">
        <div id="splash" className="relative">
          <svg
            id="splash-image"
            width="5751"
            height="3938"
            viewBox="0 0 5751 3938"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5537.66 1946.51C5925.91 1628.02 5690.11 643.175 5690.11 643.175L5692.43 21.239L-0.366566 5.47836e-05L-12.986 3382.46C-12.986 3382.46 853.338 4190.46 1281.96 3856.47C1560.33 3639.56 1258.63 3098.65 1590.92 2990.18C1853.8 2904.36 1978.84 3312.02 2248.83 3254.5C2648.5 3169.36 2342.52 2495.6 2689.99 2274.13C3116.33 2002.4 3571.87 2865.35 3948.87 2524.33C4195.97 2300.82 3963.44 1925.96 4204.98 1696.03C4594.37 1325.36 5123.04 2286.62 5537.66 1946.51Z"
              fill="#121212"
              stroke="black"
            />
          </svg>

          <div
            id="splash-inner"
            className="text-red-700 text-center font-bold flex justify-center items-center h-screen"
          >
            <Image
              id="logo"
              src={shishir}
              width="0"
              height="0"
              sizes="100vw"
              className="w-[95vw] h-auto md:w-[40vw]"
            />
          </div>
        </div>
        {/** Felt lazy to search and download all the fonts,
         * and then style them so... I just used svg images :P */}
        <div id="home" className="xs:pt-5 w-fit sm:pt-10 md:pt-24">
          <Image
            src={munTag}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[25vw] h-auto -translate-x-4 md:translate-x-0 md:w-[10vw]"
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-2 md:pl-16 md:p-16">
          <div>
            <div
              id="home"
              className="w-screen md:w-[50vw] flex flex-row md:justify-start justify-center"
            >
              <Image
                src={welcome}
                width="0"
                height="0"
                sizes="100vw"
                className="w-[95vw] h-auto md:w-[50vw]"
              />
            </div>
            <div
              id="home"
              className="pt-2 flex flex-row justify-center md:justify-start md:pt-10"
            >
              <Image
                src={shishir}
                width="0"
                height="0"
                sizes="100vw"
                className="w-[95vw] h-auto md:w-[60vw]"
              />
            </div>
          </div>
          <div id="home" className="pt-2 flex flex-row justify-center">
            <Image
              src={mascot}
              width="0"
              height="0"
              sizes="100vw"
              className="w-[99vw]  h-auto"
            />
          </div>
        </div>
        {/* <div id="home" className="pt-5  w-screen text-center">
          <Button text="Explore Shishir" link="..." />
        </div> */}
        {/* <div id="home" className="pt-10 w-[100vw] flex justify-center">
          <div className="w-[85vw]">
            <Button text="Explore Shishir" link="..." />
          </div>
        </div> */}
        {/* <div id="home" className="pt-10 flex flex-row justify-center">
          <Image
            src={separator}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[100vw]"
          />
        </div> */}
        <div id="home" className="pt-10 flex flex-col justify-center">
          <div className="bg-[#4EB7B4] w-screen h-5"></div>
          <div className="bg-[#186B80] w-screen h-5"></div>
          <div className="bg-[#E03932] w-screen h-5"></div>
        </div>
        {/** About Us Section  */}
        <div
          id="home"
          className="pt-24 flex flex-row pl-[8vw] justify-start md:justify-start md:pl-[10vw]"
        >
          <Image
            src={about}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[80vw] sm:w-[40vw] md:w-[25vw] h-auto"
          />
        </div>
        <div
          id="home"
          className=" font-blogger flex flex-row justify-start pl-[8vw] md:justify-start md:pl-[10vw]  md:pt-10 md:text-xl text-lg font-semibold text-primaryBlue bg-transparent"
        >
          <div className="w-[80vw] mt-6 leading-tight">
            Enjoy music, dance, shows, and fun at{" "}
            <span className="text-primaryRed">Shishir</span> - NIT
            Meghalaya&apos;s yearly culture fest. <br /> <br /> Come to the
            beautiful Bijni Complex in Shillong&apos;s hills from{" "}
            <span className="text-primaryRed">April 4th-6th</span> for an
            amazing time celebrating Meghalaya&apos;s rich{" "}
            <span className="text-primaryRed">culture</span> and warm
            hospitality.
            <br /> <br /> Make special memories at Shishir!
          </div>
        </div>
        <div
          id="home"
          className="flex  flex-col md:flex-row mt-10 md:pt-10  pl-[8vw] md:pb-10 md:pl-[10vw] md:space-x-24"
        >
          <div className="w-[70vw] md:w-min md:space-x-24 flex flex-row justify-between md:justify-start">
            <div className=" space-y-2 md:space-y-6 text-primaryBlue font-semibold text-3xl md:text-4xl font-antonio">
              <div className="text-4xl  md:text-6xl">15+</div>
              <div>
                SPECIAL
                <br /> ARTISTS
              </div>
            </div>
            <div className=" space-y-2 md:space-y-6 text-primaryBlue font-semibold md:text-4xl  text-3xl font-antonio">
              <div className="text-4xl md:text-6xl ">1.8K+</div>
              <div>
                SHISHIR
                {/* lmao kilio */}
                <br /> FOOTFALL
              </div>
            </div>
          </div>

          <div className="w-[70vw] mt-8 md:mt-0 md:w-min md:space-x-24 flex flex-row justify-between md:justify-start">
            <div className=" space-y-2 md:space-y-6 text-primaryBlue font-semibold text-3xl md:text-4xl font-antonio">
              <div className="text-4xl md:text-6xl">15+</div>
              <div>
                SPECIAL
                <br />
                GUESTS
              </div>
            </div>
            <div className=" space-y-2 md:space-y-6 text-primaryBlue font-semibold md:text-4xl text-3xl font-antonio">
              <div className="text-4xl md:text-6xl">130+</div>
              <div>
                SHISHIR
                <br /> EVENTS
              </div>
            </div>
          </div>
        </div>
        <div
          id="home"
          className="font-blogger flex flex-row justify-start text-md md:text-xl font-semibold text-primaryBlue bg-transparent"
        >
          <div className="w-[80vw] pl-[8vw] md:pl-[10vw] md:w-auto m mt-8 md:mt-20">
            Ready to participate? But first...
          </div>
        </div>
        <div id="home" className="pt-10 md:pt-20 flex flex-col justify-center">
          <div className="bg-[#F5E074] w-screen h-5"></div>
          <div className="bg-[#EFB023] w-screen h-5"></div>
          <div className="bg-[#E03932] w-screen h-5"></div>
        </div>
        <div
          id="home"
          className="pt-5 w-screen flex  md:w-fit justify-end xs:pt-5 sm:pt-10 md:pt-24"
        >
          <Image
            src={attention}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[25vw] h-auto translate-x-4 md:translate-x-0 md:w-[10vw]"
          />
        </div>
        <div
          id="home"
          className="pt-5 flex flex-row justify-start pl-[8vw] md:pl-[10vw]"
        >
          <Image
            src={howTo}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[85vw] h-auto sm:w-[40vw] md:w-[25vw]"
          />
        </div>
        <div
          id="home"
          className="font-blogger flex flex-col text-md items-center justify-center md:items-start font-semibold text-primaryBlue bg-transparent  md:pl-[10vw]"
        >
          <div className="text-xl font-bloggerBold w-[85vw] md:w-fit mt-8 md:text-3xl">
            NIT Meghalaya Students:
          </div>
          <div className="text-md leading-tight font-blogger w-[85vw] md:text-xl">
            Flash your college ID card at the entry gate to gain free access.
          </div>
        </div>
        <div
          id=""
          className="pt-5 w-[100vw] md:pl-[10vw] flex justify-center md:justify-start"
        >
          <div className="w-[85vw]">
            <Button text="Explore Events" link="/events" />
          </div>
        </div>
        <div
          id="home"
          className="font-blogger flex flex-col pt-5 items-center justify-center md:items-start text-md font-semibold text-primaryBlue bg-transparent  md:pl-[10vw]"
        >
          <div className="text-xl font-bloggerBold w-[85vw] md:w-fit mt-8 md:text-3xl">
            Other Students:
          </div>
          <div className="text-md  leading-tight  font-blogger w-[85vw] md:text-xl">
            Purchase your entry ticket offline / online through our secure
            website. <br /> <br />
            <span className="font-medium italic">
              Limited tickets available! So, Don&apos;t miss out!
            </span>
          </div>
        </div>
        <div
          id=""
          className="pt-5 w-[100vw] flex justify-center md:justify-start  md:pl-[10vw]"
        >
          <div className="w-[85vw]">
            <Button text="Get Your Ticket" link="/ticket" />
          </div>
        </div>
        <div className="pt-2 pb-20 w-[100vw] md:mt-10 md:text-lg flex justify-center font-blogger text-primaryBlue underline">
          <a
            className="text-[#186B80] font-blogger text-[17px] leading-[22px]"
            href="/wawcy"
          >
            Learn more: why are we charging you?{" "}
          </a>
        </div>
        <div id="home" className="pt-10 md:pt-10 flex flex-col justify-center">
          <div className="bg-[#3F362B] w-screen h-5"></div>
          <div className="bg-[#F7DCAD] w-screen h-5"></div>
          <div className="bg-[#4EB7B4] w-screen h-5"></div>
        </div>
        <div
          id="home"
          className="pt-5 w-screen flex  md:w-fit justify-end xs:pt-5 sm:pt-10 md:pt-24"
        >
          <Image
            src={mainEvents}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[25vw] h-auto translate-x-4 md:translate-x-0 md:w-[10vw] "
          />
        </div>
        <div
          id="home"
          className="pt-5 flex flex-row md:justify-start pl-[8vw] md:pl-[10vw]"
        >
          <Image
            src={dontMiss}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[85vw] h-auto sm:w-[40vw] md:w-[25vw]"
          />
        </div>
        <div
          id="home"
          className="font-blogger flex flex-col items-center md:items-start md:justify-start font-semibold text-primaryBlue bg-transparent pl-8vw md:pl-[10vw]"
        >
          <div className="text-lg font-semibold w-[85vw] mt-8 md:text-2xl md:mt-10">
            Handpicked events for you! These are our most popular and in-demand
            events. Grab your seat and enjoy the show ~
          </div>
        </div>
        <div className="pt-5">
          <div className="flex w-full overflow-scroll mt-10">
            {posters.map(
              (img, index) => {
                if (index == 1) return <Poster img={img} width={"w-96"} />;
                else return <Poster img={img} width={null} />;
              }
              // <div
              //   key={index}
              //   className={
              //     index === 0 ? "flex-grow ml-[-30px] mr-0" : "ml-[-30px] mr-0"
              //   }
              // >

              // </div>
            )}
          </div>
        </div>
        {/* <div
          id="home"
          className="font-blogger flex flex-col items-center justify-center md:items-start md:pl-[10vw] font-semibold text-primaryBlue bg-transparent"
        >
          <div className="text-lg font-semibold w-[85vw] mt-8">
            Looking for more events to join? You can..
          </div>
        </div>
        <div
          id=""
          className="pt-5 w-[100vw]  flex justify-center md:justify-start  md:pl-[10vw]"
        >
          <div className="w-[85vw]">
            <Button text="Explore Events" link="/events" />
          </div>
        </div> */}
        <div id="home" className="pt-16  md:pt-20 flex flex-col justify-center">
          <div className="bg-[#4EB7B4] w-screen h-5"></div>
          <div className="bg-[#186B80] w-screen h-5"></div>
          <div className="bg-[#E03932] w-screen h-5"></div>
        </div>
        <div
          id="home"
          className="pt-5 w-screen flex  md:w-fit justify-end xs:pt-5 sm:pt-10 md:pt-24"
        >
          <Image
            src={speaker}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[25vw] h-auto translate-x-4 md:translate-x-0 md:w-[10vw] "
          />
        </div>
        {/* <div
          id="home"
          className="pt-5 flex flex-row justify-start md:justify-start pl-[8vw] md:pl-[10vw]"
        >
          <Image
            src={meet}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[85vw] h-auto sm:w-[40vw] md:w-[25vw]"
          />
        </div> */}
        <div className="text-[#E03932] font-bernier text-[100px]  mb-[-2px] mt-4 pl-[8vw] md:pl-[10vw] leading-[90px]">
MEET OUR SPECIAL ARTISTS
        </div>
        <div
          id="home"
          className="font-blogger flex flex-col pl-[8vw] md:pl-[10vw]  md:items-start justify-center font-semibold text-primaryBlue bg-transparent"
        >
          <div className="text-lg font-semibold w-[85vw] mt-8 md:text-2xl md:mt-10">
            Meet the Performers coming in to liven up the Shishir stage this
            April.
          </div>
        </div>
        <div id="home" className="flex flex-col space-y-10 items-center ">
          <div className="text-4xl font-bernier text-center text-primaryBlue font-semibold w-[100vw] mt-8 md:mt-10">
            DAY 1
          </div>
          <Poster img={day1} width={"w-80"} />
          {/* <div className="w-50vw border-2"></div> */}
          <div className="text-4xl font-bernier text-center text-primaryBlue font-semibold w-[100vw] mt-8 md:mt-10">
            DAY 2
          </div>
          <Poster img={day2} width={"w-80"} />
          <div className="text-4xl font-bernier text-center text-primaryBlue font-semibold w-[100vw] mt-8 md:mt-10">
            DAY 3
          </div>
          <Poster img={day3} width={"w-80"} />

          <div className="text-md md:text-xl mt-10 font-blogger w-[85vw] text-primaryBlue">
            <span className="font-normal">
              meet your favorite celebs at Shishir. Go ahead and. .
            </span>
          </div>
          <div id="" className="pt-5 w-[100vw]  flex justify-center">
            <div className="w-[85vw]">
              <Button text="Book tickets" link="/ticket" />
            </div>
          </div>
        </div>
        <div id="home" className="pt-32 md:pt-20 flex flex-col justify-center">
          <div className="bg-[#F5E074] w-screen h-5"></div>
          <div className="bg-[#EFB023] w-screen h-5"></div>
          <div className="bg-[#E03932] w-screen h-5"></div>
        </div>

        <div
          id="home"
          className="pt-5 w-screen flex  md:w-fit justify-end xs:pt-5 sm:pt-10 md:pt-24"
        >
          <Image
            src={speaker}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[25vw] h-auto translate-x-4 md:translate-x-0 md:w-[10vw] "
          />
        </div>
        <div
          id="home"
          className="pt-5 flex flex-row justify-start md:justify-start pl-[8vw] md:pl-[10vw]"
        >
          <Image
            src={meet}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[85vw] h-auto sm:w-[40vw] md:w-[25vw]"
          />
        </div>
        <div
          id="home"
          className="font-blogger flex flex-col pl-[8vw] md:pl-[10vw]  md:items-start justify-center font-semibold text-primaryBlue bg-transparent"
        >
          <div className="text-lg font-semibold w-[85vw] mt-8 md:text-2xl md:mt-10">
            Meet the Speakers and Performers coming in to liven up the Shishir
            stage this April.
          </div>
        </div>
        <div id="home" className="mt-16 flex flex-col items-center">
          <div className="flex md:space-x-24 space-x-5 mb-5">
            <Guest
              img={godfather}
              title={"Jahnu Barua"}
              bio={"Indian Film Director"}
            />

            <Guest
              img={rakesh}
              title={"Shri Rakesh Chaurasia"}
              bio={"World Renowned Bansuri"}
            />
          </div>

          <div className="flex md:space-x-24 space-x-5 mb-5">
            <Guest
              img={pandit}
              title={"Anutosh Degharia"}
              bio={"Indian Tabla Percussionist"}
            />

            <Guest
              img={""}
              title={"Shri Ambrose Marak"}
              bio={"IAS Secretary "}
            />
          </div>
          <div className="flex md:space-x-24 space-x-5 mb-5">
            <Guest
              img={dpg}
              title={"Dr L R Bishnoi"}
              bio={"DGP of Meghalaya "}
            />
          </div>

          <div className="text-md md:text-xl mt-10 font-blogger w-[85vw] text-primaryBlue">
            <span className="font-normal">
              meet your favorite celebs at Shishir. Go ahead and. .
            </span>
          </div>
          <div id="" className="pt-5 w-[100vw]  flex justify-center">
            <div className="w-[85vw]">
              <Button text="Explore Events" link="/events" />
            </div>
          </div>
        </div>
        <div id="home" className="pt-32 md:pt-20 flex flex-col justify-center">
          <div className="bg-[#F5E074] w-screen h-5"></div>
          <div className="bg-[#EFB023] w-screen h-5"></div>
          <div className="bg-[#E03932] w-screen h-5"></div>
        </div>
        <div id="home" className="pt-5 w-screen flex justify-end">
          <Image
            src={cheese}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[25vw] h-auto translate-x-4 "
          />
        </div>
        <div id="home" className="pt-10 flex w- flex-row justify-center">
          <Image
            src={gallery}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[85vw]  h-auto"
          />
        </div>
        <div
          id="home"
          className="font-blogger flex flex-col items-center justify-center font-semibold text-primaryBlue bg-transparent"
        >
          <div className="text-lg font-semibold w-[85vw] mt-8">
            View last year&apos;s{" "}
            <span className="font-black">best moments</span> captured by the
            talented photography team and other attendees.
          </div>
        </div>
        <div className="flex w-screen overflow-scroll pt-10 pb-10 items-center">
          {galleryImages.map((img, index) => (
            <div key={index} className="pl-2">
              <Gallery img={img} />
            </div>
          ))}
        </div>
        <div id="" className="w-[100vw] flex justify-center">
          <div className="w-[85vw]">
            <Button text="View Full Gallery" link="/gallery" />
          </div>
        </div>
        <div id="home" className="pt-20 flex flex-row justify-center">
          <Image
            src={aboutSeparator}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[100vw]  h-auto"
          />
        </div>
        <div id="home" className="flex w- flex-row justify-center">
          <Image
            src={map}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[100vw]  h-auto"
          />
        </div>
        <div id="home" className="flex flex-row justify-center">
          <Image
            src={howToSeparator}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[100vw]  h-auto"
          />
        </div>
      </div>
    </>
  );
}
