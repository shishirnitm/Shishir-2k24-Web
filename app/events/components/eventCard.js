import "../events.css";

export default function EventCard(props) {
  return (
    <>
        <div className="h-60">
        <div className="absolute w-5/6 h-60 bg-[#000000] translate-x-2 translate-y-2 rounded-sm z-10">
            <div className="eCard relative flex flex-col h-60 border-black border-[3px] rounded-sm background bg-white -translate-x-2 -translate-y-2 ">
                <div className="bg-[#F5E074] border-black border-b-[3px] flex h-1/5 px-3">
                    <div className="font-bloggerBold text-[24px] self-center">{props.eName}</div>
                </div>
                <div className="flex h-3/5 px-3">
                    <div className="font-blogger text-sm">{props.eDesc}</div>
                </div>
                <div className="flex h-1/5 px-3 items-start pt-1">
                    <div className="w-1/2"><a href={props.eLink}><button><div className="yellowButton" >{props.eType}</div></button></a></div>
                    <div className="w-1/2"><div className="flex justify-end font-bloggerBold">
                        <div className="flex -translate-x-2">
                            <a href={props.eRule}>learn more </a>                       
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
