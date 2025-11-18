import React from "react";
import aboutImg from "../../assets/webimgs/about.webp";
import stat6 from "../../assets/statues/stat6.webp";
import polished1 from "../../assets/polished/polished1.webp";
import whitepebble from "../../assets/whitepebbels/white4.webp";
import art from "../../assets/extraimgs/extra4.webp";
import promise from "../../assets/webimgs/promise.webp";
import { Link } from "react-router-dom";

function Mission() {
  return (
    <>
      {/* story */}
      <section className="w-full bg-gray-200 dark:bg-gray-800 py-16">
        <div className="m-auto p-8 lg:w-[80%]">
          <h1 className="text-[32px] md:text-[36px] lg:text-[40px] text-transparent bg-clip-text bg-gradient-to-t from-gray-700 to-gray-300 hover:from-gray-300 hover:to-gray-700  font-ten tracking-tight font-extrabold">
            Our Story
          </h1>
          <div className="flex mt-10 flex-col-reverse lg:flex-row gap-8 dark:text-white">
            <div className="flex flex-col gap-4 lg:w-[50%] w-full justify-center">
              <p className="font-ten text-[16px] md:text-[18px]  font-semibold text-left">
                Welcome to Konduti Stones,{" "}
                <span className="font-medium text-[14px] md:text-[16px]">
                  where the raw beauty of the earth meets the vision of
                  exceptional design.
                </span>
              </p>
              <p className="font-ten text-[14px] md:text-[16px] font-medium text-left">
                For over [Number] years, we have been more than just a stone
                supplier; we are stewards of the natural world and partners in
                your most ambitious projects. Our business is built on a
                comprehensive, vertically integrated approach, giving us
                unrivaled control over quality from the moment the stone is
                unearthed to the final delivery.
              </p>
              <p className="font-ten text-[14px] md:text-[16px] font-medium text-left">
                Our unique strength lies in our deep connection to the source.
                We own and operate dedicated quarries for the responsible mining
                of premium limestone and high-quality boulders. This direct
                involvement ensures two things: a consistent supply of superior
                raw material and a commitment to sustainable practices
              </p>

              <p className="font-ten text-[14px]">
                {" "}
                Want to Know more about us?{" "}
                <Link
                  to={"/about"}
                  className="text-blue-500 font-semibold hover:underline"
                >
                  Learn More
                </Link>
              </p>
            </div>
            <div className="relative lg:w-[50%] w-full group">
              {/* Background box */}
              <div className="absolute top-0 left-0 w-full h-full shadow-lg dark:shadow-slate-900 border-2 border-black dark:border-slate-200  translate-x-3 translate-y-3 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0"></div>

              {/* Image */}
              <img
                src={aboutImg}
                alt="About Konduti Stones"
                className="relative w-full h-full object-cover  shadow-lg transition-all duration-500 group-hover:translate-x-3 group-hover:translate-y-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/*-------- offerings--------- */}
      <section className="w-full py-16">
        <div className="m-auto p-8 lg:w-[80%]">
          <h1 className="text-[32px] md:text-[36px] lg:text-[40px] text-transparent bg-clip-text bg-gradient-to-t from-gray-700 to-gray-300 hover:from-gray-300 hover:to-gray-700 font-ten tracking-tight font-extrabold">
            Our Offerings
          </h1>
          <div className="flex flex-col lg:flex-row mt-10 gap-8 dark:text-white">
            <div className="relative grid grid-cols-2 gap-[6px] lg:w-[50%] w-full">
              {/* Image 1 */}
              <img
                src={polished1}
                alt="About Konduti Stones"
                className="w-full h-52 md:h-64 object-cover rounded-lg hover:scale-95 shadow-lg transition-all duration-500"
              />
              {/* Image 2 */}
              <img
                src={whitepebble}
                alt="About Konduti Stones"
                className="w-full h-52 md:h-64  object-cover rounded-lg hover:scale-95 shadow-lg transition-all duration-500"
              />
              {/* Image 3 */}
              <img
                src={art}
                alt="About Konduti Stones"
                className="w-full h-52 md:h-64  object-cover rounded-lg hover:scale-95 shadow-lg transition-all duration-500"
              />
              {/* Image 4 */}
              <img
                src={stat6}
                alt="About Konduti Stones"
                className="w-full h-52 md:h-64  object-cover rounded-lg hover:scale-95 shadow-lg transition-all duration-500"
              />
            </div>

            <div className="flex flex-col gap-4 lg:w-[50%] w-full justify-center">
              <p className="font-ten text-[14px] md:text-[16px]  font-medium text-left">
                Here's what we offer to our clients:
              </p>
              <ul className="font-ten space-y-4 list-inside text-[14px] md:text-[16px] font-medium text-left">
                <li className="flex flex-col">
                  {" "}
                  <span className="font-bold underline">
                    Pebbles and River Stones:
                  </span>{" "}
                  We offer a top selection of natural stone elements, including Polished Pebbles in Jet Black, Cream, and Mixed Earth Tones, Natural River Cobbles, and unique Decorative Accent Stones. Our collection ensures superior aesthetics and reliable bulk supply for landscaping, water features, and interior design projects.

                </li>

                <li className="flex flex-col">
                  <span className="font-bold underline">
                    Pebble Art Frames:
                  </span>{" "}
                  Bring tranquility and bespoke charm to any interior with our exclusive Pebble Art Frames. Every frame features a one-of-a-kind stone and natural material composition, offering a durable, maintenance-free artistic statement that complements a range of design aesthetics.
                </li>

                <li className="flex flex-col">
                  <span className="font-bold underline ">
                    Stone Boulders:
                  </span>{" "}
                  Elevate your landscape design with the timeless beauty and robust presence of our Natural Limestone Boulders. Prized for their subtle, earthy tones and naturally textured surfaces, these monumental stones offer an unparalleled combination of elegance and durability.
                </li>

                <li className="flex flex-col">
                  <span className="font-bold underline ">
                    Statues and Sculptures:
                  </span>{" "}
                  Our collection of Natural Stone Statues and Sculptures offers more than just decoration, they are three-dimensional masterpieces, carved by skilled artisans to bring a focal point of sophistication, culture, and permanence to any setting.
                </li>
              </ul>
              <p className="font-ten text-[14px] ">
                Want to check more about our offerings?{" "}
                <Link
                  to="/gallery"
                  className="text-blue-500 hover:underline font-semibold"
                >
                  Click here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*----------- promise -------------*/}
      <section className="w-full bg-gray-200 dark:bg-gray-800 py-16">
        <div className="m-auto p-8 lg:w-[80%]">
          <h1 className="text-[32px] md:text-[36px] lg:text-[40px] text-transparent bg-clip-text bg-gradient-to-t from-gray-700 to-gray-300 hover:from-gray-300 hover:to-gray-700 font-ten tracking-tight font-extrabold">
            Our Promise
          </h1>
          <div className="flex flex-col-reverse lg:flex-row mt-10 gap-8 dark:text-white">
            <div className="flex flex-col gap-4 lg:w-[50%] w-full justify-center">
              <p className="font-ten text-[14px] md:text-[16px]  font-medium text-left">
                Whether you are a landscape architect, a contractor, or a
                homeowner embarking on a personal renovation, you can count on
                Konduti Stones for:
              </p>
              <ul className="font-ten space-y-4 list-inside text-[14px] md:text-[16px] font-medium text-left">
                <li className="flex flex-col">
                  {" "}
                  <span className="font-bold underline">
                    Uncompromising Quality:
                  </span>{" "}
                  Every stone, from a massive boulder to a polished marble tile,
                  meets our rigorous standards.{" "}
                </li>

                <li className="flex flex-col">
                  <span className="font-bold underline">Expert Guidance:</span>{" "}
                  Our team has deep material knowledge to help you select the
                  perfect product for longevity and aesthetics.
                </li>

                <li className="flex flex-col">
                  <span className="font-bold underline ">Reliability:</span> Our
                  direct mining operations mean better lead times and assured
                  product availability.
                </li>
              </ul>
              <p className="font-ten text-[14px] md:text-[16px] font-medium text-left">
                At Konduti Stones, we don't just sell stone—we deliver a piece
                of the earth's enduring artistry.
              </p>
            </div>
            <div className="relative lg:w-[50%] w-full  group">
              {/* Background box */}
              <div className="absolute top-0 left-0 w-full h-[90%] shadow-lg dark:shadow-slate-900 border-2 border-black dark:border-slate-200  translate-x-3 translate-y-3 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0"></div>

              {/* Image */}
              <img
                src={promise}
                alt="About Konduti Stones"
                className="relative w-full h-[90%] object-cover  shadow-lg transition-all duration-500 group-hover:translate-x-3 group-hover:translate-y-3"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mission;
