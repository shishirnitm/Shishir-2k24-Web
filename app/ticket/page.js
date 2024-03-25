
import Image from "next/image";
import sdp from "../../public/single Day pass.svg";
import fep from "../../public/FEP.svg";
import botb from "../../public/BOTB.svg";
import Tag from "../../public/ticket_tag.svg";
import "../globals.css";
import "../home.css";
export default function home() {
  return (
    
    <div className="flex flex-col ">
      <div id="home" className="pt-5 w-fit">
          <Image
            src={Tag}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[114px] h-auto -translate-x-[3px] -translate-y-9"
          />
        </div>
        <div className="flex flex-col pl-[31px] mt-[-35px] pr-2">
          <div className="text-[#E03932] font-bernier text-[50px]  mb-[-2px] ">NOTE:</div> 
          <div className="text-[#186B80] font-bloggerBold text-[28px]" >NIT Meghalaya Students:</div>
          <div className="text-[#186B80] font-blogger leading-none text-[20px]"  ><strong>Flash your college ID card at the entry gate to gain free access. (not applicable to some special events) </strong></div>
          <div className="text-[#186B80] font-bloggerBold text-[28px] mt-[18px] "> Other Students:</div>
          <div className="text-[#186B80] font-blogger leading-none text-[20px]" ><strong>Purchase your entry ticket offline / online through our secure website.</strong> </div>
       </div>
       
        <div className="text-[#E03932] font-bernier text-[40px] pl-[31px] mt-[25px] mb-[-18px] "> Shishir entry tickets:</div>
        <div id="home" className="p-8 sm:p-8 md:p-8 lg:p-10 xl:p-12 flex flex-row justify-center ">
          <Image
            src={sdp}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[99vw]  h-auto"
          />
        </div>
        <div id="home" className="p-8 sm:p-8 md:p-8 lg:p-10 xl:p-12 flex flex-row justify-center mt-[-35px] mb-[-5px]">
          <Image
            src={fep}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[99vw]  h-auto"
          />
        </div>
       
        <div className="text-[#E03932] font-bernier text-[40px]  pl-[31px] mt-[15px] mb-[-18px]"> EXCLUSIVE EVENTS:</div>
        <div id="home" className="p-8 sm:p-8 md:p-8 lg:p-10 xl:p-12 flex flex-row justify-center relative ">
          <Image
            src={botb}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[99vw]  h-auto"
          />
        </div>
        <div className=" flex flex-col text-[#186B80] font-blogger text-[18px] pl-[27px] pr-2">
        <div className="text-[#E03932] font-bernier text-[40px]  mt-[15px]"> IMPORTANT NOTICE:</div>
        <ul className="list-disc text-[#E03932] pl-6 text-[18px]">
        <li><strong>Exclusive Events <span class= "text-[#186B80]" >  are separate from the general Shishir event entry pass.</span></strong></li>
        <li> <strong><span class= "text-[#186B80]">NIT Meghalaya students also require these separate tickets to attend the events.</span> </strong></li>
        <li> <strong><span class= "text-[#186B80]">Limited tickets are available for each event, so book yours early to avoid disappointment! </span> </strong> </li>
      </ul>
        </div>
         
    </div>
  );
}