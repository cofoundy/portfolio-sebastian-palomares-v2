import React from "react";

const bp = process.env.BASE_PATH || '';

type HeadingProps = {
  tag?: string;
};

function Heading({ tag }: HeadingProps) {
  return (
    <div
      className={`${tag ? "pt-10 pb-4 sm:pt-24 sm:pb-20" : "py-12 sm:py-20"} w-full text-center relative`}
    >
      {tag ? (
        <>
          <h1 className="text-3xl sm:text-4xl inline-block w-auto mx-auto mb-8 relative">
            Campañas de <b>{tag}</b>
            <img
              className="sqD w-8 sm:w-10 -top-6 -right-2 sm:-right-8 sm:-top-8 absolute"
              src={`${bp}/static/doodles/skills/fillStar.svg`}
            />
          </h1>
        </>
      ) : (
        <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative">
          Campañas
          <img
            className="sqD w-10 -top-8 -right-8 absolute"
            src={`${bp}/static/doodles/skills/fillStar.svg`}
          />
        </h1>
      )}
      {!tag && (
        <p className="text-fun-gray text-xl sm:text-2xl max-w-3xl m-auto">
          Producción BTL, activaciones de marca, community management y estrategia
          digital. Estas son algunas de las campañas y proyectos que he liderado.
        </p>
      )}
    </div>
  );
}

export default Heading;
