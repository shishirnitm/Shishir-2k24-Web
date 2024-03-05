import "./mun.css"

const Mun = () => {
    return (
        <>
            <div className="background bg-[#FDF6E9] h-full w-screen flex flex-col items-center ">
                <div className="flex flex-col text-[#E03932] w-5/6 mt-20">
                    <div className=" font-bernier text-[40px] text-justify">NIT MEGHALAYA MUN</div>
                    <div className=" textStroke ">WHERE PASSION</div>
                    <div className=" textStroke ">MEETS PURPOSE</div>
                    <div className=" font-bloggerBold text-[#186B80] text-[20px] text-justify my-4 ">Empowering Young Minds, Fostering Global Solutions.</div>
                </div>
                {/* <div className="flex justify-center textStroke w-5/6 h-36">
                    <div className="w-80">WHERE PASSION MEETS PURPOSE</div>
                </div> */}
            </div>
        </>
    );
}

export default Mun;