import Image from "next/image";
import img from "../../public/404.svg";
import tag from "../../public/404tag.svg";
import TextContent from "./component/text";
import "../home.css";
export default function Footer() {
  return (
    <div className="flex flex-col ">
   <div id="home" className="xs:pt-5 w-fit sm:pt-10 md:pt-24">
          <Image
            src={tag}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[25vw] h-auto -translate-x-0 md:translate-x-0 md:w-[10vw]"
          />
        </div>
    <div className=" lg:flex lg:flex-row lg:pr-[90px] lg:pl-[90px] lg-xl:pr-[140px] lg-xl:pl-[140px] mi:pr-[300px] mi:pl-[300px]  lg:mt-[10px]">
      <div className="lg:w-1/2 lg:mt-[0px] ">
        <TextContent />
      </div>
      <div className="mt-[35px] lg:mt-[0px] lg:w-1/2">
        <Image priority src={img} alt="Oops" className="w-[100vw]  h-auto" />
      </div>
      </div>
  </div>
  );
}
