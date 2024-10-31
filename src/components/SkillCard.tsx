//interface
import { Skill } from "../interfaces/SkillType";
//utils
import { basePath } from "../utils/basePath";

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-2">
        <img
          src={`${basePath}src/assets/skills/${skill.logo}`}
          alt="logo"
          className="w-8 h-8"
        />
        <p className="text-xs">{skill.name}</p>
      </div>
    </>
  );
};

export default SkillCard;
