import React from "react";
import { kebabCase } from "@/utils/utils";
import Link from "next/link";

const bp = process.env.BASE_PATH || '';

function ProjectCard({ project }) {
  return (
    <div
      className="max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center"
      key={project.id}
    >
      <a
        href={project.link || project.github}
        target="_blank"
        className={`w-full relative rounded-xl border-fun-gray border p-2 transition-all duration-300 hover:-translate-y-2 hover:border-fun-pink will-change-projectCard group overflow-hidden`}
      >
        <img
          className="w-full rounded-md transition-transform duration-300 group-hover:scale-105"
          src={project.img.startsWith('http') ? project.img : `${bp}${project.img}`}
          alt={project.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-fun-pink-darkest via-fun-pink-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-4 m-2">
          <div className="text-white">
            <p className="text-xs font-semibold text-fun-pink-light uppercase tracking-wider">Ver Proyecto</p>
          </div>
        </div>
      </a>
      <div className="w-full mt-5">
        <div className="flex projects-center justify-between">
          <a href={project.link || project.github} target="_blank">
            <h3 className="text-lg font-bold">{project.title}</h3>
          </a>
          <div className="space-x-2">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                <img
                  src={`${bp}/static/icons/external-link.svg`}
                  width={16}
                  height={16}
                  alt="Link Icon"
                />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <img
                  src={`${bp}/static/icons/github.svg`}
                  width={16}
                  height={16}
                  alt="Github Icon"
                />
              </a>
            )}
          </div>
        </div>
        <p className="text-fun-gray text-left text-sm">{project.desc}</p>
        <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
          {project.tags.map((tag, index) => {
            return (
              <li key={tag}>
                <Link href={`/projects/tag/${kebabCase(tag)}`}>
                  <div className="m-1 rounded-lg text-sm bg-fun-pink-dark py-1 px-2 cursor-pointer hover:opacity-75">
                    {tag}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
