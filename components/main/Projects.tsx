import React from "react";
import ProjectCard from "../sub/ProjectCard";


const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"

    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/my-assignment12-c132e-web-app-2023-12-05-10_57_41.jpg"
          title="Modern Next.js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="https://my-assignment12-c132e.web.app/"
          git="https://github.com/eashishir/Mobile_Seller_uses-A12"

        />
        <ProjectCard
          src="/mine-assignment-11-web-app-2023-12-05-11_00_04.jpg"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="https://mine-assignment-11.web.app/"
          git="https://github.com/eashishir/-in-focus_photography-client-A11"
        />
        <ProjectCard
          src="/creative-project-manager-five-vercel-app-2023-12-05-11_01_00.jpg"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="https://creative-project-manager-five.vercel.app/"
          git="https://github.com/Tauhidul-IR/creative-project-manager"
        />
      </div>
    </div>
  );
};

export default Projects;
