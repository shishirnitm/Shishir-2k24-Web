import Image from "next/image";

export default function Guest({ img, title, bio }) {
  return (
    <div>
      {" "}
      <div className="w-40 h-52 bg-primaryRed overflow-hidden">
        <Image
          src={img}
          loading="lazy"
          placeholder="blur"
          width="0"
          height="0"
          sizes="100vw"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="font-blogger mt-2 font-semibold text-lg text-primaryRed">
        {title}
      </div>
      <div className="font-blogger font-semibold text-md text-[#3F362B]">
        {bio}
      </div>
    </div>
  );
}
