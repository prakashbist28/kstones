import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import work from "../assets/webimgs/work.webp";
import riverpebble from "../assets/riverpebbelstone/riverpebbles5.webp";
import whitepebble from "../assets/whitepebbels/white4.webp";
import art from "../assets/extraimgs/extra4.webp";
import aboutImg from "../assets/webimgs/about.webp";
import promise from "../assets/webimgs/promise.webp";

const projectsData = [
  {
    id: 1,
    title: "Modern Landscape Design",
    image: riverpebble,
    category: "Pebbles & Stones",
  },
  {
    id: 2,
    title: "Residential Retaining Wall",
    image: work,
    category: "Limestone Boulders",
  },
  {
    id: 3,
    title: "Custom Pebble Art Frame",
    image: art,
    category: "Pebble Art",
  },
  {
    id: 4,
    title: "Zen Garden Installation",
    image: whitepebble,
    category: "Pebbles & Stones",
  },
  {
    id: 5,
    title: "Coastal Erosion Control",
    image: aboutImg,
    category: "Limestone Boulders",
  },
  {
    id: 6,
    title: "Interior Feature Wall",
    image: promise,
    category: "Pebbles & Stones",
  },
];

function Projects() {
  useEffect(() => {
    // Scrolls to the top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className=" min-h-screen">
      {/* --- Page Banner (Kept as is) --- */}
      <div className="relative dark:shadow-2xl dark:shadow-slate-100/10 w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
        {/* Background image */}
        <img
          src={work}
          className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
          alt="Our Work Background"
        />

        {/* Gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-gray-600/50 z-10"></div>

        {/* Text content */}
        <h1 className="relative animate-zoomIn z-20 text-[48px] sm:text-[52px] md:text-[64px] font-first tracking-wider font-bold text-white text-center">
          Our Projects
        </h1>
      </div>

      {/* --- Projects/Gallery Section --- */}
      <div className="flex flex-col gap-16 m-auto p-8 py-20 lg:w-[80%] dark:text-white">
        {/* Gallery Introduction */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-[32px] md:text-[36px] lg:text-[40px] text-transparent bg-clip-text bg-gradient-to-t from-gray-900 to-gray-300 dark:from-white dark:to-gray-400 font-ten tracking-tight font-extrabold pb-4">
            Featured Installations
          </h2>
          <p className="font-ten text-[16px] md:text-[18px] font-medium text-gray-700 dark:text-gray-300">
            Explore a selection of our finest work, showcasing the versatility
            and quality of **Konduti Stones** across various landscaping and
            architectural applications.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            // Outer Link remains for the whole card to be clickable
            <Link
              key={project.id}
              to={`/projects/${project.id}`} // Link to a specific project page
              className="relative overflow-hidden rounded-xl shadow-xl group hover:shadow-2xl transition-all duration-500 ease-in-out"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay for details */}
              <div
                className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 
                   // CHANGES FOR MOBILE:
                   // Always show the overlay on small screens (opacity-100 sm:opacity-0)
                   opacity-100 sm:opacity-0 
                   // Hover state remains for larger screens
                   group-hover:opacity-100 
                   transition-opacity duration-500"
              >
                <p className="text-sm font-light text-gray-200 uppercase tracking-widest">
                  {project.category}
                </p>

                {/* The Title and Details are explicitly styled as the clickable content */}
                <h3 className="text-2xl font-bold text-white mb-2 underline">
                  {project.title}
                </h3>
                <span className="text-sm text-blue-300 font-semibold flex items-center">
                  View Details &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="font-ten text-[16px] md:text-[18px] font-medium text-gray-700 dark:text-gray-300 mb-6">
            Ready to start your own project?
          </p>
          <div className="group relative inline-block">
            <div className="absolute inset-0 translate-x-2 translate-y-2 border-2 border-black dark:border-white rounded-full transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></div>

            <Link
              to="/contact"
              className="relative inline-block px-8 py-3 bg-gray-800 border-2 border-black dark:border-white text-white font-bold rounded-full 
               hover:bg-white hover:text-black hover:border-black 
               transition duration-500 
               dark:bg-slate-200 dark:text-gray-900 dark:hover:bg-black dark:hover:text-white dark:hover:border-white"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
