// ShishirEntryTicketsSection.js
import React from 'react';
import Image from "next/image";
import sdp from "../public/single Day pass.svg";

const shishir= () => {
  return (
    <div>
      <div className="text-[#E03932] font-bernier text-[40px] border border-solid border-bold pl-[31px] mt-[15px] mb-[-18px] "> Shishir entry tickets:</div>
      <div id="home" className="p-8 sm:p-8 md:p-8 lg:p-10 xl:p-12 flex flex-row justify-center relative ">
        <Image
          src={sdp}
          width="0"
          height="0"
          sizes="100vw"
          className="w-[99vw]  h-auto object-cover"
        /> 
        <button className= " btn bg-white hover:bg-white text-black border-2 border-black font-bloggerBold py-3 px-5 rounded-full absolute bottom-[15%] right-[15%]">
          {'>'}
        </button>
      </div>
    </div>
  );
}

export default shishir;
