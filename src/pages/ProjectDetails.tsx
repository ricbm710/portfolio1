//rrd
import { useParams } from "react-router-dom";
//hooks
import { useEffect, useState } from "react";
//data
import { projects } from "../assets/projects";
//interfaces
import { Project } from "../interfaces/ProjectType";
//utils
import { basePath } from "../utils/basePath";
import ImageSlider from "../components/ImageSlider";

const ProjectDetails = () => {
  const { projectName } = useParams<string>();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [imageArray, setImageArray] = useState<string[]>(["", ""]);

  useEffect(() => {
    const project = projects.find((p) => p.name === projectName);
    setSelectedProject(project || null); // Use null if not found
  }, [projectName]);

  useEffect(() => {
    if (selectedProject) {
      const newImageArray = [
        `${basePath}projects/screenshots/${selectedProject.name}1.jpg`,
        `${basePath}projects/screenshots/${selectedProject.name}2.jpg`,
      ];
      setImageArray(newImageArray);
    } else {
      // Optionally handle the case when the project is not found
      setImageArray([""]); // or some placeholder image
    }
  }, [selectedProject]);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center items-center my-4">
          <ImageSlider images={imageArray} />
        </div>
        <h1 className="text-center sm:text-lg sm:mb-2">
          {selectedProject?.name} - {selectedProject?.description_short}
        </h1>
        <p className="text-xs sm:text-base text-gray-700 text-justify p-2 mx-4 sm:mx-18 md:mx-24 lg:mx-32">
          {selectedProject?.description_large}
        </p>
        <div className="flex justify-center items-center gap-16 my-3">
          <a
            href={selectedProject?.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-base rounded bg-earthyellow px-4 py-2 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50"
          >
            Visit Repo
          </a>
          <a
            href={selectedProject?.live_page}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-base rounded bg-earthyellow px-4 py-2 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50"
          >
            Visit Site
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
