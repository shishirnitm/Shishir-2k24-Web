import Image from "next/image";

export default function Gallery({ img }) {
  return (
    <div>
      {" "}
      <div className="w-80 h-aut`o">
        <Image
          src={img}
          loading="lazy"
          width="0"
          height="0"
          sizes="100vw"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}
