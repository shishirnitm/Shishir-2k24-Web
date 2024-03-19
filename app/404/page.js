import Image from "next/image";
import img from "../../public/404.svg";
import tag from "../../public/404tag.svg";
import TextContent from "./component/text";
import "../home.css";
export default function Footer() {
  return (
    <div className="flex flex-col ">
      <div id="home" className="pt-5 w-fit">
        <Image
          src={tag}
          width="0"
          height="0"
          sizes="100vw"
          className="w-[25vw] sm:w-[175px]  h-auto -translate-x-3 "
        />
      </div>
      <div className=" sm:flex sm:flex-row sm:pl-[300px] sm:pr-[300px] sm:mt-[10px]">
      <div className="sm:w-1/2 sm:mt-[0px] "> 
      <TextContent />
      </div>
      <div className="mt-[35px] sm:mt-[0px] sm:w-1/2">
        <Image priority src={img} alt="Oops" className="w-[100vw]  h-auto" />
      </div>
    </div>
    </div>
  );
}
