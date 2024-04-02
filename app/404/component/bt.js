import "./text.css"
import Link from "next/link";
import arrow from "../../../public/text/Polygon7.svg";
import Image from "next/image";
export default function bt(props) {
    return (
        <Link href={props.link} target="_blank" passHref className="text-left">
            <button role="button" className=" btn font-bloggerBold py-1.5 pt-2">
                <span>{props.text}</span>
                <span className="arrow-container">
                    <Image priority src={arrow} alt="Arrow" />
                </span>
            </button>
        </Link>
    );
}


