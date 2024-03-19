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
        <div className="flex justify-center textStroke w-5/6 h-36 mt-20">
          <div className="w-80">EXPLORE THE SHISHIR EVENTS !</div>
        </div>
        <div className="flex justify-center font-bernier text-justify text-[#E03932] text-[42px] w-5/6 ">
            <div className="w-80">FREE AND EXCLUSIVE</div>
        </div>
        <div className="border-[1px] w-80 h-40 border-black mt-10 flex flex-col items-center">
          <div className="h-2/5">The four types of events are:</div>
          <div className="w-11/12 h-3/5 border-t-[1px] border-black flex flex-wrap py-2 gap-x-2 gap-y-1">
            <div className="yellowButton">free registration</div>
            <div className="yellowButton">exclusive entry</div>
            <div className="yellowButton">free for all</div>
            <div className="yellowButton">registration</div>
          </div>
        </div>
        <div className="border-dotted border-y-4 border-[#4EB7B4] w-full h-8 mt-10"></div>
        <div className="flex justify-center font-bernier text-justify text-[#E03932] text-[32px] w-5/6 mt-10">
            <div className="w-80">EVENTS ARE DISPLAYED BY POPULARITY!</div>
        </div>
        <div className="flex flex-col border-[1px] border-black bg-white w-5/6 h-44 my-8 px-4 items-center">
          <div className="flex w-full my-2">
            <div className=" w-1/2 font-blogger">event categories</div>
            <div className=" w-1/2 text-end"><u>filters</u></div>
          </div>
          <div className="flex flex-wrap w-full gap-x-2 space-y-2 place-items-start text-center text-sm">
            <div className="rounded-2xl border-[1px] border-black font-blogger px-2 h-7 self-end"><button onClick={()=>{setCategory("all")}}>All</button></div>
            <div className="rounded-2xl border-[1px] border-black font-blogger px-2 h-7"><button onClick={()=>{setCategory("Main")}}>Main</button></div>
            <div className="rounded-2xl border-[1px] border-black font-blogger px-2 h-7"><button onClick={()=>{setCategory("Music")}}>Music</button></div>
            <div className="rounded-2xl border-[1px] border-black font-blogger px-2 h-7 col-span-2"><button onClick={()=>{setCategory("EBSB")}}>EBSB Club</button></div>
            <div className="rounded-2xl border-[1px] border-black font-blogger px-2 h-7 col-span-2"><button onClick={()=>{setCategory("Literary")}}>Literary Club</button></div>
            <div className="rounded-2xl border-[1px] border-black font-blogger px-2 h-7"><button onClick={()=>{setCategory("Krigg")}}>Krigg</button></div>
            <div className="rounded-2xl border-[1px] border-black font-blogger px-2 h-7 col-span-2"><button onClick={()=>{setCategory("TF")}}>Task Force Club</button></div>
            <div className="rounded-2xl border-[1px] border-black font-blogger px-2 h-7 col-span-2"><button onClick={()=>{setCategory("DandD")}}>Dance and Drama Club</button></div>
            <div className="rounded-2xl border-[1px] border-black font-blogger px-2 h-7 col-span-2"><button onClick={()=>{setCategory("Photography")}}>Photography Club</button></div>
          </div>
        </div>

        {category=="all" && (
        <div className="font-bernier text-3xl pb-5">ALL EVENTS</div>
        )}

        {category=="Music" && (
        <div className="font-bernier text-3xl pb-5">MUSIC CLUB EVENTS</div>
        )}
        
        {category=="Main" && (
        <div className="font-bernier text-3xl pb-5">MAIN EVENTS</div>
        )}
        
        {category=="EBSB" && (
        <div className="font-bernier text-3xl pb-5">EBSB CLUB EVENTS</div>
        )}
        
        {category=="Literary" && (
        <div className="font-bernier text-3xl pb-5">LITERARY CLUB EVENTS</div>
        )}
        
        {category=="Krigg" && (
        <div className="font-bernier text-3xl pb-5">KRIGG EVENTS</div>
        )}
        
        {category=="TF" && (
        <div className="font-bernier text-3xl pb-5">TASK FORCE CLUB EVENTS</div>
        )}
        
        {category=="DandD" && (
        <div className="font-bernier text-3xl pb-5">DANCE AND DRAMA CLUB EVENTS</div>
        )}
        
        {category=="Photography" && (
        <div className="font-bernier text-3xl pb-5">PHOTOGRAPHY CLUB EVENTS</div>
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
          {category=="TF" && (allEvents.map((prop)=>(
            prop.category=="TF"&&(<EventCard key={prop.eName} eName={prop.eName} eTime={prop.eTime} eRule={prop.eRule} eLink={prop.eLink} eDesc={prop.eDesc} eType={prop.eType} eVenue={prop.eVenue} eDay={prop.eDay}/>)
          )))}
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
