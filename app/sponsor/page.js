import "../globals.css";
import "../home.css";
import Image from "next/image";
import NEC from "../../public/North east council png.png";
import nectar from "../../public/nectar logo png.png";
import mar from "../../public/marriqtt png.png";
import neepco from "../../public/North_Eastern_Electric_Power_Corporation_Logo.png";
import mbda from "../../public/8 344736.png";
import st from "../../public/logo.png";
import shg from "../../public/Synroplang 3.png";
export default function home() {
  return (
    <div className="flex flex-col mt-[70px] ">
      <div className="flex flex-col pl-[31px] pr-[31px]">
        <div className="text-[#E03932] font-bernier text-[50px]  mb-[-2px] items-center ">
          OUR SUPPORTERS
        </div>
        <div className="font-blogger text-black text-[16px] md:text-[22px] leading-[18px]">
          <strong>
            {" "}
            <i>
              {" "}
              Shihir wouldn&apos;t be the celebration it is without the far-out
              support of our sponsors! Let&apos;s give a big round of applause to
              these righteous Organizations who are helping us make this a
              festival to remember~{" "}
            </i>
          </strong>
        </div>
        {/* <div className="text-[#186B80] font-bernier text-[28px]">
          DIAMOND TIER SPONSORS
        </div> */}
        <div className="text-black font-bernier text-[25px] items-center text-center mt-5 ">
          PLATINUM TIER SPONSORS
          <div className="flex flex-row items-start">
            <div className="mt-2 mr-2 ">
              <Image
                priority
                src={NEC}
                alt="Learn more about Committee"
                className="h-19 sm:h-28 w-auto"
              />
            </div>
            <div className="mt-2 mr-2">
              <Image
                priority
                src={mbda}
                alt="Learn more about Committee"
                className="h-19 sm:h-28 w-auto"
              />
            </div>
          </div>
        </div>

        <div className="text-black font-bernier text-[25px] items-center text-center mt-5">
          GOLD TIER SPONSORS
        </div>
        <div className="flex flex-row items-start">
          <div className="mt-2 mr-2 ">
            <Image
              priority
              src={st}
              alt="Learn more about Committee"
              className="h-19 sm:h-28 w-auto"
            />
          </div>
          <div className="mt-2">
              <Image
                priority
                src={nectar}
                alt="Learn more about Committee"
                className="h-19 sm:h-28 w-auto"
              />
            </div>
        </div>
        {/* <div className="text-[#186B80] font-bernier text-[28px]">
          SILVER TIER SPONSORS
        </div> */}
        <div className="text-black font-bernier text-[25px] items-center text-center mt-5">
          BRONZE TIER SPONSORS
        </div>
        <div className="mt-2 mr-2 flex flex-row ">
          <Image
            priority
            src={neepco}
            alt="Learn more about Committee"
            className="h-19 sm:h-28 w-1/2 sm:w-1/6"
          />
        </div>
        {/* <div className="text-[#186B80] font-bernier text-[28px]">
          BASIC TIER SPONSORS
        </div> */}
        <div className="text-black font-bernier text-[25px] items-center text-center mt-5">
          TRANSPORT PARTNER
        </div>
        <div className="mt-2 mr-2 ">
          <Image
            priority
            src={shg}
            alt="Learn more about Committee"
            className="h-19 sm:h-28 w-auto"
          />
        </div>
        {/* <div className="text-[#186B80] font-bernier text-[28px]">
          Hospitality SPONSORS
        </div>
        <div className="mt-2 mr-2 ">
          <Image
            priority
            src={mar}
            alt="Learn more about Committee"
            className="h-19 sm:h-28 w-auto"
          />
        </div> */}
        <div></div>
      </div>
    </div>
  );
}
