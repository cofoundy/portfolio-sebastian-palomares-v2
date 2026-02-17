import React from "react";
import { Link as ScrollLink } from "react-scroll";

const bp = process.env.BASE_PATH || '';

function Hero() {
  return (
    <>
      <div
        className="relative heroElem w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        {/* Profile Photo */}
        <img
          src={`${bp}/static/profile.jpg`}
          alt="Sebastian Palomares"
          className="w-32 h-32 rounded-full mb-6 object-cover border-4 border-fun-pink shadow-lg"
        />

        <p className="text-xl mb-5">Hola, soy Sebastian Palomares.</p>

        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
          Disfruto <span className="heroShiny1 text-fun-pink">produciendo</span> y{" "}
          <span className="heroShiny2 text-fun-pink">creando</span> experiencias
          de marca.

          {/* DOODLE_TEXT_1: MARCA (right side) */}
          <svg
            className="sqD bottom-[-300px] -right-1/4 sm:right-[-20%] lg:bottom-[-310px] lg:right-[-120px] w-[350px]"
            style={{ animationDelay: "0.3s" }}
            viewBox="0 0 300 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="55"
              textAnchor="middle"
              style={{
                fontFamily: "'Gloria Hallelujah', cursive",
                fontSize: "52px",
                fill: "none",
                stroke: "#c084fc",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                opacity: 0.5,
              }}
            >
              MARCA
            </text>
          </svg>

          {/* DOODLE_TEXT_2: BTL (left side) */}
          <svg
            className="sqD hidden sm:block bottom-[-340px] left-[-180px] w-[200px]"
            style={{ animationDelay: "0.4s" }}
            viewBox="0 0 150 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="50"
              textAnchor="middle"
              style={{
                fontFamily: "'Gloria Hallelujah', cursive",
                fontSize: "52px",
                fill: "none",
                stroke: "#c084fc",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                opacity: 0.5,
              }}
            >
              BTL
            </text>
          </svg>

          {/* Creative doodles only */}
          <img
            className="sqD bottom-[-320px] right-[65%] sm:right-[45%]"
            style={{ animationDelay: "0.6s" }}
            src={`${bp}/static/doodles/hero/dino.svg`}
          />
          <img
            className="sqD right-[-60px] sm:right-0 bottom-[-180px] lg:[5%]"
            style={{ animationDelay: "0.7s" }}
            src={`${bp}/static/doodles/hero/paintbrush.svg`}
          />
          <img
            className="sqD squiggle-hero-pop1 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]"
            src={`${bp}/static/doodles/hero/pop1.svg`}
          />
        </h1>

        <p className="text-lg text-fun-gray mb-8 max-w-xl">
          Productor BTL · Community Manager · Creador de Contenido
        </p>

        <ScrollLink
          activeClass="active"
          to="learnmore"
          spy={true}
          offset={-30}
          smooth={true}
          duration={500}
        >
          <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-white border-2 text-xl rounded-full border-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
            Conoce mi trabajo
          </div>
        </ScrollLink>
      </div>
    </>
  );
}

export default Hero;
