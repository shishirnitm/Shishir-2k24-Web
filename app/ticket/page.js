import Image from "next/image";
import sdp from "../../public/single Day pass.svg";
import fep from "../../public/FEP.svg";
import botb from "../../public/BOTB.svg";
import Tag from "../../public/ticket_tag.svg";
import "./ticket.css";
import "../globals.css";
import "../home.css";
export default function home() {
  return (
    <div className="flex flex-col mt-4 ">
        <div id="home" className="xs:pt-5 w-fit sm:pt-10 md:pt-24">
          <Image
            src={Tag}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[25vw] h-auto -translate-x-0 md:translate-x-0 md:w-[10vw]"
          />
        </div>
      <div className="flex flex-col pl-[31px] pr-1">
        <div className="text-[#E03932] font-bernier text-[50px]  mb-[-2px] ">
          NOTE:
        </div>
        <div className="text-[#186B80] font-bloggerBold text-[28px]">
          NIT Meghalaya Students:
        </div>
        <div className="text-[#186B80] font-blogger leading-none text-[20px]">
          Flash your college ID card at the entry gate to gain free access. (not
          applicable to some special events){" "}
        </div>
        <div className="text-[#186B80] font-bloggerBold text-[28px] mt-[18px] ">
          {" "}
          Other Students:
        </div>
        <div className="text-[#186B80] font-blogger leading-none text-[20px]">
          Purchase your entry ticket offline / online through our secure
          website.{" "}
        </div>
      </div>
      <div className="text-[#E03932] font-bernier text-[40px]  pl-[31px] mt-[15px] mb-[-18px] ">
        {" "}
        Shishir entry tickets:
      </div>{" "}
      <div className=" sm:flex flex-row">
        <div
          // id="home"
          className="p-8 sm:p-8 md:p-8 lg:p-10 xl:p-12 flex flex-row justify-center relative sm:w-1/2 lg:w-1/3 "
        >
          <Image
            src={sdp}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[99vw]  h-auto object-cover"
          />
          <a href="https://forms.gle/EvR4ozNzeTideLsY7">
            <button className=" btn bg-white hover:bg-white text-black border-2 border-black font-bloggerBold py-3 px-5 rounded-full absolute bottom-[15%] right-[15%]">
              {">"}
            </button>
          </a>

          {/* <div className="absolute font-blogger text-[3.4vw] text-[#F95A2C] bottom-[17%] left-[13vw]">
            {" "}
            <strong>150 tickets available </strong>{" "}
          </div> */}
        </div>
        <div
          // id="home"
          className="p-8 sm:p-8 md:p-8 lg:p-10 xl:p-12 flex flex-row justify-center mt-[-35px] mb-[-5px] sm:mt-[0px] sm:mb-[0px]  relative  sm:w-1/2 lg:w-1/3 "
        >
          <Image
            src={fep}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[99vw]  h-auto"
          />
          <a href="https://forms.gle/Gp2zVKaLgw2WMdgp7">
            <button className=" btn bg-white hover:bg-white text-black border-2 border-black font-bloggerBold py-3 px-5 rounded-full absolute bottom-[15%] right-[15%]">
              {">"}
            </button>
          </a>
        </div>
      </div>
      <div className="text-[#E03932] font-bernier text-[40px] border border-solid border-bold pl-[31px] mt-[15px] mb-[-18px]">
        {" "}
        EXCLUSIVE EVENTS:
      </div>
      <div className="sm:flex sm:flex-row"> </div>
      <div
        // id="home"
        className="p-8 sm:p-8 md:p-8 lg:p-10 xl:p-12 flex flex-row justify-center sm:w-1/2 lg:w-1/3 relative "
      >
        <Image
          src={botb}
          width="0"
          height="0"
          sizes="100vw"
          className="w-[99vw]  h-auto"
        />
        <a href="https://docs.google.com/forms/d/1edCZy1w6DyS7v489WJLtzP69cISXiF3OO39mW-g0zAs/viewform?edit_requested=true">
          <button className=" btn bg-white hover:bg-white text-black border-2 border-black font-bloggerBold py-3 px-5 rounded-full absolute bottom-[15%] right-[15%]">
            {">"}
          </button>
        </a>
      </div>
      <div className=" flex flex-col text-[#186B80] font-blogger text-[18px] pl-[27px] pr-2">
        <div className="text-[#E03932] font-bernier text-[40px] mt-[15px]">
          {" "}
          IMPORTANT NOTICE:
        </div>
        <ul className="list-disc text-[#E03932] pl-6 text-[18px]">
          <li>
            <strong>
              Exclusive Events{" "}
              <span class="text-[#186B80]">
                {" "}
                are separate from the general Shishir event entry pass.
              </span>
            </strong>
          </li>
          <li>
            {" "}
            <strong>
              <span class="text-[#186B80]">
                NIT Meghalaya students also require these separate tickets to
                attend the events.
              </span>{" "}
            </strong>
          </li>
          <li>
            {" "}
            <strong>
              <span class="text-[#186B80]">
                Limited tickets are available for each event, so book yours
                early to avoid disappointment!{" "}
              </span>{" "}
            </strong>{" "}
          </li>
        </ul>
      </div>
      <div
        class="border-[#F5E074] font-bernier text-[19px] sm:text-[27px] mt-[35px]  flex justify-center items-center
   border-dotted border-t-2 border-b-2 sm:border-t-4 sm:border-b-4 bg-[#186B80] text-white p-2"
      >
        FEEL FREE TO&nbsp;
        <span class="line-through thicker-line text-[#F5E074]">CONTACT US</span>
        &nbsp;FOR ANY TICKET ENQUIRY
      </div>
    </div>
  );
}
