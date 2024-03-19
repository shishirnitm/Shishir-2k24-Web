import WA from "../../public/Whatsapp.svg";
import Meta from "../../public/Meta.svg";
import Insta from "../../public/SocialInstagram.svg";
import Ln from "../../public/LinkedIn.svg";
import Image from "next/image";
import contactus from "../../public/ContactUs.svg";
export default function Footer() {
  return (
    <div className="flex flex-col ">
      <div id="home" className="pt-7 flex flex-row justify-center">
        <Image src={contactus} className="w-[100vw]  h-auto" />
      </div>
      <div className="flex flex-col mt-5 pl-[35px] pr-[36px] ">
        <div className="text-[#E03932] font-bernier text-[56px] mb-[-6px] ">

          Shishir
        </div>
        <div className="text-[#186B80] font-bloggerBold text-[20px] leading-[24px]">
          Bringing together people from all walks of life, brought to you by
          NIT-Meghalaya.
        </div>
        <div className="text-[#E03932] font-bernier text-[50px] mt-3 mb-[-6px] ">
          Follow Us On
        </div>
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
        <div className=" flex flex-row mt-3">
          <div className=" w-1/2 flex flex-col">
            <div className="text-[#E03932] font-bernier text-[32px]">
              Quick Links
            </div>
            <a
              className="text-[#186B80] font-blogger text-[17px] leading-[22px]"
              href="link-to-page"
            >
              <strong>Home </strong>
            </a>
            <a
              className="text-[#186B80] font-blogger text-[17px] leading-[22px]"
              href="link-to-page"
            >
              <strong>Events </strong>
            </a>
            <a
              className="text-[#186B80] font-blogger text-[17px] leading-[22px]"
              href="link-to-page"
            >
              <strong> Sponsors</strong>
            </a>
            <a
              className="text-[#186B80] font-blogger text-[17px] leading-[22px]"
              href="link-to-page"
            >
              <strong> Teams</strong>
            </a>
            <a
              className="text-[#186B80] font-blogger text-[17px] leading-[22px]"
              href="link-to-page"
            >
              <strong>NITM-MUN </strong>
            </a>
          </div>
          <div className="w-1/2 flex flex-col lp-2">
            <div className="text-[#E03932] font-bernier text-[32px] ">
              Legals
            </div>
            <a
              className="text-[#186B80] font-blogger text-[17px] leading-[22px]"
              href="https://www.nitm.ac.in/p/terms-and-conditions-2"
            >
              <strong>Terms and Conditions</strong>
            </a>
            <a
              className="text-[#186B80] font-blogger text-[17px] leading-[22px]"
              href="https://www.nitm.ac.in/p/copyright"
            >
              <strong> Copyright</strong>
            </a>
            <a
              className="text-[#186B80] font-blogger text-[17px] leading-[22px]"
              href="https://www.nitm.ac.in/p/disclaimer"
            >
              <strong> Disclaimer</strong>
            </a>
            <a
              className="text-[#186B80] font-blogger text-[17px] leading-[22px]"
              href="https://www.nitm.ac.in/p/privacy-policy"
            >
              <strong> Privacy Policy</strong>
            </a>
          </div>
        </div>
        <div className="text-[#E03932] mt-3 font-bernier text-[32px]">
          Contact And Support
        </div>
        <div className="text-[#186B80] font-blogger text-[17px] leading-[21px]">
          {" "}
          <strong>
            National Institute of Technology Meghalaya, Bijni Complex,
            Laitumkhrah Shillong-793003, Meghalaya, India Phone: 0364-2501294 |
            Fax: 0364-2501113
          </strong>
        </div>
        <div className="text-[#E03932] mt-3 font-bernier text-[32px]">
          Find US at
        </div>
        <div className="text-[#186B80] font-blogger text-[17px] leading-[21px]">
          <strong>
            National Institute of Technology Meghalaya Bijni Complex,
            Laitumkhrah, Shillong 793003
          </strong>
        </div>
        <div className="text-[#E03932] font-bernier text-[32px] mt-3">
          You&apos;ve Reached the end ~
        </div>
        <div className="text-[#186B80] font-blogger text-[16px] leading-[21px]">
          <strong>
            Designed and developed by {" "}
            <i>
              <spam className="text-[#E03932] ">
                <u>NITM Web Dev Creatives</u>
              </spam>
            </i>
          </strong>
        </div>
      </div>
      <div
        id="home"
        className=" p-[13px]  mt-4 font-blogger text-[14px] text-[#FFFFFF]
 flex justify-center items-center bg-[#186B80]"
      >
        @copyright 2024 nitm/shishir | All Rights Reserved
      </div>
    </div>
  );
}
