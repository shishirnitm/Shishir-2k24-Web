import Image from "next/image";

import welcome from "../public/text/welcome.svg";
import shishir from "../public/text/Shishir.svg";
import mascot from "../public/Mascot.svg";
import munTag from "../public/mun-tag.svg";
import separator from "../public/home-separator-1.svg";
import aboutSeparator from "../public/home/about-separator.svg";
import about from "../public/home/about.svg";
import "./home.css";

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
            <span className="text-primaryRed">Shishir</span> - NIT Meghalaya's
            yearly culture fest. <br /> <br /> Come to the beautiful Bijni
            Complex in Shillong's hills from{" "}
            <span className="text-primaryRed">April 4th-6th</span> for an
            amazing time celebrating Meghalaya's rich{" "}
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
        <div id="home" className="text-center pt-24 bg-transparent">
          <div>This is the Shishir Home Page</div>
          <div>Welcome one and all!!!</div>
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
