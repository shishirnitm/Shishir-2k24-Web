import "../events.css";

export default function EventCard(props) {
  return (
    <>
        <div className=" h-48 w-screen">
        <div className="absolute w-5/6 h-44 bg-black translate-x-2 translate-y-2 rounded-sm">
            <div className="relative flex flex-col h-44 border-black border-[1px] rounded-sm bg-white -translate-x-2 -translate-y-2 ">
                <div className="flex h-1/3 px-3">
                    <div className="font-bloggerBold text-[22px] self-end">{props.eName}</div>
                    <div className="border-dotted border-b-2 border-black w-auto grow mb-2"></div>
                    <div className="font-blogger text-lg self-end">{props.eTime}</div>
                </div>
                <div className="flex h-1/3 px-3">
                    <div className="font-blogger text-lg">{props.eDesc}</div>
                </div>
                <div className="flex h-1/3 px-3 items-start pt-1">
                    <div className="w-1/2"><div className="yellowButton">{props.eButton}</div></div>
                    <div className="w-1/2"><div className="flex justify-end font-bloggerBold">
                        <div className="flex -translate-x-2">
                        learn more 
                        <div className="translate-x-2 translate-y-1">
                            <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group 1000004275">
                            <path id="Line 12" d="M2 2L9.41551 9.41551" stroke="#404040" stroke-width="3" stroke-linecap="round"/>
                            <path id="Line 13" d="M2.16272 17L9.57823 9.58449" stroke="#404040" stroke-width="3" stroke-linecap="round"/>
                            </g>
                            </svg>
                        </div>
                        </div>
                        
                    </div>
                </div>

                </div>
            </div>
        </div>
        </div>
    </>
  );
}
