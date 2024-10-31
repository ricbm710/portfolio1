//interfaces
import { Project } from "../interfaces/ProjectType";
//rrd
import { Link } from "react-router-dom";
//utils
import { basePath } from "../utils/basePath";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <>
      <div className="flex flex-col bg-gray-100 rounded-md shadow-md p-2">
        <div className="flex items-center justify-center text-center">
          <img
            src={`${basePath}projects/${project.logo}`}
            alt="logo"
            className="w-14 h-14 rounded-md border-2 border-gray-300 shadow-sm p-1 hover:shadow-md transition-shadow duration-300"
          />
          <div className="flex flex-col ms-2">
            <h2 className="text-sm">{project.name}</h2>
            <p className="text-xs text-gray-700">{project.description_short}</p>
          </div>
        </div>
        <div className="flex justify-around">
          <Link
            to={project.repo}
            className="text-sm px-2 py-1 text-gray-700 rounded-md underline hover:text-earthyellow transition-colors duration-200"
          >
            Repo
          </Link>
          <p>|</p>
          <Link
            to={project.live_page}
            className="text-sm px-2 py-1 text-gray-700 rounded-md underline hover:text-earthyellow transition-colors duration-200"
          >
            Page
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
