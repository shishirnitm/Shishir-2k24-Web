import Image from "next/image";

export default function Poster({ img, width }) {
  return (
    <div>
      {" "}
      <div
        className={`${
          width === null ? "w-60" : width
        } h-96 md:w-[18vw] mr-2 ml-[8vw] md:ml-[5vw] md:h-[45vh] `}
      >
        <Image
          src={img}
          loading="lazy"
          width="0"
          height="0"
          sizes="100vw"
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
