import Link from "next/link";
import React from "react";
import { footer } from "@/data/global";

const bp = process.env.BASE_PATH || '';

function Footer() {
  return (
    <footer className="flex flex-col w-screen px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg">
      <div className="w-full max-w-4xl m-auto grid grid-cols-2 justify-between items-start">
        {footer.columns.map((item, index) => {
          return (
            <div key={index} className="text-left mb-5 sm:mb-0">
              <h4 className="uppercase text-fun-gray text-sm font-bold">
                {item.title}
              </h4>
              <div>
                {item.links.map((link, idx) => {
                  return (
                    <div key={idx} className="my-4">
                      {link.leavesWebsite ? (
                        <a
                          href={link.link}
                          target="_blank"
                          className="items-center flex"
                        >
                          {link.icon && (
                            <span className="pr-2 -mb-1">
                              <img src={`${bp}${link.icon}`} width={20} height={20} alt={link.name} />
                            </span>
                          )}
                          {link.name}
                        </a>
                      ) : (
                        <Link href={link.link}>{link.name}</Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-fun-pink-dark">
        <p className="flex flex-col items-center justify-center">
          <span className="mt-2 text-xs">
            © {new Date().getFullYear()} Sebastian Palomares. Todos los derechos reservados.
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
