import "../events.css";

export default function EventCard(props) {
  return (
    <>
        <div className=" h-80" key={props.eName}>
        <div className="absolute w-5/6 h-72 bg-[#000000] translate-x-2 translate-y-2 rounded-sm z-10">
            <div className="eCard relative flex flex-col h-72 border-black border-[3px] rounded-sm background bg-white -translate-x-2 -translate-y-2 ">
                <div className="bg-[#F5E074] border-black border-b-[3px] flex h-1/5 px-3">
                    <div className="font-bloggerBold text-[24px] self-center
                    xl:text-3xl">{props.eName}</div>
                </div>
                <div className="flex h-2/5 px-3 py-2">
                    <div className="font-blogger text-sm
                    sm:text-lg
                    lg:text-2xl">{props.eDesc}</div>
                </div>
                <div className="flex flex-col h-2/5 px-3 items-start pt-1">
                    <div className="flex h-1/2 font-blogger items-center space-x-2
                    sm:text-lg
                    xl:text-2xl">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group 1000004361">
                        <rect id="Rectangle 108" x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#3F362B" stroke-opacity="0.7" stroke-linecap="square" stroke-linejoin="round" stroke-dasharray="4 4"/>
                        <g id="Group">
                        <path id="Vector" d="M16 6C21.52 6 26 10.48 26 16C26 21.52 21.52 26 16 26C10.48 26 6 21.52 6 16C6 10.48 10.48 6 16 6ZM19.536 11.05L14.586 16L16 17.414L20.95 12.464L19.536 11.05Z" fill="#3F362B"/>
                        </g>
                        </g>
                        </svg>
                        {props.eTime}
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#3F362B" stroke-opacity="0.7" stroke-linecap="square" stroke-linejoin="round" stroke-dasharray="4 4"/>
                        <path d="M21.6569 20.1421L16 26L10.3431 20.1421C9.2243 18.9835 8.46239 17.5074 8.15371 15.9004C7.84504 14.2934 8.00347 12.6277 8.60898 11.114C9.21448 9.60025 10.2399 8.30643 11.5555 7.39614C12.871 6.48586 14.4178 6 16 6C17.5822 6 19.129 6.48586 20.4445 7.39614C21.7601 8.30643 22.7855 9.60025 23.391 11.114C23.9965 12.6277 24.155 14.2934 23.8463 15.9004C23.5376 17.5074 22.7757 18.9835 21.6569 20.1421ZM16 16.1251C16.4715 16.1251 16.9237 15.9312 17.2571 15.5859C17.5905 15.2407 17.7778 14.7724 17.7778 14.2842C17.7778 13.7959 17.5905 13.3277 17.2571 12.9825C16.9237 12.6372 16.4715 12.4433 16 12.4433C15.5285 12.4433 15.0763 12.6372 14.7429 12.9825C14.4095 13.3277 14.2222 13.7959 14.2222 14.2842C14.2222 14.7724 14.4095 15.2407 14.7429 15.5859C15.0763 15.9312 15.5285 16.1251 16 16.1251Z" fill="#3F362B"/>
                        </svg>
                        {props.eVenue}

                    </div>
                    <div className="flex items-start pt-1 h-1/2 w-full">
                        <div className="w-2/3 flex space-x-2">{props.eLink && (<a href={props.eLink}><button><div className="yellowButton" >{props.eType}</div></button></a>)}
                            <div className=" rounded-2xl px-2 border-black border-[1px] bg-white" >{props.eDay}</div>
                        </div>
                        <div className="w-1/3">
                            <div className="flex justify-end font-bloggerBold">
                                {props.eRule && (<div className="flex -translate-x-2">
                                <a href={props.eRule}>rulebook </a>                       
                                    <div className="translate-x-2 translate-y-1">
                                    <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 1000004275">
                                    <path id="Line 12" d="M2 2L9.41551 9.41551" stroke="#404040" stroke-width="3" stroke-linecap="round"/>
                                    <path id="Line 13" d="M2.16272 17L9.57823 9.58449" stroke="#404040" stroke-width="3" stroke-linecap="round"/>
                                    </g>
                                    </svg>
                                    </div>
                                </div>)}
                        
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
