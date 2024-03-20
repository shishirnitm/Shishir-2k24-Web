import "./mun.css"

import committeesData from "./committeesData.json";

import nitMunLogo from "../../public/mun/nitMunLogo.png";
import unLogo from "../../public/mun/unLogo.svg";
import unLogoText from "../../public/mun/unLogoText.svg";
import ipc from "../../public/mun/ipc.png";
import unsc from "../../public/mun/unsc.png";
import lokSabha from "../../public/mun/lokSabha.png";
import allLogos from "../../public/mun/allLogos.svg";

import Button from "../components/Button";
import Committee from "./components/committee";


import Image from "next/image";

export const metadata = {
    title: "NITM MUN | Shishir 2024 | Model United Nations",
    description: "Developed by the Web Dev Team at NITM (2024)",
};

const Mun = () => {
    return (
        <div className="">
            <Image
                src={nitMunLogo}
                alt="NITM MUN logo"
                width="0"
                height="0"
                sizes="100vw"
                className="lg:w-[7vw] w-[15vw] h-auto m-3 lg:m-5"
            />
            <div className="background bg-[#FDF6E9] h-full w-screen flex flex-col leading-tight ">
                <div className="lg:text-center lg:px-10 flex flex-col text-[#E03932] mt-5 ">
                    <div className=" font-bernier text-[40px] lg:text-9xl">NIT MEGHALAYA MUN</div>
                    <div className=" textStroke ">WHERE PASSION MEETS PURPOSE</div>
                    <div className=" font-bloggerBold text-[#186B80] text-[20px] my-4 lg:mb-10">Empowering Young Minds, Fostering Global Solutions.</div>
                    {/* <div className="text-center">Button here*</div> */}
                    <Button text="follow on instagram" link="https://www.instagram.com/nitm_mun/" />

                </div>

                <div className=" lg:px-10 mun-des mt-20">
                    <div className=" font-bernier text-[#E03932] text-[40px] text-justify leading-none ">Welcome to the NIT Meghalaya MUN!</div>
                    <div className=" font-bloggerBold text-[#186B80] text-[20px] my-4 ">Back in 2023, a group of spirited debate enthusiasts sparked the flame of the NITM MUN, and boy, did it shine bright! From its very inception, it was clear: this wasn&apos;t just any parliament; it was a spectacular spectacle like no other.</div>
                    <div className=" font-bloggerBold text-[#186B80] text-[20px] my-4 ">The success of our very first edition spoke volumes – with over 80 delegates diving headfirst into the fray, it was clear that something special was brewing. So here with are with the 2024 Ultimate Edition of NIT MUN</div>
                </div>

                <div className=" lg:px-10 mt-10 ">
                    <div className=" font-bernier text-[#E03932] text-[40px] text-justify leading-none ">NITM MUN X MMUN</div>
                    <div className=" font-blogger text-[#186B80] text-[20px] my-4 ">In collaboration with <span className="font-bloggerBold">MMUN</span>, recognized by the <span className="font-bloggerBold">UNHCR and UNIC, NITM MUN</span> aims to empower Meghalaya&apos;s youth, fostering leadership and advocating for global solutions.</div>
                    <div className=" font-bloggerBold text-[#186B80] text-[20px] my-4 ">Join us in our mission for change.</div>
                </div>

                <div className="lg:px-10 mt-10 ">
                    <div className=" font-bernier text-[#E03932] text-[40px] text-justify leading-none ">Committees Offered</div>
                    {committeesData.committees.map(ele => {
                        return (
                            <Committee
                                key={ele.key}
                                title={ele.title}
                                description={ele.description}
                            />
                        );
                    })}
                </div>

                <div className="lg:text-center lg:p-10 mun-follow mt-10">
                    <div className="lg:px-10 mb-2 lg:mb-5 font-blogger text-[20px] text-[#186B80]">Follow us on <span className=" font-bloggerBold">Instagram</span> for <span className=" font-bloggerBold">daily updates</span> and <span className=" font-bloggerBold">behind-the-scenes</span> glimpses!</div>
                    <Button text="follow on instagram" link="https://www.instagram.com/nitm_mun/" />
                    {/* <div className="text-[#E03932] text-center">Button here*</div> */}
                </div>


                <div className="all-logos hidden lg:flex justify-center mt-10">
                    <Image
                        priority
                        src={allLogos}
                        alt="Learn more about Committee"
                        className="h-[50vh] w-auto"
                    />
                </div>


                <div className="lg:hidden lg:px-10 mun-logos-1 mt-10">
                    <Image
                        priority
                        src={unLogo}
                        alt="Learn more about Committee"
                        className="h-28 w-auto"
                    />
                    <Image
                        priority
                        src={unLogoText}
                        alt="Learn more about Committee"
                        className="h-100 w-auto "
                    />
                </div>
                <div className="lg:hidden mun-logos-2 mt-4">
                    <Image
                        priority
                        src={ipc}
                        alt="Learn more about Committee"
                        className=""
                    />
                    <Image
                        priority
                        src={lokSabha}
                        alt="Learn more about Committee"
                        className="h-28 w-auto"
                    />
                    <Image
                        priority
                        src={unsc}
                        alt="Learn more about Committee"
                        className="h-28 w-auto"
                    />
                </div>

            </div>
        </div>
    );
}

export default Mun;