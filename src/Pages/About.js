import React, { useEffect } from "react";
import aboutImg from "../assets/polished/polished3.webp";
import riverpebble from "../assets/riverpebbelstone/riverpebbles5.webp";
import whitepebble from "../assets/whitepebbels/white4.webp";
import art from "../assets/extraimgs/extra4.webp";
import { Link } from "react-router-dom";

const valuesImg = riverpebble;
const sustainabilityImg = whitepebble;
const integrationImg = art;

function AboutPage() {
  const flowSteps = [
    {
      name: "Quarrying",
      description: "Source material extraction",
      icon: "⛏️",
    },
    {
      name: "Manufacturing",
      description: "Cutting, polishing, and shaping",
      icon: "⚙️",
    },
    { name: "Logistics", description: "Transport and inventory", icon: "🚚" },
    {
      name: "Retail & Install",
      description: "Direct sales to final clients",
      icon: "🏡",
    },
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-200">
      {/* Banner Section */}
      <div className="relative dark:shadow-2xl dark:shadow-slate-100/10 w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={aboutImg}
          className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
          alt="About Background"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-gray-700/40 z-10"></div>
        <h1 className="relative z-20 text-[48px] sm:text-[52px] md:text-[64px] font-first tracking-wider font-bold text-white text-center animate-zoomIn">
          About Us
        </h1>
      </div>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-3xl sm:text-[32px] md:text-[36px] lg:text-[40px] text-transparent bg-clip-text bg-gradient-to-t from-gray-700 to-gray-300 hover:from-gray-300 hover:to-gray-700 font-ten tracking-tight font-extrabold text-center">
          Our Core Values 💎
        </h1>

        <div className="flex flex-col lg:flex-row items-center mt-10 gap-8 dark:text-white">
          {/* Text */}
          <div className="flex flex-col gap-6 lg:w-1/2 w-full">
            <p className="font-ten text-[15px] md:text-[17px] font-semibold text-left">
              At <span className="font-bold">Konduti Stones</span>, our work is
              guided by principles that ensure exceptional quality and ethical
              responsibility.
            </p>

            <ul className="font-ten space-y-4 text-[14px] md:text-[16px] font-medium text-left">
              <li>
                <span className="font-bold underline">
                  Integrity & Transparency:
                </span>{" "}
                We promise honest sourcing, clear communication, and reliable
                pricing for every client.
              </li>
              <li>
                <span className="font-bold underline">Craftsmanship:</span> We
                believe in the meticulous art of stone preparation, ensuring
                every pebble and boulder reflects excellence.
              </li>
              <li>
                <span className="font-bold underline">Stewardship:</span> We’re
                deeply committed to minimizing environmental impact and ensuring
                responsible quarrying.
              </li>
            </ul>

            <p className="font-ten text-[14px] md:text-[16px] text-justify">
              These values form the foundation of every stone we process and
              every partnership we build.
            </p>

            <p className="font-ten text-[14px]">
              Ready to see our products?{" "}
              <Link
                to={"/gallery"}
                className="text-blue-500 font-semibold hover:underline"
              >
                View Gallery
              </Link>
            </p>
          </div>

          {/* Image */}
          <div className="relative lg:w-1/2 w-full group h-[250px] sm:h-[350px] lg:h-[400px]">
            <div className="absolute inset-0 shadow-lg dark:shadow-slate-900 border-2 border-black dark:border-slate-200 translate-x-2 translate-y-2 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0"></div>
            <img
              src={valuesImg}
              alt="Konduti Stones Core Values"
              className="relative w-full h-full object-cover shadow-lg transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2"
            />
          </div>
        </div>
      </section>

      <hr className="border-gray-300 dark:border-gray-700 mx-4" />

      {/* Vertical Integration */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-3xl pb-2 sm:text-[32px] md:text-[36px] lg:text-[40px] text-transparent bg-clip-text bg-gradient-to-t from-gray-700 to-gray-300 hover:from-gray-300 hover:to-gray-700 font-ten tracking-tight font-extrabold text-center">
          Our Approach 🏭
        </h1>

        <div className="flex flex-col-reverse lg:flex-row items-center mt-10 gap-8 dark:text-white">
          {/* Image */}
          <div className="relative lg:w-1/2 w-full group h-[250px] sm:h-[350px] lg:h-[400px]">
            <div className="absolute inset-0 shadow-lg dark:shadow-slate-900 border-2 border-black dark:border-slate-200 translate-x-2 translate-y-2 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0"></div>
            <img
              src={integrationImg}
              alt="Vertical Integration Process"
              className="relative w-full h-full object-cover shadow-lg transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2"
            />
          </div>

          {/* Text and Flow Chart */}
          <div className="flex flex-col gap-6 lg:w-1/2 w-full justify-center">
            <p className="font-ten text-[14px] md:text-[16px] font-medium text-justify">
              Our <span className="font-bold">vertically integrated model</span>{" "}
              ensures total control from extraction to delivery, giving our
              clients unmatched reliability, quality, and value.
            </p>

            {/* --- Horizontal Flow Chart (No Fragments) --- */}
            <div className="flex justify-between items-start w-full overflow-x-auto p-4 border rounded-lg shadow-inner bg-gray-50 dark:bg-slate-800">
              {flowSteps.map((step, index) => (
                // Use a single wrapper div for each step-and-arrow combination
                <div key={step.name} className="flex items-start">
                  {/* Step Content */}
                  <div className="flex flex-col items-center min-w-[80px] text-center">
                    <span className="text-2xl mb-1">{step.icon}</span>
                    <p className="font-bold text-sm md:text-base font-ten leading-tight">
                      {step.name}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow Connector (Hidden on the last step) */}
                  {index < flowSteps.length - 1 && (
                    <div className="flex items-center justify-center h-full mx-2 md:mx-4 pt-4">
                      <span className="text-xl text-gray-500 dark:text-gray-400">
                        →
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* --- End Flow Chart --- */}

            {/* Benefits List (Simplified) */}
            <ul className="font-ten space-y-3 list-inside text-left text-[14px] md:text-[16px] font-medium">
              <li>
                <span className="font-bold underline">Quality Assurance:</span>{" "}
                Total control ensures integrity and consistency.
              </li>
              <li>
                <span className="font-bold underline">Cost Efficiency:</span>{" "}
                Direct operations eliminate middlemen for competitive pricing.
              </li>
            </ul>

            <p className="font-ten text-[14px]">
              Interested in a partnership?{" "}
              <Link
                to="/contact"
                className="text-blue-500 hover:underline font-semibold"
              >
                Contact Us
              </Link>
            </p>
          </div>
        </div>
      </section>

      <hr className="border-gray-300 dark:border-gray-700 mx-4" />

      {/* Sustainability Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-3xl pb-2 sm:text-[32px] md:text-[36px] lg:text-[40px] text-transparent bg-clip-text bg-gradient-to-t from-gray-700 to-gray-300 hover:from-gray-300 hover:to-gray-700 font-ten tracking-tight font-extrabold text-center">
          Commitment to Sustainability 🌿
        </h1>

        <div className="flex flex-col lg:flex-row items-center mt-10 gap-8 dark:text-white">
          {/* Text */}
          <div className="flex flex-col gap-4 lg:w-1/2 w-full justify-center">
            <p className="font-ten text-[14px] md:text-[16px] font-medium text-left">
              We are committed to **sustainable and ethical sourcing** to
              protect the planet for future generations.
            </p>
            <ul className="font-ten space-y-4 text-[14px] md:text-[16px] font-medium text-left">
              <li>
                <span className="font-bold underline">
                  Responsible Quarrying:
                </span>{" "}
                We restore sites post-extraction to minimize habitat disruption.
              </li>
              <li>
                <span className="font-bold underline">
                  Water & Energy Efficiency:
                </span>{" "}
                Our facilities use recycled water and energy-efficient
                machinery.
              </li>
              <li>
                <span className="font-bold underline">Waste Reduction:</span> We
                repurpose smaller fragments into aggregates or art materials.
              </li>
            </ul>
            <p className="font-ten text-[14px] md:text-[16px] font-medium text-left">
              Choosing Konduti Stones means choosing a partner dedicated to both
              **quality** and the **planet**.
            </p>
          </div>

          {/* Image */}
          <div className="relative lg:w-1/2 w-full group h-[250px] sm:h-[350px] lg:h-[400px] ">
            <div className="absolute inset-0 shadow-lg dark:shadow-slate-900 border-2 border-black dark:border-slate-200 translate-x-2 translate-y-2 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0"></div>
            <img
              src={sustainabilityImg}
              alt="Sustainability and ethical sourcing"
              className="relative w-full h-full object-cover shadow-lg transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
