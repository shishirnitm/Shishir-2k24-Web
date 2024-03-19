import Image from "next/image"
import backButton from "../../../public/back-button.svg"

const TeamHeader = (props) => {
    return (
        <div className='flex flex-row justify-between mx-5'>
            <div className=' font-bernier text-4xl text-primaryBlue'>{props.teamName}</div>
            <div className='flex flex-row w-min gap-3'>
                <div className='w-10 h-auto px-0'>
                    <Image
                        src={backButton}
                        alt="back button"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="h-full w-full object-contain"
                    />
                </div>
                <div className='w-10 h-auto px-0'>
                    <Image
                        src={backButton}
                        alt="back button"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="scale-x-[-1] h-full w-full object-contain"
                    />
                </div>
            </div>
        </div>
    )
}

export default TeamHeader