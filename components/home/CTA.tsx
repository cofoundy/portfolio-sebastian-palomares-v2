import React from "react";

const bp = process.env.BASE_PATH || '';

function CTA() {
  return (
    <div className="pt-36 relative w-full">
      <img className="w-30 m-auto mb-2" src={`${bp}/static/doodles/lineBreak.svg`} />
      <div className="pt-14 pb-40">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          ¿Listo para crear algo increíble juntos?
        </h2>
        <a
          href="mailto:sebastianplt37@gmail.com"
          className="cursor-pointer font-bold whitespace-nowrap
        mt-6 px-8 py-3 text-white border-2 rounded-full border-white bg-bg hover:bg-fun-pink hover:border-fun-pink transition-colors"
        >
          Contáctame
        </a>
      </div>

      <img
        className="sqD min-w-[800px] bottom-[-100px] left-1/2 sm:bottom-[-150px] -translate-x-1/2 object-cover sm:min-w-[1100px]"
        style={{ zIndex: "-10" }}
        src={`${bp}/static/doodles/hero/fancyLines.svg`}
      />
    </div>
  );
}

export default CTA;
