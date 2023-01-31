import React from "react";
import home from "../../assets/home.jpg";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen  object-cover object-left scale-x-[-1]"
        src={home}
        alt="home"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-blue-50/40 ">
        <div>
          <h1> Hi !I'm Iliass Affani</h1>
          <h2>
            I'm a
            <TypeAnimation
              sequence={[
                "Developper", // Types 'One'
                1000, // Waits 1s
                "Web", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "and Mobile",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "2em" }}
            />
          </h2>
          <div>
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
