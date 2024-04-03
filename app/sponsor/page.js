import "../globals.css";
import "../home.css";
import Image from "next/image";
import NEC from "../../public/North east council png.png";
import nectar from "../../public/nectar logo png.png";
import mar from "../../public/marriqtt png.png";
import neepco from "../../public/North_Eastern_Electric_Power_Corporation_Logo.png";
export default function home() {
  return (
    <div className="flex flex-col mt-[70px] ">
      <div className="flex flex-col pl-[31px] pr-1">
        <div className="text-[#E03932] font-bernier text-[50px]  mb-[-2px] ">
          SPONSORS
        </div>
        <div className="text-[#186B80] font-bernier text-[28px]">
          DIAMOND TIER SPONSORS
        </div>
        <div className="text-[#186B80] font-bernier text-[28px] ">
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
          <div className="mt-2">
            <Image
              priority
              src={nectar}
              alt="Learn more about Committee"
              className="h-19 sm:h-28 w-auto"
            />
          </div>
        </div>
        </div>

        <div className="text-[#186B80] font-bernier text-[28px]">
          GOLD TIER SPONSORS
        </div>

        <div className="text-[#186B80] font-bernier text-[28px]">
          SILVER TIER SPONSORS
        </div>
        <div className="text-[#186B80] font-bernier text-[28px]">
          BRONZE TIER SPONSORS
        </div>
        <div className="mt-2 mr-2 ">
            <Image
              priority
              src={neepco}
              alt="Learn more about Committee"
              className="h-19 sm:h-28 w-auto"
            />
          </div>
        <div className="text-[#186B80] font-bernier text-[28px]">
          BASIC TIER SPONSORS
        </div>
        <div className="text-[#186B80] font-bernier text-[28px]">
          Transport SPONSORS
        </div>
        <div className="text-[#186B80] font-bernier text-[28px]">
          Hospitality SPONSORS
        </div>
        <div className="mt-2 mr-2 ">
            <Image
              priority
              src={mar}
              alt="Learn more about Committee"
              className="h-19 sm:h-28 w-auto"
            />
          </div>
        <div></div>
      </div>
    </div>
  );
}
