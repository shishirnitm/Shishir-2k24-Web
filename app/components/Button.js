import "./Button.css"
import Link from "next/link";
import arrow from "../../public/text/Polygon7.svg";
import Image from "next/image";


export default function Button(props) {
    return (
        <Link href={props.link} target="_blank" passHref className="lg:text-center text-left mb-2">
            <button role="button" className=" btn font-bloggerBold py-1.5 pt-2">
                <span>{props.text}</span>
                <span className="arrow-container">
                    <Image priority src={arrow} alt="Arrow" />
                </span>
            </button>
        </Link>
    );
}


