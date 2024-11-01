//interface
import { Skill } from "../interfaces/SkillType";
//utils
import { basePath } from "../utils/basePath";

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-100 rounded-md shadow-md p-1 mb-3 w-16 sm:w-18 md:w-24 h-16 sm:h-18 md:h-24">
        <img
          src={`${basePath}skills/${skill.logo}`}
          alt="logo"
          className="w-8 h-8"
        />
        <p className="text-xs text-center">{skill.name}</p>
      </div>
    </>
  );
};

export default SkillCard;
