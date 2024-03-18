import Image from "next/image";

export default function Poster({ img }) {
  return (
    <div>
      {" "}
      <div className="w-60 h-96">
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
