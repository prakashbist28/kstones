import React, { useEffect, useState } from "react";
import { galleryData } from "../Data/Vols";
import gallery from "../assets/webimgs/gallery.webp";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative dark:shadow-2xl dark:shadow-slate-100/10 w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
        <img
          src={gallery}
          className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
          alt="Gallery Background"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-gray-600/50 z-10"></div>
        <h1 className="relative z-20 text-[48px] sm:text-[52px] md:text-[64px] font-first tracking-wider font-bold text-white text-center">
          Gallery
        </h1>
      </div>

      {/* CONTENT */}
      <div className="p-8 md:p-16">
        {galleryData.map((section) => (
          <div key={section.id} className="mb-10 pt-10">
            <h2 className="text-xl md:text-2xl dark:text-white font-first font-bold mb-2">
              {section.sectionTitle}
            </h2>
            <p className="text-gray-600 dark:text-gray-200 text-sm md:text-md font-first mb-4">
              {section.sectionDescription}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {section.images.map((img) => (
                <div
                  key={img.id}
                  className="relative border-2 group rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-64 lg:h-72 object-cover"
                  />

                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-lg">{img.title}</h3>
                    <p className="text-sm mt-1">{img.description}</p>

                    <button
                      onClick={() => setSelectedImage(img.url)}
                      className="mt-3 inline-block bg-white text-black text-sm px-3 py-1 rounded hover:bg-gray-200 transition"
                    >
                      View Full Image
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* FULL SCREEN IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          {/* Stop propagation so clicking inside image won't close modal */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black/50 px-3 py-1 rounded-full hover:bg-black transition"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            {/* Full Image */}
            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-[90vw] max-h-[85vh] rounded shadow-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
