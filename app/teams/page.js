import Image from "next/image";
import backButton from "../../public/back-button.svg"
import "./teams.css"
import TeamMember from './Components/TeamMember';
import TeamHeader from './Components/TeamHeader';

// import { teams } from "./teamsData";
import Papa from "../../public/Papasito.svg";












const teams = {
    "coreTeam": [
        {
            "img": "/teams/Papa.jpeg",
            "name": "Mayo",
            "position": "HEAD",
            "year": "4TH YEAR ME"
        },
        {
            "img": "/teams/Core/Arilam.jpeg",
            "name": "Arilam",
            "position": "HEAD",
            "year": "4TH YEAR ME"
        },
        {
            "img": "/teams/Core/Prakhar.jpeg",
            "name": "Prakhar",
            "position": "HEAD",
            "year": "4TH YEAR EE"
        },
        {
            "img": "/teams/Papa.jpeg",
            "name": "Aidan",
            "position": "COORDINATOR",
            "year": "3RD YEAR CS"
        },
        {
            "img": "/teams/Core/Wanrapbok.jpeg",
            "name": "Wanrapbok",
            "position": "COORDINATOR",
            "year": "3RD YEAR EC"
        }
    ],
    "sac": [
        {
            "img": "/teams/SAC/Daemika.jpeg",
            "name": "Da E Mika",
            "position": "GS-1, CULTURAL",
            "year": "4th YEAR ME"
        },
        {
            "img": "/teams/SAC/Himanshu.jpeg",
            "name": "Himanshu",
            "position": "GS-2, CULTURAL",
            "year": "3RD YEAR CE"
        },
        {
            "img": "/teams/SAC/Ashvil.jpeg",
            "name": "Ashvil",
            "position": "MEMBER-1, CULTURAL",
            "year": "2ND YEAR CE"
        },
        {
            "img": "/teams/SAC/Satyajeet.jpeg",
            "name": "Satyajeet",
            "position": "MEMBER-2, CULTURAL",
            "year": "2ND YEAR EC"
        }
    ],
    "webDev": [
        {
            "img": "/teams/Web_Dev/Marjiba.jpeg",
            "name": "Marjiba",
            "position": "DESIGN LEAD",
            "year": "4TH YEAR CS"
        },
        {
            "img": "/teams/Web_Dev/Samuel.png",
            "name": "Samuel",
            "position": "LEAD DEVELOPER",
            "year": "4TH YEAR CS"
        },
        {
            "img": "/teams/Web_Dev/Isaiah.png",
            "name": "Isaiah",
            "position": "LEAD DEVELOPER",
            "year": "4TH YEAR CS"
        },
        {
            "img": "/teams/Web_Dev/Kilio.png",
            "name": "Ronald",
            "position": "LEAD DEVELOPER",
            "year": "4TH YEAR CS"
        },
        {
            "img": "/teams/Web_Dev/Gaurav.png",
            "name": "Gaurav",
            "position": "LEAD DEVELOPER",
            "year": "2ND YEAR ME"
        },
        {
            "img": "/teams/Web_Dev/Saman.jpg",
            "name": "Saman",
            "position": "APPRENTICE",
            "year": "3RD YEAR CS"
        }
    ],
    "design": [
        {
            "img": "/teams/Papa.jpeg",
            "name": "Johnny Papasito",
            "position": "LEAD DEVELOPER",
            "year": "2ND YEAR ME"
        },
        {
            "img": "/teams/Papa.jpeg",
            "name": "Johnny Papasito",
            "position": "LEAD DEVELOPER",
            "year": "2ND YEAR ME"
        },
        {
            "img": "/teams/Papa.jpeg",
            "name": "Johnny Papasito",
            "position": "LEAD DEVELOPER",
            "year": "2ND YEAR ME"
        },
        {
            "img": "/teams/Papa.jpeg",
            "name": "Johnny Papasito",
            "position": "LEAD DEVELOPER",
            "year": "2ND YEAR ME"
        }
    ],
    "finance": [
        {
            "img": "/teams/Papa.jpeg",
            "name": "Johnny Papasito",
            "position": "LEAD DEVELOPER",
            "year": "2ND YEAR ME"
        },
        {
            "img": "/teams/Papa.jpeg",
            "name": "Johnny Papasito",
            "position": "LEAD DEVELOPER",
            "year": "2ND YEAR ME"
        },
        {
            "img": "/teams/Papa.jpeg",
            "name": "Johnny Papasito",
            "position": "LEAD DEVELOPER",
            "year": "2ND YEAR ME"
        },
        {
            "img": "/teams/Papa.jpeg",
            "name": "Johnny Papasito",
            "position": "LEAD DEVELOPER",
            "year": "2ND YEAR ME"
        }
    ],
    "marketing": [
        {
            "img": "/teams/Papa.jpeg",
            "name": "Johnny Papasito",
            "position": "LEAD DEVELOPER",
            "year": "2ND YEAR ME"
        },
        {
            "img": "/teams/Papa.jpeg",
            "name": "Johnny Papasito",
            "position": "LEAD DEVELOPER",
            "year": "2ND YEAR ME"
        },
        {
            "img": "/teams/Papa.jpeg",
            "name": "Johnny Papasito",
            "position": "LEAD DEVELOPER",
            "year": "2ND YEAR ME"
        },
        {
            "img": "/teams/Papa.jpeg",
            "name": "Johnny Papasito",
            "position": "LEAD DEVELOPER",
            "year": "2ND YEAR ME"
        }
    ]
}


















