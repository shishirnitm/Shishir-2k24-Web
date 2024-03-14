import Image from 'next/image';
import arrowRight from "../../../public/text/arrowRight.svg";
import "../mun.css"
import Link from 'next/link';


export default function Committee(props) {
    return (
        <div className="mt-10">
            <div className="title font-bloggerBold text-[20px] text-[#186B80]">{props.title}</div>
            <div className="desc font-blogger text-[#186B80] ">{props.description}</div>
            <div className="flex gap-1">
                <Link href='https://www.instagram.com/nitm_mun/' target='_blank' rel='noreferrer' className="font-bloggerBold text-[#404040cc] text-[18px] leading-normal ">learn more</Link>
                <Image
                    priority
                    src={arrowRight}
                    alt="Learn more about Committee"
                    className='ml-1 h-3.5 w-auto my-auto cursor-pointer'
                />
            </div>
        </div>
    );
}