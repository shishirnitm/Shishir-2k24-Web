"use client"
import "./events.css";
import EventCard from "./components/eventCard";
import {allEvents} from "./components/events"
import { useState } from "react";

export default function Events() {
  const[category,setCategory] = useState("all")
  return (
    <>
      <div className="background bg-[#FDF6E9] h-full w-screen flex flex-col items-center ">
        <div className="flex justify-center textStroke w-5/6 h-36 mt-20
        sm:h-20
        xl:h-36">
          <div className="w-80 text-5xl
          sm:w-full sm:text-center sm:text-6xl
          xl:text-8xl">EXPLORE THE SHISHIR EVENTS !
          </div>
        </div>
        <div className="flex justify-center font-bernier text-[#E03932] text-[42px] w-5/6 text-center
        sm:w-[80vw] sm:text-7xl xl:text-center xl:text-8xl">
            <div className="w-full">FREE AND EXCLUSIVE</div>
        </div>
        <div className="border-[1px] w-80 h-40 border-black mt-10 flex flex-col items-center
        sm:w-[45vw] xl:h-20">
          <div className="h-2/5 flex items-center text-xl">The four types of events are:</div>
          <div className="w-11/12 h-3/5 border-t-[1px] border-black flex flex-wrap py-2 gap-x-2 gap-y-1">
            <div className="yellowButton">free registration</div>
            <div className="yellowButton">exclusive entry</div>
            <div className="yellowButton">free for all</div>
            <div className="yellowButton">registration</div>
          </div>
        </div>
        <div className="border-dotted border-y-4 border-[#4EB7B4] w-full h-8 mt-10"></div>
        <div className="flex justify-center font-bernier text-justify text-[#E03932] text-[32px] w-5/6 mt-10
        sm:w-[80vw]">
            <div className="w-80
            sm:w-[80vw] sm:text-center sm:text-4xl xl:text-7xl">EVENTS ARE DISPLAYED BY POPULARITY!</div>
        </div>
        <div className="flex flex-col border-[1px] border-black bg-white w-5/6 h-44 my-8 px-4 items-center
        sm:h-32
        lg:h-28">
          <div className="flex w-full my-2">
            <div className=" w-1/2 font-blogger">event categories</div>
            <div className=" w-1/2 text-end"><u>filters</u></div>
          </div>
          <div className="flex flex-wrap w-full gap-x-2 space-y-2 place-items-start text-center text-sm
          xl:text-xl">
            {category=="all" ? <div className="rounded-2xl border-[1px] bg-[#F5E074] border-white text-white font-blogger px-2 h-7 self-end"><button onClick={()=>{setCategory("all")}}>All</button></div> 
            : <div className="rounded-2xl border-[1px] border-black font-blogger px-2 h-7 self-end"><button onClick={()=>{setCategory("all")}}>All</button></div>}

            {category=="Main"? <div className="rounded-2xl border-[1px] bg-[#F5E074] border-white text-white font-blogger px-2 h-7"><button onClick={()=>{setCategory("Main")}}>Main</button></div>
            :<div className="rounded-2xl border-[1px] border-black font-blogger px-2 h-7"><button onClick={()=>{setCategory("Main")}}>Main</button></div>}

            {category=="Music"? <div className="rounded-2xl border-[1px] bg-[#F5E074] border-white text-white font-blogger px-2 h-7"><button onClick={()=>{setCategory("Music")}}>Music</button></div>
            :<div className="rounded-2xl border-[1px] border-black font-blogger px-2 h-7"><button onClick={()=>{setCategory("Music")}}>Music</button></div>}

            {category=="EBSB"? <div className="rounded-2xl border-[1px] bg-[#F5E074] border-white text-white font-blogger px-2 h-7 col-span-2"><button onClick={()=>{setCategory("EBSB")}}>EBSB Club</button></div>
            :<div className="rounded-2xl border-[1px] border-black font-blogger px-2 h-7 col-span-2"><button onClick={()=>{setCategory("EBSB")}}>EBSB Club</button></div>}

            {category=="Literary"? <div className="rounded-2xl border-[1px] bg-[#F5E074] border-white text-white font-blogger px-2 h-7 col-span-2"><button onClick={()=>{setCategory("Literary")}}>Literary Club</button></div>
            :<div className="rounded-2xl border-[1px] border-black font-blogger px-2 h-7 col-span-2"><button onClick={()=>{setCategory("Literary")}}>Literary Club</button></div>}

            {category=="Krigg"? <div className="rounded-2xl border-[1px] bg-[#F5E074] border-white text-white font-blogger px-2 h-7"><button onClick={()=>{setCategory("Krigg")}}>Krigg</button></div>
            :<div className="rounded-2xl border-[1px] border-black font-blogger px-2 h-7"><button onClick={()=>{setCategory("Krigg")}}>Krigg</button></div>}

            {/* {category=="TF"? <div className="rounded-2xl border-[1px] bg-[#F5E074] border-white text-white font-blogger px-2 h-7 col-span-2"><button onClick={()=>{setCategory("TF")}}>Task Force Club</button></div>
            :<div className="rounded-2xl border-[1px] border-black font-blogger px-2 h-7 col-span-2"><button onClick={()=>{setCategory("TF")}}>Task Force Club</button></div>} */}

            {category=="DandD"? <div className="rounded-2xl border-[1px] bg-[#F5E074] border-white text-white font-blogger px-2 h-7 col-span-2"><button onClick={()=>{setCategory("DandD")}}>Dance and Drama Club</button></div>
            :<div className="rounded-2xl border-[1px] border-black font-blogger px-2 h-7 col-span-2"><button onClick={()=>{setCategory("DandD")}}>Dance and Drama Club</button></div>}

            {category=="Photography"? <div className="rounded-2xl border-[1px] bg-[#F5E074] border-white text-white font-blogger px-2 h-7 col-span-2"><button onClick={()=>{setCategory("Photography")}}>Photography Club</button></div>
            :<div className="rounded-2xl border-[1px] border-black font-blogger px-2 h-7 col-span-2"><button onClick={()=>{setCategory("Photography")}}>Photography Club</button></div>}
          </div>
        </div>

        {category=="all" && (
        <div className="font-bernier text-3xl pb-5
        xl:text-7xl">ALL EVENTS</div>
        )}

        {category=="Music" && (
        <div className="font-bernier text-3xl pb-5
        xl:text-7xl">MUSIC CLUB EVENTS</div>
        )}
        
        {category=="Main" && (
        <div className="font-bernier text-3xl pb-5
        xl:text-7xl">MAIN EVENTS</div>
        )}
        
        {category=="EBSB" && (
        <div className="font-bernier text-3xl pb-5
        xl:text-7xl">EBSB CLUB EVENTS</div>
        )}
        
        {category=="Literary" && (
        <div className="font-bernier text-3xl pb-5
        xl:text-7xl">LITERARY CLUB EVENTS</div>
        )}
        
        {category=="Krigg" && (
        <div className="font-bernier text-3xl pb-5
        xl:text-7xl">KRIGG EVENTS</div>
        )}
        
        {category=="TF" && (
        <div className="font-bernier text-3xl pb-5
        xl:text-7xl">TASK FORCE CLUB EVENTS</div>
        )}
        
        {category=="DandD" && (
        <div className="font-bernier text-3xl pb-5
        xl:text-7xl">DANCE AND DRAMA CLUB EVENTS</div>
        )}
        
        {category=="Photography" && (
        <div className="font-bernier text-3xl pb-5
        xl:text-7xl">PHOTOGRAPHY CLUB EVENTS</div>
        )}

        <div className="flex flex-col w-5/6 space-y-5">
          {category=="all" && (allEvents.map((prop)=>(
            <EventCard key={prop.eName} eName={prop.eName} eTime={prop.eTime} eRule={prop.eRule} eLink={prop.eLink} eDesc={prop.eDesc} eType={prop.eType} eVenue={prop.eVenue} eDay={prop.eDay}/>
          )))}
          {category=="Main" && (allEvents.map((prop)=>(
            prop.category=="Main"&&(<EventCard key={prop.eName} eName={prop.eName} eTime={prop.eTime} eRule={prop.eRule} eLink={prop.eLink} eDesc={prop.eDesc} eType={prop.eType} eVenue={prop.eVenue} eDay={prop.eDay}/>)
          )))}
          {category=="Music" && (allEvents.map((prop)=>(
            prop.category=="Music"&&(<EventCard key={prop.eName} eName={prop.eName} eTime={prop.eTime} eRule={prop.eRule} eLink={prop.eLink} eDesc={prop.eDesc} eType={prop.eType} eVenue={prop.eVenue} eDay={prop.eDay}/>)
          )))}
          {category=="Krigg" && (allEvents.map((prop)=>(
            prop.category=="Krigg"&&(<EventCard key={prop.eName} eName={prop.eName} eTime={prop.eTime} eRule={prop.eRule} eLink={prop.eLink} eDesc={prop.eDesc} eType={prop.eType} eVenue={prop.eVenue} eDay={prop.eDay}/>)
          )))}
          {category=="Literary" && (allEvents.map((prop)=>(
            prop.category=="Literary"&&(<EventCard key={prop.eName} eName={prop.eName} eTime={prop.eTime} eRule={prop.eRule} eLink={prop.eLink} eDesc={prop.eDesc} eType={prop.eType} eVenue={prop.eVenue} eDay={prop.eDay}/>)
          )))}
          {category=="Gaming" && (allEvents.map((prop)=>(
            prop.category=="Gaming"&&(<EventCard key={prop.eName} eName={prop.eName} eTime={prop.eTime} eRule={prop.eRule} eLink={prop.eLink} eDesc={prop.eDesc} eType={prop.eType} eVenue={prop.eVenue} eDay={prop.eDay}/>)
          )))}
          {category=="EBSB" && (allEvents.map((prop)=>(
            prop.category=="EBSB"&&(<EventCard key={prop.eName} eName={prop.eName} eTime={prop.eTime} eRule={prop.eRule} eLink={prop.eLink} eDesc={prop.eDesc} eType={prop.eType} eVenue={prop.eVenue} eDay={prop.eDay}/>)
          )))}
          {/* {category=="TF" && (allEvents.map((prop)=>(
            prop.category=="TF"&&(<EventCard key={prop.eName} eName={prop.eName} eTime={prop.eTime} eRule={prop.eRule} eLink={prop.eLink} eDesc={prop.eDesc} eType={prop.eType} eVenue={prop.eVenue} eDay={prop.eDay}/>)
          )))} */}
          {category=="DandD" && (allEvents.map((prop)=>(
            prop.category=="DandD"&&(<EventCard key={prop.eName} eName={prop.eName} eTime={prop.eTime} eRule={prop.eRule} eLink={prop.eLink} eDesc={prop.eDesc} eType={prop.eType} eVenue={prop.eVenue} eDay={prop.eDay}/>)
          )))}
          {category=="Photography" && (allEvents.map((prop)=>(
            prop.category=="Photography"&&(<EventCard key={prop.eName} eName={prop.eName} eTime={prop.eTime} eRule={prop.eRule} eLink={prop.eLink} eDesc={prop.eDesc} eType={prop.eType} eVenue={prop.eVenue} eDay={prop.eDay}/>)
          )))}
        </div>
        <div className="h-40"></div>
      </div>
    </>
  );
}
