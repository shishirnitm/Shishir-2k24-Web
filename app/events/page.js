import "./events.css";

export default function Events() {
  return (
    <>
      <div className="bg-[#FDF6E9] h-screen w-screen flex flex-col items-center ">
        <div className="flex justify-center textStroke w-5/6 h-36 mt-20">
          <div className=" w-80">EXPLORE THE SHISHIR EVENTS !</div>
        </div>
        <div className="flex justify-center font-bernier text-justify text-[#E03932] text-[40px] w-5/6 ">
            <div className=" w-80">FREE AND EXCLUSIVE</div>
        </div>
        <div className="border-[1px] w-80 h-1/6 border-black mt-10 flex flex-col items-center">
          <div className="h-2/5">The four types of events are:</div>
          <div className="w-11/12 h-3/5 border-t-[1px] border-black"></div>
        </div>
      </div>
    </>
  );
}
