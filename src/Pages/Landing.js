import React, { useEffect, useState } from "react";
import Carous from "../Components/Landing/Carous";
import InfiSlide from "../Components/Landing/InfiSlide";
import Mission from "../Components/Landing/Mission";
import { Link } from "react-router-dom";
import PageLoad from "../Components/PageLoad";

function Landing() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // simulate loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <PageLoad />}

      <div
        className={`transition-opacity duration-700 ${
          isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="overflow-x-scroll no-scrollbar min-h-screen flex flex-col gap-16 mb-24">
          <Carous />
          <InfiSlide />
          <Mission />
          <h1 className="text-center text-md md:text-xl font-ten text-gray-600 dark:text-gray-300">
            Like What You are Seeing?{" "}
            <Link
              to={"/contact"}
              className="text-blue-500 font-semibold hover:underline"
            >
              Get in Touch!
            </Link>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Landing;

