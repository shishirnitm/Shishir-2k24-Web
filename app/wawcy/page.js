import Image from "next/image";
import img from "../../public/wawcy.svg";
import ac from "../../public/1clip.svg";
import bc from "../../public/2clip.svg";
import cc from "../../public/3clip.svg";
import dc from "../../public/4clip.svg";
import Button from "../components/Button";
import "../globals.css";
import "../home.css";
import "../ticket/ticket.css";
import vl from "../../public/Vectorleft.svg";
export default function home() {
  return (
    <div className="flex flex-col   ">
      <div className="pl-[32px] pt-[35px] sm:pt-[40px] md:pt-[70px] ">
        <a href="/">
          <button className=" btn1 bg-white hover:bg-white text-black border-2 border-black font-bloggerBold py-4 px-5 rounded-full ">
            <Image src={vl} alt="Opps" className="h-[17px] w-auto" />
          </button>
        </a>
      </div>

      <div
        id="home"
        className=" w-fit mt-[20px] md:mt-[-5px] sm:pt-10 md:pt-18 lg:pt-[50px]  pl-[30px] pr-[30px]"
      >
        <Image
          src={img}
          width="0"
          height="0"
          sizes="100vw"
          className="w-[99vw]  h-auto"
        />
      </div>
      <div className="text-[#E03932] font-bernier text-[30px]  pl-[30px] pr-[30px] mt-[22px] md:-[35px] md:text-[47px] lg:text-[70px] flex justify-center items-center sm:text-[50px] ">
        WHY ARE WE CHARGING YOU?
      </div>
      <div className="relative flex mt-[22px]">
        <Image
          src={ac}
          width="0"
          height="0"
          sizes="100vw"
          className="z-1 w-1/3 h-auto "
        />
        <Image
          src={bc}
          width="0"
          height="0"
          sizes="100vw"
          className="relative z-2 -ml-[30px] sm:-ml-[40px]  md:-ml-[60px] lg:-ml-[75px] xl:-ml-[80px] w-1/3 h-auto -translate-y-[-40px]  sm:-translate-y-[-70px] md:-translate-y-[-85px] lg:-translate-y-[-120px] xl:-translate-y-[-145px] "
        />
        <Image
          src={cc}
          width="0"
          height="0"
          sizes="100vw"
          className="relative z-10 w-1/3 h-auto -translate-x-[20px]  sm:-translate-x-[30px] md:-translate-x-[35px] lg:-translate-x-[45px] xl:-translate-x-[80px] "
        />
        <Image
          src={dc}
          width="0"
          height="0"
          sizes="100vw"
          className="absolute z-2 right-0 w-1/6 h-auto -translate-y-[-35px]  sm:-translate-y-[-70px] md:-translate-y-[-85px] lg:-translate-y-[-120px] xl:-translate-y-[-145px]   "
        />
      </div>
      <div className="mt-[15px] sm:mt-[60px] md:mt-[80px] lg:mt-[120px] xl:mt-[160px] pl-[30px] pr-[30px] pt-[50px] font-blogger text-[#186B80] text-[20px] leading-[23px] md:leading-[25px] md:text-[25px]">
        <div>
          Yo, listen up, Visitors!{" "}
          <spam className="font-bloggerBold"> NITM&apos;s Shishir</spam> is run
          by a bunch of hardworking students who bust their butts to bring you
          this epic experience.
        </div>
        <br></br>
        <div>
          But here&apos;s the catch we&apos;re,{" "}
          <spam className="font-bloggerBold">broke AF</spam>! Sure, we got some
          sponsors hooking us up, but it ain&apos;t nearly enough to make{" "}
          <spam className="font-bloggerBold">Shishir </spam> as lit as we want
          it to be.
        </div>
        <br></br>
        <div>
          So, here&apos;s the deal you gotta cough up a{" "}
          <spam className="font-bloggerBold">few bucks </spam> to join in on the
          fun. But trust us, it&apos;s worth every rupee for the wild time
          you&apos;re about to have!
        </div>
        <br></br>
        <div> Now, with all due respect, quit yappin&apos; and...</div>
        <div className="w-[85vw] mt-[30px]">
          <Button text="Get Your Ticket" link="/ticket" />
          {/* <div
          id="home"
          className="pt-2 pb-20 md:mt-10 md:text-lg flex justify-center font-blogger text-primaryBlue underline"
        >
          <div>contact us if you want a special discount</div>
        </div> */}
        </div>
      </div>
    </div>
  );
}
