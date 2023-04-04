import '../styles.css';
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaRegEnvelope,
} from 'react-icons/fa';
function Footer() {
  return (
    <div className="flex justify-center text-xl bg-slate-800 text-gray-200 fixed bottom-0 left-0 w-full ">
      <ul className="flex space-x-4 items-center">
        <li className="flex items-center">
          <a
            href="mailto:loganbissette@gmail.com"
            target="_blank"
            className="flex items-center"
          >
            <FaRegEnvelope className="mx-1" /> Email
          </a>
        </li>
        <li className="flex items-center">
          <a
            href="https://github.com/lbissette"
            target="_blank"
            className="flex items-center"
          >
            <FaGithub className="mx-1" /> Github
          </a>
        </li>
        <li className="flex items-center">
          <a
            href="https://www.linkedin.com/in/logan-bissette-5a942b1a6/"
            target="_blank"
            className="flex items-center"
          >
            <FaLinkedin className="mx-1" /> LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
