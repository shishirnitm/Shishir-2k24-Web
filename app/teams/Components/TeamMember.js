import Image from 'next/image'
import Papa from "../../../public/Papasito.svg";



const TeamMember = (props) => {

  // console.log('Image source:', props.img);


  //For generating a random placeholder image. Didn't even need stackoverflow or anything for this. Made this on my own ;)
  let image = "/teams/Papa.jpeg";

  if(props.img == "guy"){
    let i = Math.floor(Math.random() * 35) + 1;
    image = `/teams/Placeholder/guys/guy_${i}.svg`
  }
  else if(props.img == "girl"){
    let i = Math.floor(Math.random() * 21) + 1;
    image = `/teams/Placeholder/girls/girl_${i}.svg`
  }

  return (
    <>
      {" "}
      <div className=' w-44 h-auto px-0'>
        <Image
          // priority
          src={ (props.img=="guy" || props.img=="girl") ? image : props.img}
          loading="lazy"
          width="0"
          height="0"
          sizes="100vw"
          className="h-full w-full object-cover"
          alt="Team Member photo"
        />
        <div className=' pl-1 text-left mt-2 font-blogger text-[#3f362b] text-2xl lg:text-xl lg:leading-snug '>{props.name}</div>
        <div className=' pl-1 text-left font-blogger opacity-70 text-[#3f362b] text-lg lg:text-base lg:leading-snug '>{props.position}</div>
        <div className=' pl-1 text-left font-blogger opacity-70 text-[#3f362b] text-lg lg:text-base lg:leading-snug '>{props.year}</div>
      </div>
    </>
  )
}

export default TeamMember;