import React, { useEffect, useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { MdCheckCircle } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { MoonLoader} from "react-spinners"
import contact from '../assets/webimgs/contact.webp'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", process.env.REACT_APP_MAIL_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

 
    if (data.success) {
      setLoading(false);
      setSuccess(true);
      event.target.reset();
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setSuccess(false);
      }, 5000);  

    } else {
      console.log("Error", data);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className="relative dark:shadow-2xl dark:shadow-slate-100/10 w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
        {/* Background image */}
        <img
          src={contact}
          className="absolute top-0 left-0 w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover object-center z-0"
          alt="Contact Background"
        />

        {/* Gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-[300px] md:h-[400px] lg:h-[500px] bg-gradient-to-t from-black to-gray-600/50 z-10"></div>

        {/* Text content */}
        <h1 className="relative z-20 text-[48px] sm:text-[52px] md:text-[64px] font-first tracking-wider font-bold text-white text-center animate-zoomIn">
          Get In Touch
        </h1>
      </div>

      <div className="w-full min-h-screen mt-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-20 justify-center p-6">
        <div className="w-full border-2 border-black dark:border-slate-100 max-w-lg bg-white dark:bg-black/80 shadow-lg p-8">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-eight font-bold mb-6 text-center  text-black dark:text-slate-200">
            Contact Us
          </h2>

          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-12">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-left font-medium text-slate-800 dark:text-slate-200 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-transparent border-b-2 border-slate-400 text-slate-900 dark:text-slate-100 focus:outline-none focus:shadow-xl dark:focus:shadow-gray-900 focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-left text-sm font-medium text-slate-800 dark:text-slate-200 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2  border-b-2 border-slate-400 bg-transparent text-slate-900 dark:text-slate-100 focus:outline-none focus:shadow-xl dark:focus:shadow-gray-900 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-left text-sm font-fourth font-semibold text-slate-800 dark:text-slate-200 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-b-2 border-slate-400 bg-transparent  text-slate-900 dark:text-slate-100 focus:outline-none focus:shadow-xl dark:focus:shadow-gray-900 focus:border-blue-500"
                placeholder="Write your message..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="relative w-full py-2 px-4 overflow-hidden border border-black bg-black text-white 
             dark:bg-white dark:border dark:text-black dark:border-white font-semibold transition duration-300 group"
            >
              {/* Sliding bar */}

              <div className="absolute left-0 top-0 h-full w-0 bg-gray-200 dark:bg-gray-800 transition-all duration-500 ease-out group-hover:w-full"></div>

              <FaArrowRightLong className="absolute -left-20 top-0 h-full text-black dark:text-white transition-all duration-700 ease-out group-hover:left-[90%]" />

              {/* Text */}
              <span className="relative z-10 group-hover:text-black dark:group-hover:text-white">
                Send Message
              </span>
            </button>
          </form>

          {loading && (
            <div className="flex justify-center mt-4">
              <MoonLoader size={30} color="#00ff4f" />
            </div>
          )}

          {success && (
            <h1 className="flex items-center justify-center gap-2 text-md mt-2 lg:text-lg text-green-400 font-eight">
              form submitted successfully <MdCheckCircle />{" "}
            </h1>
          )}
        </div>

        <h1 className="text-xl text-gray-400 font-bold font-eight">OR</h1>

        <div className=" flex flex-col gap-4 ">
          <h1 className="font-eight dark:text-white font-semibold text-2xl">
            {" "}
            You Can Reach Out To Us{" "}
          </h1>
          <div className="flex mt-4 gap-2 items-center">
            <div className="border-2 p-2 rounded-full bg-black text-white">
              <IoCallOutline size={20} />
            </div>
            <div className="flex flex-col">
            <h1 className="text-lg md:text-xl dark:text-white font-eight font-medium">
              +91 9666666685
            </h1>
            <h1 className="text-lg md:text-xl dark:text-white font-eight font-medium">
              +91 9676666685
            </h1>
            <h1 className="text-lg md:text-xl dark:text-white font-eight font-medium">
              +91 9666666684
            </h1>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="border-2 p-2 rounded-full bg-black text-white">
              <GoMail size={20} />
            </div>

            <a href="mailto:kondutibujii@gmail.com" className=" text-lg md:text-xl dark:text-white font-eight font-medium">
              kondutibujii@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
