import React, { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
    }, 300); // match animation duration
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-black border-b-2 flex justify-between items-center z-20 relative">
      {/* Logo */}
      <div className="p-4">
        <Link
          to={"/"}
          className="font-thirteen tracking-tight text-white cursor-pointer text-3xl lg:text-5xl"
        >
          KONDUTI STONES
        </Link>
      </div>

      {/* Desktop Links */}
      <nav className="hidden md:flex items-center gap-4 lg:gap-10 px-4">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={` font-first font-light text-sm lg:text-lg transition-all duration-500 ease-in-out ${
              location.pathname === link.path
                ? "  text-white py-2 px-6 bg-gradient-to-t rounded-full from-gray-600 "
                : "text-white py-2 px-3 bg-transparent hover:text-gray-200 hover:bg-gray-600/50 rounded-full"
            }`}
          >
            {link.name}
          </Link>
        ))}

        {/* Theme Toggle */}
        <button onClick={toggleTheme} className="relative group">
          <MdDarkMode
            title="change theme"
            className="size-6 md:size-8 bg-gray-400 dark:bg-black dark:text-gray-400 dark:shadow-md dark:shadow-gray-400 text-black rounded-full transition ease-in-out duration-500"
          />
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-3">
        <button onClick={toggleTheme}>
          <MdDarkMode
            className="size-6 bg-gray-400 dark:bg-black dark:border-b-2 dark:border-gray-400 dark:text-gray-400 rounded-full transition"
          />
        </button>
        <button
          onClick={() => setMenuOpen(true)}
          className="text-white text-3xl mr-2"
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div
          className={`fixed top-0 right-0 w-3/4 sm:w-1/2 h-auto border rounded-md bg-black/40 backdrop-blur-md z-20 p-6 flex flex-col transform transition-transform duration-300 ${
            closing ? "animate-fadeOut" : "animate-fadeIn"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="self-end text-white text-3xl mb-6 border-2 hover:bg-white hover:text-black duration-200 rounded-full"
          >
            <FiX />
          </button>

          {/* Links */}
          <nav className="flex flex-col gap-6 text-center">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleClose}
                className={`font-semibold text-lg transition-colors ${
                  location.pathname === link.path
                    ? "text-black bg-white px-4 py-2 rounded-md"
                    : "text-white hover:text-gray-300 "
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
