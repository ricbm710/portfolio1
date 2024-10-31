//data
import { projects } from "../assets/projects";
//components
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <div className="p-4 bg-gray-50 rounded-md shadow-md border-2 border-gray-400 hover:shadow-lg transition-shadow duration-300 mt-1">
        <h1 className="font-semibold text-center mb-2">My Projects</h1>
        <div className="grid grid-cols-2 gap-4 justify-items-center">
          {projects.map((p) => (
            <ProjectCard project={p} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
