import Image from "next/image";
import React from "react";


interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
  git: string;
}

const ProjectCard = ({ src, title, description, link, git }: Props) => {
  return (

    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4 ">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2   text-gray-300">{description}</p>

        <div>
          <div className="flex justify-between">
            <a
              href={link}

              className="px-2 py-2    button-primary text-center text-white cursor-pointer rounded-lg "
            >
              Live link
            </a>
            <a
              href={git}

              className="px-2 py-2   button-primary text-center text-white cursor-pointer rounded-lg "
            >
              GitHub
            </a>
          </div>
        </div>




      </div>





    </div>
  );
};

export default ProjectCard;
