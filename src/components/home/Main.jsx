import React from "react";
import home from "../../assets/home.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen  object-cover object-left scale-x-[-1]"
        src={home}
        alt="home"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-blue-50/40 ">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl yexy-4xl font-bold text-gray-800">
            I'm Iliass Affani
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Developper Web/Mobile", // Types 'One'
                1000, // Waits 1s
                "Designer", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Tech enthusiast",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full ">
            <a
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ..."
              href=""
            >
              <FaTwitter className="cursor-pointer" size={20} />
            </a>
            <a
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ..."
              href=""
            >
              <FaGithub className="cursor-pointer" size={20} />
            </a>
            <a
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ..."
              href=""
            >
              <FaInstagram className="cursor-pointer" size={20} />
            </a>
            <a
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ..."
              href=""
            >
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
