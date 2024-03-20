import Image from 'next/image'
import Papa from "../../../public/Papasito.svg";



const TeamMember = (props) => {
  // console.log('Image source:', props.img);
  return (
    <>
      {" "}
      <div className=' w-44 h-auto px-0'>
        <Image
          priority
          src={props.img}
          // loading="lazy"
          width="0"
          height="0"
          sizes="100vw"
          className="h-full w-full object-cover"
          alt="Team Member photo"
        />
        <div className=' text-left mt-2 font-blogger text-[#3f362b] text-2xl lg:text-xl lg:leading-snug '>{props.name}</div>
        <div className=' text-left font-blogger opacity-70 text-[#3f362b] text-lg lg:text-base lg:leading-snug '>{props.position}</div>
        <div className=' text-left font-blogger opacity-70 text-[#3f362b] text-lg lg:text-base lg:leading-snug '>{props.year}</div>
      </div>
    </>
  )
}

export default TeamMember;