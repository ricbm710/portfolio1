//data
import { skills } from "../assets/skills";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <>
      <div className="p-4 bg-gray-50 rounded-md shadow-md border-2 border-gray-400 hover:shadow-lg transition-shadow duration-300 mt-1 sm:text-lg">
        <h1 className="font-semibold text-center mb-2">My Skills</h1>
        <div className="grid grid-cols-5 sm:grid-cols-12 justify-items-center">
          {skills.map((s) => (
            <SkillCard skill={s} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
