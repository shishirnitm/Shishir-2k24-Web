import Image from 'next/image';
import arrowRight from "../../../public/text/arrowRight.svg";
import "../mun.css"

export default function Committee(props) {
    return (
        <div className="mt-8">
            <div className="title font-bloggerBold text-[20px] text-[#186B80]">{props.title}</div>
            <div className="desc font-blogger text-[#186B80] ">{props.description}</div>
            <div className="flex gap-1">
                <div className="font-blogger font-bold text-[#404040cc] text-[18px] leading-normal ">learn more</div>
                <Image
                    priority
                    src={arrowRight}
                    alt="Learn more about Committee"
                    className=' h-3.5 my-auto'
                />
            </div>
        </div>
    );
}