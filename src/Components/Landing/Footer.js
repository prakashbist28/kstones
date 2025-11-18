import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import { footerlink } from "../../Data/Vols";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-black">
      <div className="  border-t min-h-40 mt-10 w-full flex flex-col md:flex-row p-8 gap-8">
        <div className="w-1/3 flex flex-col items-start gap-2 ">
          <h1 className="text-white  text-[14px] md:text-[18px] font-first font-extrabold">
            {" "}
            Social Links
          </h1>
          <div className="flex gap-3 md:gap-6 text-[30px] md:text-[40px] mt-2">
            <a
              href="https://www.linkedin.com/in/prakashbist28/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white  hover:scale-110 hover:text-blue-500 transition duration-300 hover:shadow-lg hover:shadow-blue-400 " />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareInstagram className="text-white hover:scale-110  hover:text-pink-400 transition duration-300 hover:shadow-lg hover:shadow-pink-400" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter className="text-white hover:scale-110  hover:text-gray-400 transition duration-300 hover:shadow-lg hover:shadow-gray-400" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-start">
          <h1 className="text-white  text-[14px] md:text-[18px] font-first font-extrabold">
            {" "}
            Company{" "}
          </h1>
          <div className="flex gap-8 md:gap-12 lg:gap-20 text-[12px] md:text-[14px] lg:text-[16px]">
            {footerlink &&
              footerlink.map((item) => (
                <Link
                  to={item.link}
                  key={item.id}
                  className="text-white group flex items-center font-medium font-first hover:text-gray-400 transition duration-500 hover:translate-x-2"
                >
                  {" "}
                  <h1 className="hidden absolute left-[-10px] md:left-[-20px] group-hover:flex dark:group-hover:text-gray-500 group-hover:text-gray-400 transition duration-500">
                    {" "}
                    <FaAngleRight />{" "}
                  </h1>
                  {item.title}{" "}
                </Link>
              ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-gray-400 text-xs md:text-sm font-first">
        © 2025 Konduti Stones. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
