import Image from "next/image";
import empty from "../../public/home/coming.png";

export default function Guest({ img, title, bio }) {
  return (
    <div>
      {" "}
      <div className="w-40 h-52 md:w-80 md:h-96 bg-primaryRed overflow-hidden">
        <Image
          src={img ? img : empty}
          loading="lazy"
          placeholder="blur"
          width="0"
          height="0"
          sizes="100vw"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="font-blogger mt-2 font-semibold text-lg md:text-2xl text-primaryRed">
        {title}
      </div>
      <div className="font-blogger font-semibold text-md md:text-xl text-[#3F362B]">
        {bio}
      </div>
    </div>
  );
}
