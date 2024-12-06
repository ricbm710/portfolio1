//assets
import face from "../assets/face.jpeg";
//fa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faLocationDot } from "@fortawesome/free-solid-svg-icons";
//utils
import { basePath } from "../utils/basePath";
//rrd
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-earthyellow flex justify-center sm:gap-8 md:gap-12">
        <div className="flex items-center sm:justify-around ms-6">
          <Link to={basePath}>
            <FontAwesomeIcon icon={faHouse} size="xl" className="text-white" />
          </Link>
        </div>
        <div className="flex">
          <div className="flex flex-col items-start justify-center ms-8">
            <h1 className="font-bold sm:text-xl">Ricardo Barrientos</h1>
            <h2 className="font-medium sm:text-lg">Full Stack Developer</h2>
            <div className="mt-2 flex">
              <FontAwesomeIcon icon={faLocationDot} />
              <p className="text-xs sm:text-base ms-2">Santa Cruz, Bolivia</p>
            </div>
          </div>
          <div className="p-2 sm:p-4 me-2 sm:ms-8">
            <img
              src={face}
              alt="face"
              className="w-20 sm:w-24 rounded-full border-2 border-pakistangreen"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
