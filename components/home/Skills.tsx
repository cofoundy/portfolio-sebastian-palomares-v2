import React from "react";
import { skills } from "@/data/content/home";

const bp = process.env.BASE_PATH || '';

function Skills() {
  return (
    <div className="flex flex-col md:flex-row justify-between relative">
      <h2 className="relative text-3xl w-full text-center md:text-left font-bold md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0">
        Experiencia real.
        <br />
        Estas son mis herramientas de trabajo.
        <img
          className="sqD bottom-[-80px] left-[-50px] lg:bottom-[-50px] lg:left-[-35px] z-[-10]"
          src={`${bp}/static/doodles/skills/laptop.svg`}
        />
        <img
          className="sqD top-[-15px] right-[-15px]"
          src={`${bp}/static/doodles/skills/fillStar.svg`}
        />
      </h2>
      <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-3 items-center place-content-center">
        {skills.map((item, index) => {
          return (
            <div
              title={item.title}
              key={index}
              className="w-10 mx-auto flex items-center flex-col justify-center"
            >
              <img src={item.icon} style={item.style} />
              <p className="text-xs text-fun-gray font-bold mt-3 opacity-80">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
