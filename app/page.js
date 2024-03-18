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

//TODO: Replace with actual guests later
import godfather from "../public/home/godfather.png";
import goodfella from "../public/home/goodfella.png";
import theKing from "../public/home/the_king.png";
import dentist from "../public/home/dentist.png";

import Button from "./components/Button";

import "./home.css";
import Guest from "./components/Guest";

export default function Home() {
  return (
    <>
      <div className="h-screen overflow-scroll ">
        <div id="splash">
          <div id="splash-inner" className="text-red-700 text-center font-bold">
            Welcome to Shishir 2024!
          </div>
        </div>
        {/** Felt lazy to search and download all the fonts,
         * and then style them so... I just used svg images :P */}
        <div id="home" className="pt-5 w-fit">
          <Image
            src={munTag}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[25vw] h-auto -translate-x-4"
          />
        </div>
        <div id="home" className="w-screen flex flex-row justify-center">
          <Image
            src={welcome}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[95vw] h-auto "
          />
        </div>
        <div id="home" className="pt-2 flex flex-row justify-center">
          <Image
            src={shishir}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[95vw] h-auto"
          />
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
        <div id="home" className="pt-10 flex flex-row justify-center">
          <Image
            src={separator}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[100vw]  h-auto"
          />
        </div>
        {/** About Us Section  */}
        <div id="home" className="pt-24 flex flex-row justify-center">
          <Image
            src={about}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[80vw]  h-auto"
          />
        </div>
        <div
          id="home"
          className="font-blogger flex flex-row justify-center text-md font-semibold text-primaryBlue bg-transparent"
        >
          <div className="w-[80vw] mt-6">
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
        <div id="home" className="flex flex-row justify-center mt-10">
          <div className="w-[75vw] flex flex-row justify-between">
            <div className=" space-y-2 text-primaryBlue font-semibold text-3xl font-antonio">
              <div className="text-4xl">15+</div>
              <div>
                SPECIAL
                <br /> ARTISTS
              </div>
            </div>
            <div className=" space-y-2 text-primaryBlue font-semibold text-3xl font-antonio">
              <div className="text-4xl">1.8K+</div>
              <div>
                SHISHIR
                <br /> FOOTBALL
              </div>
            </div>
          </div>
        </div>
        <div id="home" className="flex flex-row justify-center mt-8">
          <div className="w-[75vw] flex flex-row justify-between">
            <div className=" space-y-2 text-primaryBlue font-semibold text-3xl font-antonio">
              <div className="text-4xl">150+</div>
              <div>
                GUESTS <br />
              </div>
            </div>
            <div className=" space-y-2 text-primaryBlue font-semibold text-3xl font-antonio">
              <div className="text-4xl">130+</div>
              <div>EVENTS</div>
            </div>
          </div>
        </div>
        <div
          id="home"
          className="font-blogger flex flex-row justify-center text-md font-semibold text-primaryBlue bg-transparent"
        >
          <div className="text-center w-[80vw] mt-8">
            Ready to participate? But first...
          </div>
        </div>
        <div id="home" className="pt-10 flex flex-row justify-center">
          <Image
            src={aboutSeparator}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[100vw]  h-auto"
          />
        </div>
        <div id="home" className="pt-5 w-screen flex justify-end">
          <Image
            src={attention}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[25vw] h-auto translate-x-4 "
          />
        </div>
        <div id="home" className="pt-5 flex flex-row justify-center">
          <Image
            src={howTo}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[85vw]  h-auto"
          />
        </div>
        <div
          id="home"
          className="font-blogger flex flex-col items-center justify-center text-md font-semibold text-primaryBlue bg-transparent"
        >
          <div className="text-2xl font-bloggerBold w-[85vw] mt-8">
            NIT Meghalaya Students:
          </div>
          <div className="text-lg font-blogger w-[85vw]">
            Flash your college ID card at the entry gate to gain free access.
          </div>
        </div>
        <div id="home" className="pt-5 w-[100vw] flex justify-center">
          <div className="w-[85vw]">
            <Button text="Explore Events" link="..." />
          </div>
        </div>
        <div
          id="home"
          className="font-blogger flex flex-col pt-5 items-center justify-center text-md font-semibold text-primaryBlue bg-transparent"
        >
          <div className="text-2xl font-bloggerBold w-[85vw] mt-8">
            Other Students:
          </div>
          <div className="text-lg font-blogger w-[85vw]">
            Purchase your entry ticket offline / online through our secure
            website. <br />
            <span className="font-medium italic">
              Limited tickets available! So, Don&apos;t miss out!
            </span>
          </div>
        </div>
        <div id="home" className="pt-5 w-[100vw] flex justify-center">
          <div className="w-[85vw]">
            <Button text="Get Your Ticket" link="..." />
          </div>
        </div>
        <div
          id="home"
          className="pt-2 pb-20 w-[100vw] flex justify-center font-blogger text-primaryBlue underline"
        >
          <div>Learn more: why are we charging you?</div>
        </div>
        <div id="home" className="pb-4 flex flex-row justify-center">
          <Image
            src={howToSeparator}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[100vw]  h-auto"
          />
        </div>
        <div id="home" className="pt-5 w-screen flex justify-end">
          <Image
            src={speaker}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[25vw] h-auto translate-x-4 "
          />
        </div>
        <div id="home" className="pt-5 flex w- flex-row justify-center">
          <Image
            src={meet}
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
            Meet the Speakers and Performers coming in to liven up the Shishir
            stage this April.
          </div>
        </div>
        <div id="home" className="mt-16 flex flex-col items-center">
          <div className="flex w-[85vw] justify-between">
            <Guest
              img={godfather}
              title={"Al Pacino"}
              bio={"Singer/Songwriter"}
            />
            <Guest
              img={goodfella}
              title={"Robert De Niro"}
              bio={"Singer/Songwriter"}
            />
          </div>
          <div className="flex w-[85vw] mt-10 justify-between">
            <Guest
              img={theKing}
              title={"Elvis Presley"}
              bio={"Singer/Songwriter"}
            />
            <Guest
              img={dentist}
              title={"Christoph Waltz"}
              bio={"Singer/Songwriter"}
            />
          </div>
          <div className="text-md mt-10 font-blogger w-[85vw] text-primaryBlue">
            <span className="font-normal">
              meet your favorite celebs at Shishir. Go ahead and. .
            </span>
          </div>
          <div id="home" className="pt-5 w-[100vw] flex justify-center">
            <div className="w-[85vw]">
              <Button text="Explore Events" link="..." />
            </div>
          </div>
        </div>
        <div id="home" className="pt-10 flex flex-row justify-center">
          <Image
            src={aboutSeparator}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[100vw]  h-auto"
          />
        </div>
        {/* <div id="home" className="text-center pt-24">
          <div>This is the Shishir Home Page</div>
          <div>Welcome one and all!!!</div>
        </div>
        <div id="home" className="text-center pt-24">
          <div>This is the Shishir Home Page</div>
          <div>Welcome one and all!!!</div>
        </div>
        <div id="home" className="text-center pt-24">
          <div>This is the Shishir Home Page</div>
          <div>Welcome one and all!!!</div>
        </div>
        <div id="home" className="text-center pt-24">
          <div>This is the Shishir Home Page</div>
          <div>Welcome one and all!!!</div>
        </div>
        <div id="home" className="text-center pt-24">
          <div>This is the Shishir Home Page</div>
          <div>Welcome one and all!!!</div>
        </div>
        <div id="home" className="text-center pt-24">
          <div>This is the Shishir Home Page</div>
          <div>Welcome one and all!!!</div>
        </div> */}
      </div>
    </>
  );
}
