import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col mt-2 bg-gray-100 p-2">
        <h2 className="text-sm mb-1 ms-4 font-medium">Contact me:</h2>
        <div className="flex p-1 ms-6">
          <FontAwesomeIcon icon={faWhatsapp} className="me-1 text-tigerseye" />
          <p className="text-xs">+591 75577695</p>
        </div>
        <div className="flex p-1 ms-6">
          <FontAwesomeIcon icon={faEnvelope} className="me-1 text-tigerseye" />
          <p className="text-xs">ricardobarmont@gmail.com</p>
        </div>
        <div className="flex p-1 ms-6">
          <FontAwesomeIcon icon={faLinkedin} className="me-1 text-tigerseye" />
          <p className="text-xs">Ricardo Barrientos Montalvan</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
