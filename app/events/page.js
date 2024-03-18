"use client";
import "./events.css";
import EventCard from "./components/eventCard";
export default function Events() {
  const allEvents = [ 
    {eName:"Panache", 
    eDesc:"At the runway showdown, students from diverse backgrounds compete fiercely, strutting with confidence to captivate the audience and judges.", 
    eTime:"TBA", 
    eDay:"Daily",
    eVenue:"Pandal",
    eType:"Register", 
    eRule:"https://docs.google.com/document/d/1pvjSEPHQi8cI_tFzj9ZV1_fAgLYLXSGf-e7xpfzEsAQ" ,
    eLink:"https://docs.google.com/forms/d/1-AsqBBHDRzm7qyZwLiJH82wVu1hZaRPi3Bu01cS9Kw4"},
    
    
    {eName:"Cultural Exibition", 
    eDesc:"A celebration of culture providing a lens into the diversity, heritage, and creativity of different cultures. Students exhibit artifacts, crafts, traditions, arts and customs that represent their cultural background.", 
    eTime:"10:00 - 16:00", 
    eDay:"Daily",
    eVenue:"On-campus Stalls",
    eType:"Register", 
    eRule: "https://drive.google.com/file/d/1v0E1Iln72s7U9Xod34bFEJVU6yF_lrcF/view?usp=drive_link", 
    eLink:"https://docs.google.com/forms/d/e/1FAIpQLSe_NLNNNQT0ZaLHKf82YRO-ujXWDJf9dVoqpw4yQjWqw_L_rg/viewform?usp=sf_link"},
    
    
    {eName:"Food Fest", 
    eDesc:"Savour the Flavour: Join us for a feast of delectable delights at the ultimate Food Fest - where taste meets tradition in every bite.", 
    eTime:"10:00 - 16:00", 
    eDay:"Daily",
    eVenue:"On-campus Stalls",
    eType:"Register", 
    eRule:"https://drive.google.com/file/d/1v0fw7EkJeM_g-q0QYhTrm9AhP1rhAjhw/view?usp=drive_link" , 
    eLink:"https://docs.google.com/forms/d/e/1FAIpQLSczwSLtkojjFykl5C_XUmaMMElk4SM44Y5vhmwfQUa_rzd4aA/viewform?usp=sf_link"},
        
    
    {eName:"Battle of the Bands", 
    eDesc:"Get ready for the ultimate clash of musical talent at the Battle of the Bands! College students armed with guitars, drums, and boundless energy will light up the stage with their unique sounds.", 
    eTime:"TBA", 
    eDay:"TBA",
    eVenue:"Pandal",
    eType:"Register", 
    eRule:"https://docs.google.com/document/d/19ujbhvh-RWhsT7PhAAA6LQ_MXHrPZQ-QrzX7reswLBQ/edit?usp=drive_link" ,
    eLink:"https://docs.google.com/forms/d/1edCZy1w6DyS7v489WJLtzP69cISXiF3OO39mW-g0zAs"},
    
    
    {eName:"Symphony", 
    eDesc:"Symphony is a Music competition event in singing and instrumental performances open to all students.  ", 
    eTime:"29th March", 
    eType:"Register", 
    eRule:"https://docs.google.com/document/d/19ujbhvh-RWhsT7PhAAA6LQ_MXHrPZQ-QrzX7reswLBQ" ,
    eLink:"https://docs.google.com/forms/d/1ZSGP6z1AXi25kNSmjBJxqYsSscIm3WD8pggKsplyyf0"},

    
    {eName:"Shimmer", 
    eDesc:"Freshers bring youthful energy and creativity to the stage, showcasing their individuality with nervous excitement. Dressed to impress in trendy outfits, they exude confidence, each aiming to leave a lasting impression.", 
    eTime:"TBA", 
    eType:"Register",
    eRule:"https://drive.google.com/file/d/11Dkl8qWrK-T09EnJvXC8udV_23M7Mi4f/view?usp=drive_link" ,
    eLink:""},
    
    {eName:"BGMI", 
    eDesc:"Compete in Battle Grounds Mobile India to claim the title of the best team!", 
    eTime:"TBA", 
    eType:"Register", 
    eRule:"https://drive.google.com/file/d/1c7Zd7B6dtAF94QE858pHnosOCQqOJRVK/view?usp=drive_link" , 
    eLink:"https://docs.google.com/forms/d/1NrAeFo95HouDi9QMxiW4b--AUPcSPT1htcTPcqIrA2E"},
    
    
    {eName:"Valorant", 
    eDesc:"Tactics, strategy, aim and teamwork. Show yours skills and your composure in the Squad-based Tactical Shooter Valorant.", 
    eTime:"TBA", 
    eType:"Register", 
    eRule:"https://drive.google.com/file/d/1uToud7TRkrAikPY4ADTjOs9prnfm3-nd/view?usp=drive_link" ,
    eLink:"https://docs.google.com/forms/d/1LAeVQh-WPL2qxJroKADj0ps8cuqM_Nn2VTE8Zbe7NX0"},
    
    
    {eName:"Krigg", 
    eDesc:"KRIGG events bring joyous energy and camaraderie to campus, offering a playful escape from academic rigors. With themed games and friendly competitions, students bond over laughter and merriment, fostering connections beyond the classroom.", 
    eTime:"TBA", 
    eType:"Register", 
    eRule:"" ,
    eLink:""},
  ]
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
        {/* <div className="flex border-[1px] border-black bg-white w-5/6 h-12 my-8 px-4 items-center">
          <div className=" w-1/2 font-blogger">showing all events</div>
          <div className=" w-1/2 text-end"><u>filters</u></div>
        </div> */}
        <div className="flex flex-col w-5/6 space-y-5">
          {allEvents.map((prop)=>(
            <EventCard key={prop.eName} eName={prop.eName} eTime={prop.eTime} eRule={prop.eRule} eLink={prop.eLink} eDesc={prop.eDesc} eType={prop.eType} eVenue={prop.eVenue} eDay={prop.eDay}/>
          ))}
        </div>
        
      </div>
    </>
  );
}
