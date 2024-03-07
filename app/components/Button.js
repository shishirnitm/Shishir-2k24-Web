import "./Button.css"
import Link from "next/link";

export default function Button(props){
    return (
        <Link href={props.link} target="_blank" passHref className="text-left">
            <button role="button" className="btn font-bloggerBold py-1.5">{props.text}</button>
        </Link>
    );
}


