'use client';
import Image from "next/image";
import Link from "next/link";

import backButton from "../../public/back-button.svg"
import "./teams.css"
import TeamMember from './Components/TeamMember';
import TeamHeader from './Components/TeamHeader';


import { useState, useRef } from "react";



// Please don't judge me by the repetitive lines of code I've written here...... I know, it looks noobie
// I wasn't paid to do this








const teams = {
    "coreTeam": [
        {
            "img": "/teams/Core/Mayo.jpeg",
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
            "img": "guy",
            "name": "Aidan",
            "position": "COORDINATOR",
            "year": "3RD YEAR CS"
        },
        {
            "img": "/teams/Core/Wanrapbok.jpeg",
            "name": "Wanrapbok",
            "position": "COORDINATOR",
            "year": "3RD YEAR EC"
        },
        {
            "img": "/teams/Core/Om_Prakash.jpeg",
            "name": "Om Prakash",
            "position": "CO-COORDINATOR",
            "year": "2ND YEAR ME"
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
            "position": "BACKEND MANAGER",
            "year": "3RD YEAR CS"
        }
    ],
    "design": [
        {
            "img": "guy",
            "name": "Vadan",
            "position": "HEAD",
            "year": "2ND YEAR ME"
        },
        {
            "img": "/teams/Design/Rai.jpeg",
            "name": "Rai Tripura",
            "position": "COORDINATOR",
            "year": "3RD YEAR CE"
        },
        {
            "img": "guy",
            "name": "Subhadeep",
            "position": "COORDINATOR",
            "year": "3RD YEAR EC"
        },
        {
            "img": "/teams/Design/Tiya.jpeg",
            "name": "Tiyangsen",
            "position": "CO-COORDINATOR",
            "year": "2ND YEAR ME"
        },
        {
            "img": "/teams/Design/Komune.jpeg",
            "name": "Komune",
            "position": "CO-COORDINATOR",
            "year": "2ND YEAR CE"
        }
    ],
    "publicity": [
        {
            "img": "guy",
            "name": "Kumar Gaurav",
            "position": "HEAD",
            "year": "4TH YEAR CE"
        },
        {
            "img": "guy",
            "name": "Wallam Rani",
            "position": "HEAD",
            "year": "4TH YEAR CS"
        },
        {
            "img": "guy",
            "name": "Anjani",
            "position": "COORDINATOR",
            "year": "3RD YEAR EC"
        },
        {
            "img": "guy",
            "name": "Saket Singh",
            "position": "COORDINATOR",
            "year": "3RD YEAR CE"
        },
        {
            "img": "guy",
            "name": "Medaki",
            "position": "COORDINATOR",
            "year": "3RD YEAR ME"
        },
        {
            "img": "guy",
            "name": "Achintya",
            "position": "COORDINATOR",
            "year": "3RD YEAR CS"
        },
        {
            "img": "guy",
            "name": "Neelkantha",
            "position": "CO-COORDINATOR",
            "year": "2ND YEAR CE"
        },
        {
            "img": "guy",
            "name": "Dip Kundu",
            "position": "CO-COORDINATOR",
            "year": "2ND YEAR CE"
        }
    ],
    "sponsorship": [
        {
            "img": "guy",
            "name": "Kalpesh",
            "position": "HEAD",
            "year": "4TH YEAR CS"
        },
        {
            "img": "guy",
            "name": "Rohit",
            "position": "HEAD",
            "year": "4TH YEAR"
        },
        {
            "img": "guy",
            "name": "Kyle",
            "position": "HEAD",
            "year": "4TH YEAR EE"
        },
        {
            "img": "girl",
            "name": "Supriya",
            "position": "COORDINATOR",
            "year": "3RD YEAR CS"
        },
        {
            "img": "girl",
            "name": "Ananya",
            "position": "COORDINATOR",
            "year": "3RD YEAR CS"
        },
        {
            "img": "guy",
            "name": "Yongdo",
            "position": "COORDINATOR",
            "year": "3RD YEAR ME"
        },
        {
            "img": "guy",
            "name": "Arkibud",
            "position": "COORDINATOR",
            "year": "3RD YEAR CS"
        },
        {
            "img": "guy",
            "name": "Raj Kedia",
            "position": "COORDINATOR",
            "year": "3RD YEAR EC"
        },
        {
            "img": "girl",
            "name": "Aroma",
            "position": "CO-COORDINATOR",
            "year": "2ND YEAR EC"
        },
        {
            "img": "guy",
            "name": "Prem",
            "position": "CO-COORDINATOR",
            "year": "2ND YEAR CS"
        },
        {
            "img": "guy",
            "name": "Manikanta",
            "position": "CO-COORDINATOR",
            "year": "2ND YEAR EC"
        }
    ],
    "event_mgt": [
        {
            "img": "girl",
            "name": "Olivia",
            "position": "HEAD",
            "year": "4TH YEAR EC"
        },
        {
            "img": "guy",
            "name": "Sai Upendhar ",
            "position": "HEAD",
            "year": "4TH YEAR CE"
        },
        {
            "img": "guy",
            "name": "Ashutosh",
            "position": "COORDINATOR",
            "year": "3RD YEAR EE"
        },
        {
            "img": "guy",
            "name": "Avinash",
            "position": "COORDINATOR",
            "year": "3RD YEAR CS"
        },
        {
            "img": "guy",
            "name": "Dhiraj",
            "position": "COORDINATOR",
            "year": "3RD YEAR EC"
        },
        {
            "img": "guy",
            "name": "Kupar",
            "position": "CO-COORDINATOR",
            "year": "2ND YEAR ME"
        },
        {
            "img": "guy",
            "name": "Mrinoy",
            "position": "CO-COORDINATOR",
            "year": "2ND YEAR CS"
        },
        {
            "img": "guy",
            "name": "Manish",
            "position": "CO-COORDINATOR",
            "year": "2ND YEAR CS"
        }
    ],
    "stage_mgt": [
        {
            "img": "guy",
            "name": "Nishant",
            "position": "HEAD",
            "year": "4TH YEAR CS"
        },
        {
            "img": "girl",
            "name": "Meba",
            "position": "HEAD",
            "year": "4TH YEAR CS"
        },  
        {
            "img": "guy",
            "name": "Sojib",
            "position": "COORDINATOR",
            "year": "3RD YEAR CE"
        },
        {
            "img": "guy",
            "name": "P.Dhanunjay",
            "position": "COORDINATOR",
            "year": "3RD YEAR ME"
        },
        {
            "img": "guy",
            "name": "Rahul",
            "position": "CO-COORDINATOR",
            "year": "2ND YEAR CE"
        },
        {
            "img": "guy",
            "name": "Avinash",
            "position": "CO-COORDINATOR",
            "year": "2ND YEAR CS"
        }
    ],
    "hospitality": [
        {
            "img": "girl",
            "name": "K.Sammi",
            "position": "HEAD",
            "year": "4TH YEAR ME"
        },  
        {
            "img": "guy",
            "name": "Rathod",
            "position": "HEAD",
            "year": "4TH YEAR"
        },
        {
            "img": "guy",
            "name": "Charan",
            "position": "HEAD",
            "year": "4TH YEAR"
        },  
        {
            "img": "girl",
            "name": "Samika",
            "position": "COORDINATOR",
            "year": "3RD YEAR EE"
        },
        {
            "img": "girl",
            "name": "Purlemla ",
            "position": "COORDINATOR",
            "year": "3RD YEAR CE"
        },
        {
            "img": "girl",
            "name": "Iahunshisha ",
            "position": "COORDINATOR",
            "year": "3RD YEAR"
        },
        {
            "img": "guy",
            "name": "Debashish",
            "position": "CO-COORDINATOR",
            "year": "2ND YEAR EC"
        }
    ],
    "food_comm": [
        {
            "img": "guy",
            "name": "Banteilang",
            "position": "HEAD",
            "year": "4TH YEAR CS"
        },  
        {
            "img": "guy",
            "name": "Randheer",
            "position": "HEAD",
            "year": "4TH YEAR"
        },  
        {
            "img": "guy",
            "name": "Rahul",
            "position": "HEAD",
            "year": "4TH YEAR"
        },
        {
            "img": "guy",
            "name": "Penugurthi",
            "position": "COORDINATOR",
            "year": "3RD YEAR"
        },
        {
            "img": "guy",
            "name": "Nimakuri ",
            "position": "COORDINATOR",
            "year": "3RD YEAR"
        }
    ],
    "security": [
        {
            "img": "guy",
            "name": "Mebanjop",
            "position": "HEAD",
            "year": "4TH YEAR CE"
        },  
        {
            "img": "guy",
            "name": "Skhembor",
            "position": "HEAD",
            "year": "4TH YEAR CS"
        },
        {
            "img": "guy",
            "name": "Klusborning",
            "position": "HEAD",
            "year": "4TH YEAR EE"
        },  
        {
            "img": "guy",
            "name": "Nangsan",
            "position": "COORDINATOR",
            "year": "3RD YEAR CS"
        },
        {
            "img": "guy",
            "name": "Marbhahki",
            "position": "COORDINATOR",
            "year": "3RD YEAR EC"
        },
        {
            "img": "guy",
            "name": "Dapmain",
            "position": "COORDINATOR",
            "year": "3RD YEAR CE"
        }
    ]
}









