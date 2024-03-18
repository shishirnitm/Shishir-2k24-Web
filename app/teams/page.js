import React from 'react';
import Image from "next/image";
import backButton from "../../public/back-button.svg"
import "./teams.css"

const page = () => {
    return (
        <>
            <Image
                src={backButton}
                alt="back button"
                width="0"
                height="0"
                sizes="100vw"
                className="w-[10vw] h-auto my-10 mx-8" />
            <div className="flex flex-col text-[#E03932] mt-5 px-5">
                <div className=" textStroke ">Meet the Teams Behind</div>
                <div className=" font-bernier text-9xl ">Shishir</div>
                <div className="white-box mt-5">
                    <div className=" font-blogger text-[#186B80] text-[20px] ">Meet the <span className="font-bloggerBold">hardworking crew</span> behind <span className="font-bloggerBold">Shishir</span> that made this event possible!</div>
                    <div className=" font-blogger text-[#186B80] text-[20px] ">Let&apos;s say hello to some of the people from the land of - <span className="font-bloggerBold">behind the scenes~</span></div>
                </div>

                <div className="yellowButton">free registration</div>
            </div>
        </>
    )
}

export default page;