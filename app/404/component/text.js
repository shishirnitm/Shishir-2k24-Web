import React from 'react';
import Button from './bt';
export default function TextContent() {
  return (
    <div className="flex flex-col">
      <div className="flex text-[#E03932] font-bernier text-[128px] mt-[-60px] sm:mt-[-80px] sm:text-[220px] justify-center items-center">
        404
      </div>
      <div className="flex text-[#E03932] font-bernier text-[28px] sm:mt-[-45px] justify-center items-center leading-none">
        The dev team is working hard 
      </div>
      <div className="flex text-[#E03932] font-bernier text-[28px] justify-center items-center leading-none">
        to bring this page back to life
      </div>
      <div className="flex text-[#E03932] mt-2 sm:mt-4 font-blogger text-[18px] sm:text-[20px] justify-center items-center">
        meanwhile, why don’t you try going
      </div> 
      <div className="pl-[100px] sm:pl-[65px] sm:pr-[65px] mt-1 pr-[100px]">
        <Button text="Back Home" link="/" />
      </div>
    </div>
  );
}
