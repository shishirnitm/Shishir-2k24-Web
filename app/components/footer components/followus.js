import WA from "../../../public/Whatsapp.svg";
import Meta from "../../../public/Meta.svg";
import Insta from "../../../public/SocialInstagram.svg";
import Ln from "../../../public/LinkedIn.svg";
import Image from "next/image";
import contactus from "../../public/ContactUs.svg";
export default function followus() {
  return (
        <div className=" grid grid-cols-8">
          <a href="https://www.facebook.com/shishir.nitm?mibextid=LQQJ4d">
            <Image src={Meta} alt="Opps" className="h-[31px] w-auto" />
          </a>

          <a href="https://www.instagram.com/shishir_nitm?igsh=MXIzYzBvajFpdWRpNg==">
            <Image src={Insta} alt="Opps" className="h-[31px] w-auto" />
          </a>

          <a href=" https://wa.me/message/CUN5EZTFE2KKA1">
            <Image src={WA} alt="Opps" className="h-[31px] w-auto" />
          </a>

          <a href="   https://in.linkedin.com/company/shishir-nit-meghalaya">
            <Image src={Ln} alt="Opps" className="h-[31px] w-auto" />
          </a>
        </div>
  );
}
