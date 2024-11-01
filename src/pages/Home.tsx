//components
import Description from "../components/Description";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="mx-2">
      <div className="flex flex-col lg:flex-row lg:gap-2">
        <Description />
        <Projects />
      </div>
      <Skills />
    </div>
  );
};

export default Home;
