//components
import Description from "../components/Description";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:gap-2">
        <Description />
        <Projects />
      </div>
      <Skills />
    </div>
  );
};

export default Home;
