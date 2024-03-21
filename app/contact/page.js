import "./contact.css";

export default function Contact()
{
    return(
        <>
        <div className="background bg-[#FDF6E9] h-full w-screen flex flex-col items-center ">
        <div className="flex justify-center textStroke w-5/6 h-36 mt-20
        sm:h-20
        xl:h-36">
          <div className="w-80 text-5xl
          sm:w-full sm:text-center sm:text-6xl
          xl:text-8xl">EXPLORE THE SHISHIR EVENTS!
          </div>
        </div>
        <div className="flex justify-center font-bernier text-[#E03932] text-[42px] w-5/6 text-center
        sm:w-[80vw] sm:text-7xl xl:text-center xl:text-8xl">
            <div className="w-full">FREE AND EXCLUSIVE</div>
        </div>
        </div>
        </>
    )
}