const page = () => {
    return (
        <>
            <Image
                src={backButton}
                alt="back button"
                width="0"
                height="0"
                sizes="100vw"
                className="w-[10vw] h-auto my-10 mx-8"
            />
            <div className=' w-screen pb-20'>
                <div className="flex flex-col text-[#E03932] mt-5 px-5">
                    <div className=" textStroke ">Meet the</div>
                    <div className=" textStroke ">Teams Behind</div>
                    <div className=" font-bernier text-9xl ">Shishir</div>
                    <div className="white-box mt-5">
                        <div className=" font-blogger text-[#186B80] text-[20px] ">Meet the <span className="font-bloggerBold">hardworking crew</span> behind <span className="font-bloggerBold">Shishir</span> that made this event possible!</div>
                        <div className=" font-blogger text-[#186B80] text-[20px] ">Let&apos;s say hello to some of the people from the land of - <span className="font-bloggerBold">behind the scenes~</span></div>
                    </div>

                </div>

                <div className="mt-10">
                    <div className=" team flex w-screen overflow-scroll ">
                        <div className="yellowButton">all</div>
                        <div className="yellowButton">core team</div>
                        <div className="yellowButton">management</div>
                        <div className="yellowButton">design</div>
                        <div className="yellowButton">wev dev</div>
                        <div className="yellowButton">finance</div>
                    </div>
                </div>


                {/* SAC Team */}
                <div className="mt-10">
                    <TeamHeader teamName="SAC" />
                    <div className=" team flex w-screen overflow-scroll mt-5 pr-5">
                        {teams.sac.map((img, index) => (
                            <div key={index} className=" pl-5">
                                <TeamMember
                                    className=""
                                    key={index}
                                    img={teams.sac[index].img}
                                    name={teams.sac[index].name}
                                    position={teams.sac[index].position}
                                    year={teams.sac[index].year}
                                />
                            </div>
                        ))}
                    </div>
                </div>


                {/* Core Team */}
                <div className="mt-10">
                    <TeamHeader teamName="Core Team" />
                    <div className=" team flex w-screen overflow-scroll mt-5 pr-5">
                        {teams.coreTeam.map((img, index) => (
                            <div key={index} className=" pl-5">
                                <TeamMember
                                    key={index}
                                    img={teams.coreTeam[index].img}
                                    name={teams.coreTeam[index].name}
                                    position={teams.coreTeam[index].position}
                                    year={teams.coreTeam[index].year}
                                />
                            </div>
                        ))}
                    </div>
                </div>


                {/* Web Dev Team */}
                <div className="mt-10">
                    <TeamHeader teamName="Web Dev" />
                    <div className=" team flex w-screen overflow-scroll mt-5 pr-5">
                        {teams.webDev.map((img, index) => (
                            <div key={index} className=" pl-5">
                                <TeamMember
                                    key={index}
                                    img={teams.webDev[index].img}
                                    name={teams.webDev[index].name}
                                    position={teams.webDev[index].position}
                                    year={teams.webDev[index].year}
                                />
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </>
    )
}

export default page;