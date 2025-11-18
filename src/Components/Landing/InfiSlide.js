import React from "react";
import Marquee from "react-fast-marquee";
import { Infidata } from "../../Data/Vols"; // should contain {title, image, review}


function InfiSlide() {


  return (
    <div className="mt-10 lg:mt-16">
      <h1 className="text-[32px] md:text-[36px] lg:text-[40px] text-transparent bg-clip-text bg-gradient-to-t from-gray-900 to-gray-300 hover:from-gray-300 hover:to-gray-900 font-ten tracking-tight font-extrabold">
        Our Customers
      </h1>

      <Marquee pauseOnHover speed={40} >
        <div className="flex py-4">
          {Infidata &&
            Infidata.map((data, index) => (
              <div
                key={index}
                className="w-72 ml-4 md:ml-8 md:w-96 bg-white dark:bg border-2 border-gray-300 dark:border-2 dark:border-gray-600 dark:bg-gradient-to-t from-gray-800 to-black shadow-lg rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300"
              >
                {/* <img
                  src={data.image}
                  alt={data.title}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-orange-500"
                /> */}
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full object-cover  dark:border-slate-200 bg-gradient-to-tr from-gray-800 to-gray-500 ">
                  <div className="text-[40px] text-slate-200">
                    {data.image}
                  
                  </div>
                </div>
                <h3 className="mt-3 font-bold text-lg md:text-xl text-gray-800 dark:text-white">
                  {data.title}
                </h3>
                <p className="mt-2 text-sm md:text-base font-eighteen  text-gray-600 dark:text-gray-300">
                  “{data.review}”
                </p>
              </div>
            ))}
        </div>
      </Marquee>
    </div>
  );
}

export default InfiSlide;
