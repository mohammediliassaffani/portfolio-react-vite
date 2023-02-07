import React from "react";
import Skillsitems from "../skillsitems/Skillsitems";

const data = [
  {
    year: 2020,
    title: "content creator",
    duration: "3 years",
    details:
      "loreem loreem loreem loreem loreem loreem loreem loreem loreem loreem loreem loreem",
  },
  {
    year: 2020,
    title: "content creator",
    duration: "3 years",
    details:
      "loreem loreem loreem loreem loreem loreem loreem loreem loreem loreem loreem loreem",
  },
  {
    year: 2020,
    title: "content creator",
    duration: "3 years",
    details:
      "loreem loreem loreem loreem loreem loreem loreem loreem loreem loreem loreem loreem",
  },
  {
    year: 2020,
    title: "content creator",
    duration: "3 years",
    details:
      "loreem loreem loreem loreem loreem loreem loreem loreem loreem loreem loreem loreem",
  },
];
const Skills = () => {
  return (
    <div id="skills" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl front-bold text-center text-[#001b5e] ">
        Skills and Experience
      </h1>
      {data.map((item, idx) => (
        <Skillsitems
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Skills;