const Teams = () => {


    const [filter, setFilter] = useState("all");



    // Team Refs
    const sacTeam = useRef(null);
    const coreTeam = useRef(null);
    const webTeam = useRef(null);
    const designTeam = useRef(null);
    const publicityTeam = useRef(null);
    const sponsTeam = useRef(null);
    const eventTeam = useRef(null);
    const stageTeam = useRef(null);
    const hospTeam = useRef(null);
    const foodTeam = useRef(null);
    const securityTeam = useRef(null);





    const handleButtonClick = (e) => {
        const button = e.target;
        const buttonInnerHTML = e.target.innerHTML;
        setFilter(buttonInnerHTML);

        if (button.classList.contains('filter-active')) {
            button.classList.remove('filter-active');
            setFilter('');
        } else {

            document.querySelectorAll('.yellowButton').forEach(btn => {
                btn.classList.remove('filter-active');
            });


            button.classList.add('filter-active');
            setFilter(buttonInnerHTML);
        }
    };


    const handleNext = (teamRef) => {
        if (teamRef.current) {
            teamRef.current.scrollTo({
                left: teamRef.current.scrollLeft + 200,
                behavior: 'smooth',
            });
        }
    };

    const handlePrev = (teamRef) => {
        if (teamRef.current) {
            teamRef.current.scrollTo({
                left: teamRef.current.scrollLeft - 200,
                behavior: 'smooth',
            });
        }
    };


        return (
        <div className="overflow-hidden">
            <Link 
                href="/"
                passHref
                className=""
            >
                <Image
                    src={backButton}
                    alt="back button"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className=" w-[10vw] lg:w-[4vw] h-auto lg:my-5 my-10 mx-8"
                />
            </Link>
            <div className=' w-screen pb-20 lg:text-center lg:px-10'>
                <div className="flex flex-col text-[#E03932] mt-5 px-5">
                    <div className=" textStroke ">Meet the</div>
                    <div className=" textStroke ">Teams Behind</div>
                    <div className=" font-bernier lg:text-[200px] text-9xl ">Shishir</div>
                    <div className="white-box mt-5">
                        <div className=" font-blogger text-[#186B80] text-[20px] lg:text-2xl">Meet the <span className="font-bloggerBold">hardworking crew</span> behind <span className="font-bloggerBold">Shishir</span> that made this event possible!</div>
                        <div className=" font-blogger text-[#186B80] text-[20px] lg:text-2xl">Let&apos;s say hello to some of the people from the land of - <span className="font-bloggerBold">behind the scenes~</span></div>
                    </div>

                </div>

                <div className="mt-10">
                    <div className=" team flex w-screen overflow-x-scroll pr-5" style={{ scrollbarWidth: 'none' }}>
                        <div className="yellowButton filter-active" onClick={handleButtonClick}>all</div>
                        <div className="yellowButton" onClick={handleButtonClick}>core team</div>
                        <div className="yellowButton" onClick={handleButtonClick}>web dev</div>
                        <div className="yellowButton" onClick={handleButtonClick}>management</div>
                        <div className="yellowButton" onClick={handleButtonClick}>design</div>
                        <div className="yellowButton" onClick={handleButtonClick}>publicity</div>
                        <div className="yellowButton" onClick={handleButtonClick}>sponsorship</div>
                        <div className="yellowButton" onClick={handleButtonClick}>hospitality</div>
                        <div className="yellowButton" onClick={handleButtonClick}>food committee</div>
                        <div className="yellowButton" onClick={handleButtonClick}>security</div>
                    </div>
                </div>


                {/* SAC Team */}
                {((filter == "all") || (filter == "sac")) && <div className="mt-10">
                    <TeamHeader teamName="SAC Cultural" onNext={() => handleNext(sacTeam)} onPrev={() => handlePrev(sacTeam)} />
                    <div className=" team flex w-screen overflow-x-scroll mt-5 pr-5 " style={{ scrollbarWidth: 'none' }} ref={sacTeam}>
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
                </div>}


                {/* Core Team */}
                {((filter == "all") || (filter == "core team")) && <div className="mt-10">
                    <TeamHeader teamName="Core Team" onNext={() => handleNext(coreTeam)} onPrev={() => handlePrev(coreTeam)} />
                    <div className=" team flex w-screen overflow-x-scroll mt-5 pr-5" style={{ scrollbarWidth: 'none' }} ref={coreTeam}>
                        {teams.coreTeam.map((img, index) => (
                            <div key={index} className=" pl-5">
                                <TeamMember
                                    key={index}
                                    // img={teams.coreTeam[index].img}
                                    img={teams.coreTeam[index].img}
                                    name={teams.coreTeam[index].name}
                                    position={teams.coreTeam[index].position}
                                    year={teams.coreTeam[index].year}
                                />
                            </div>
                        ))}
                    </div>
                </div>}


                {/* Web Dev Team */}
                {((filter == "all") || (filter == "web dev")) && <div className="mt-10">
                    <TeamHeader teamName="Web Dev" onNext={() => handleNext(webTeam)} onPrev={() => handlePrev(webTeam)} />
                    <div className=" team flex w-screen overflow-scroll mt-5 pr-5" style={{ scrollbarWidth: 'none' }} ref={webTeam}>
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
                </div>}


                {/* Design Team */}
                {((filter == "all") || (filter == "design")) && <div className="mt-10">
                    <TeamHeader teamName="Design" onNext={() => handleNext(designTeam)} onPrev={() => handlePrev(designTeam)} />
                    <div className=" team flex w-screen overflow-scroll mt-5 pr-5" style={{ scrollbarWidth: 'none' }} ref={designTeam}>
                        {teams.design.map((img, index) => (
                            <div key={index} className=" pl-5">
                                <TeamMember
                                    key={index}
                                    img={teams.design[index].img}
                                    name={teams.design[index].name}
                                    position={teams.design[index].position}
                                    year={teams.design[index].year}
                                />
                            </div>
                        ))}
                    </div>
                </div>}
                
                
                {/* Publicity Team */}
                {((filter == "all") || (filter == "publicity")) && <div className="mt-10">
                    <TeamHeader teamName="Publicity &amp; Social Media" onNext={() => handleNext(publicityTeam)} onPrev={() => handlePrev(publicityTeam)} />
                    <div className=" team flex w-screen overflow-scroll mt-5 pr-5" style={{ scrollbarWidth: 'none' }} ref={publicityTeam}>
                        {teams.publicity.map((img, index) => (
                            <div key={index} className=" pl-5">
                                <TeamMember
                                    key={index}
                                    img={teams.publicity[index].img}
                                    name={teams.publicity[index].name}
                                    position={teams.publicity[index].position}
                                    year={teams.publicity[index].year}
                                />
                            </div>
                        ))}
                    </div>
                </div>}
                
                
                {/* Sponsorship Team */}
                {((filter == "all") || (filter == "sponsorship")) && <div className="mt-10">
                    <TeamHeader teamName="Sponsorship &amp; Marketing" onNext={() => handleNext(sponsTeam)} onPrev={() => handlePrev(sponsTeam)} />
                    <div className=" team flex w-screen overflow-scroll mt-5 pr-5" style={{ scrollbarWidth: 'none' }} ref={sponsTeam}>
                        {teams.sponsorship.map((img, index) => (
                            <div key={index} className=" pl-5">
                                <TeamMember
                                    key={index}
                                    img={teams.sponsorship[index].img}
                                    name={teams.sponsorship[index].name}
                                    position={teams.sponsorship[index].position}
                                    year={teams.sponsorship[index].year}
                                />
                            </div>
                        ))}
                    </div>
                </div>}

                {/* Event Mgt Team */}
                {((filter == "all") || (filter == "management")) && <div className="mt-10">
                    <TeamHeader teamName="Event Management" onNext={() => handleNext(eventTeam)} onPrev={() => handlePrev(eventTeam)} />
                    <div className=" team flex w-screen overflow-scroll mt-5 pr-5" style={{ scrollbarWidth: 'none' }} ref={eventTeam}>
                        {teams.event_mgt.map((img, index) => (
                            <div key={index} className=" pl-5">
                                <TeamMember
                                    key={index}
                                    img={teams.event_mgt[index].img}
                                    name={teams.event_mgt[index].name}
                                    position={teams.event_mgt[index].position}
                                    year={teams.event_mgt[index].year}
                                />
                            </div>
                        ))}
                    </div>
                </div>}

                {/* Stage Mgt Team */}
                {((filter == "all") || (filter == "management")) && <div className="mt-10">
                    <TeamHeader teamName="Stage Management" onNext={() => handleNext(stageTeam)} onPrev={() => handlePrev(stageTeam)} />
                    <div className=" team flex w-screen overflow-scroll mt-5 pr-5" style={{ scrollbarWidth: 'none' }} ref={stageTeam}>
                        {teams.stage_mgt.map((img, index) => (
                            <div key={index} className=" pl-5">
                                <TeamMember
                                    key={index}
                                    img={teams.stage_mgt[index].img}
                                    name={teams.stage_mgt[index].name}
                                    position={teams.stage_mgt[index].position}
                                    year={teams.stage_mgt[index].year}
                                />
                            </div>
                        ))}
                    </div>
                </div>}

                {/* Hospitality Team */}
                {((filter == "all") || (filter == "hospitality")) && <div className="mt-10">
                    <TeamHeader teamName="Hospitality" onNext={() => handleNext(hospTeam)} onPrev={() => handlePrev(hospTeam)} />
                    <div className=" team flex w-screen overflow-scroll mt-5 pr-5" style={{ scrollbarWidth: 'none' }} ref={hospTeam}>
                        {teams.hospitality.map((img, index) => (
                            <div key={index} className=" pl-5">
                                <TeamMember
                                    key={index}
                                    img={teams.hospitality[index].img}
                                    name={teams.hospitality[index].name}
                                    position={teams.hospitality[index].position}
                                    year={teams.hospitality[index].year}
                                />
                            </div>
                        ))}
                    </div>
                </div>}

                {/* Food Committee Team */}
                {((filter == "all") || (filter == "food committee")) && <div className="mt-10">
                    <TeamHeader teamName="Food Committee" onNext={() => handleNext(foodTeam)} onPrev={() => handlePrev(foodTeam)} />
                    <div className=" team flex w-screen overflow-scroll mt-5 pr-5" style={{ scrollbarWidth: 'none' }} ref={foodTeam}>
                        {teams.food_comm.map((img, index) => (
                            <div key={index} className=" pl-5">
                                <TeamMember
                                    key={index}
                                    img={teams.food_comm[index].img}
                                    name={teams.food_comm[index].name}
                                    position={teams.food_comm[index].position}
                                    year={teams.food_comm[index].year}
                                />
                            </div>
                        ))}
                    </div>
                </div>}

                {/* Security Team */}
                {((filter == "all") || (filter == "security")) && <div className="mt-10">
                    <TeamHeader teamName="Security" onNext={() => handleNext(securityTeam)} onPrev={() => handlePrev(securityTeam)} />
                    <div className=" team flex w-screen overflow-scroll mt-5 pr-5" style={{ scrollbarWidth: 'none' }} ref={securityTeam}>
                        {teams.security.map((img, index) => (
                            <div key={index} className=" pl-5">
                                <TeamMember
                                    key={index}
                                    img={teams.security[index].img}
                                    name={teams.security[index].name}
                                    position={teams.security[index].position}
                                    year={teams.security[index].year}
                                />
                            </div>
                        ))}
                    </div>
                </div>}

            </div>
        </div>
        )
}

        export default Teams;