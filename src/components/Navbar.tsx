//assets
import face from "../assets/face.jpeg";
//fa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
//utils
import { basePath } from "../utils/basePath";

const Navbar = () => {
  return (
    <>
      <nav className="bg-earthyellow flex justify-between">
        <div className="flex flex-col items-start justify-center ms-8">
          <h1 className="font-bold">Ricardo Barrientos</h1>
          <h2 className="font-medium">Front-End Developer</h2>
          <div className="mt-2 flex">
            <FontAwesomeIcon icon={faLocationDot} />
            <p className="text-xs ms-2">Santa Cruz, Bolivia</p>
          </div>
        </div>
        <div className="p-2 me-2">
          <img
            src={face}
            alt="face"
            className="w-20 rounded-full border-2 border-pakistangreen"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
