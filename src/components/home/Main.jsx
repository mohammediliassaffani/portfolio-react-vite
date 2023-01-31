import React from "react";
import home from "../../assets/home.jpg";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen  object-cover object-left scale-x-[-1]"
        src={home}
        alt="home"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50 "></div>
    </div>
  );
};

export default Main;
